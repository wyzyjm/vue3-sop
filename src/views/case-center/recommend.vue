<template>
  <div>
    <div class="recomm mb20 k">
      <div class="rec-head">网站推荐</div>
      <div class="rec-query">
        <span>生产团队：</span>
        <p>
          <el-cascader
            ref="cascader"
            v-model="orgIds"
            :options="options"
            :props="{
              multiple: true,
              label: 'orgName',
              value: 'id'
            }"
            :collapse-tags="true"
            :show-all-levels="false"
            clearable
            placeholder="请选择生产团队">
          </el-cascader>
        </p>
        <span>服务单号：</span>
        <p>
          <el-input v-model="form.serviceCode" placeholder="请输入服务单号" clearable></el-input>
        </p>
        <el-button type="primary" @click="search">搜索</el-button>
      </div>
      <div class="rec-con">
        <div class="rec-con-item item-1">
          <b>{{detail.totalSize || 0}}</b>
          <p>当月发布网站数</p>
          <div class="con-circular-1"></div>
          <div class="con-circular-2"></div>
        </div>
        <div class="rec-con-item item-2">
          <b>{{detail.standardSize || 0}}</b>
          <p>当月达标网站数</p>
          <div class="con-circular-1"></div>
          <div class="con-circular-2"></div>
        </div>
        <div class="rec-con-item item-3">
          <b>{{detail.percent || 0}}%</b>
          <p>当月质检达标率</p>
          <div class="con-circular-1"></div>
          <div class="con-circular-2"></div>
        </div>
        <div class="rec-con-item item-4">
          <b>{{detail.recommendNums || 0}}<span>当月剩余可推荐 {{detail.remainderNums || 0}}</span></b>
          <p>当月推荐网站数量</p>
          <div class="con-circular-1"></div>
          <div class="con-circular-2"></div>
        </div>
      </div>
    </div>
    <div class="rec-table">
      <div class="mb15">
        <el-button type="primary" :disabled="isRecommend" @click="recommend(1)">推荐网站</el-button>
        <el-button type="primary" :disabled="isRecommend" @click="recommend(0)">取消推荐</el-button>
        <el-button type="info" class="rec-export" @click="exportRecommend" plain>导出数据</el-button>
      </div>
      <s-table 
        :data="data" 
        :cols="cols" 
        class="cb-table-style" 
        @selection-change="selectionRecommend">
      </s-table>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, ref } from '@vue/composition-api'
import { Message } from 'element-ui'
import filterEmptyArray from '@/util/filter-empty-array'
import getLoginuser from '@/api/1775-get-frontapi-service-provider-org-orglist-by-loginuser'
import webRecommend from '@/api/1739-post-service-order-web-case-statistics'
import getPagelist from '@/api/2189-post-service-order-web-case-pagelist'
import setRecommand from '@/api/1781-post-service-order-web-case-operation-batch-{isrecommand}'
export default defineComponent({
  setup(props, { root, refs }) {
    const orgIds = ref([]);

    let recommendData = reactive({
      isRecommend: true,
      options: [],
      selection: [],
      detail: {},
      data: [],
      cols: [
        {
          type: 'selection'
        },
        {
          showOverflowTooltip: true,
          label: '服务单号',
          prop: 'serviceCode',
        },
        {
          label: '客户姓名',
          prop: 'custName',
        },
        {
          label: '产品类型',
          prop: 'productType',
        },
        {
          label: '语言',
          prop: 'language',
        },
        {
          label: '设计师',
          prop: 'designUserName',
        },
        {
          label: '质检评分',
          prop: 'score',
        },
        {
          label: '操作',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() => recommend(row.recommandFlag?0:1, row)}
              >
                {row.recommandFlag ? '取消推荐' : '推荐网站'}
              </s-button>,
            ]
          }
        }
      ]
    })

    let form = reactive({
      serviceCode: ''
    })

    getLoginuser({resourceCode: 'case_recommend'})
    .then(({ data }) => {
      filterEmptyArray(data || [])
      recommendData.options = data || [];
    })

    const search = () => {
      form.orgId = __getLeafNode(orgIds.value);

      __getPagelist();
      __getRecommend();
      console.log("search",form)
    }

    const recommend = (isRecommand, row) => {
      let idList = '';
      if (row) {
        idList = [ row.id ];
      } else {
        idList = recommendData.selection.map(item => {
          return item.id || "";
        });
      }

      setRecommand({isRecommand, idList})
      .then(({code, msg}) => {
        if ( code == "SYS0000") {
          Message({
            type: 'success',
            message: (isRecommand?'网站推荐':'取消推荐')+'成功！'
          })
        } else {
          Message({
            type: 'error',
            message: msg
          })
        }
        __getPagelist();
      })
    }

    const selectionRecommend = (selection) => {
      recommendData.selection   = selection;
      recommendData.isRecommend = !selection.length
    }

    const exportRecommend = () => {
      let orgId = __getLeafNode(orgIds.value);
      let link  = document.createElement('a');
      link.href = `${process.env.VUE_APP_API_BASE_URL}/service-order/web-case/export?orgId=${orgId.join()}&serviceCode=${form.serviceCode}`
      link.click();
    }

    const __getRecommend = () => {
      return webRecommend(form)
      .then(({ data }) => {
        recommendData.detail = data || {};
      })
    }

    const __getPagelist = () => {
      return getPagelist(form)
      .then(({ data }) => {
        console.log("data", data)
        recommendData.data = data.records || [];
      })
    }

    const __getLeafNode = (aIds = []) => {
      let result = [];
      aIds.forEach((a) => {
        result.push(a[a.length-1])
      })      
      return result;
    }

    __getPagelist();
    __getRecommend();
    

    return {
      form,
      orgIds,
      search,
      recommend,
      exportRecommend,
      selectionRecommend,
      ...toRefs(recommendData)
    }
  },
})
</script>
<style lang="scss" scoped>
  .k {
    background: $sop-color-white;
    border-radius: 6px;
    border: 1px solid #EBEBEB;
  }
  .recomm {
    background: $sop-color-white;
    margin-bottom: 30px;
    .rec-head {
      text-indent: 20px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #EBEBEB;
    }
    .rec-query {
      display: flex;
      align-items: center;
      padding: 20px;
      p {
          padding: 0 20px;
      }
    }
    .rec-con {
      display: flex;
      padding: 0 20px 20px 20px;
      .rec-con-item {
        width: 200px;
        height: 124px;
        border: 1px solid #EBEBEB;
        border-radius: 6px;
        margin-right: 30px;
        color: #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 30px;
        position: relative;
        overflow: hidden;
        b {
          font-size: 32px;
          margin-bottom: 8px;
          span {
            padding-left: 8px;
            font-size: 14px;
            font-weight: normal;
          }
        }
        p {
          margin: 0;
          font-size: 14px;
        }
        .con-circular-1{
          background: $sop-color-white;
          width: 100px;
          height: 100px;
          position: absolute;
          right: -50px;
          top: 10px;
          opacity: .2;
          border-radius: 50%;
        }
        .con-circular-2{
          background: $sop-color-white;
          width: 100px;
          height: 100px;
          position: absolute;
          right: -18px;
          top: -40px;
          opacity: .2;
          border-radius: 50%;
        }
      }
      .item-1 {
        background: #18B398;
      }
      .item-2 {
        background: #5883ff;
      }
      .item-3 {
        background: #a690ec;
      }
      .item-4 {
        background: #f3976a;
        margin: 0;
      }
    }
  }
  .rec-export {
    float: right;
  }
</style>
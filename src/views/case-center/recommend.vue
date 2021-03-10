<template>
  <div>
    <div class="recomm mb20 k">
      <div class="rec-head">网站推荐</div>
      <div class="rec-query">
        <span>生产团队：</span>
        <p>
          <el-select v-model="form.orgId" placeholder="请选择" multiple>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              clearable>
            </el-option>
          </el-select>
        </p>
        <span>服务单号：</span>
        <p>
          <el-input v-model="form.serviceCode" placeholder="请输入客户名称"></el-input>
        </p>
        <el-button type="primary" @click="search">搜索</el-button>
      </div>
      <div class="rec-con">
        <div class="rec-con-item item-1">
          <b>200</b>
          <p>当月发布网站数</p>
          <div class="con-circular-1"></div>
          <div class="con-circular-2"></div>
        </div>
        <div class="rec-con-item item-2">
          <b>150</b>
          <p>当月达标网站数</p>
          <div class="con-circular-1"></div>
          <div class="con-circular-2"></div>
        </div>
        <div class="rec-con-item item-3">
          <b>65%</b>
          <p>当月质检达标率</p>
          <div class="con-circular-1"></div>
          <div class="con-circular-2"></div>
        </div>
        <div class="rec-con-item item-4">
          <b>10<span>当月剩余可推荐 10</span></b>
          <p>当月推荐网站数量</p>
          <div class="con-circular-1"></div>
          <div class="con-circular-2"></div>
        </div>
      </div>
    </div>
    <div class="rec-table">
      <s-simple-table 
        :data="data" 
        :cols="cols" 
        class="cb-table-style" 
        @selection-change="selectionRecommend">
          <div slot="top" class="mb15">
            <el-button type="primary" :disabled="isRecommend" @click="recommend(true)">推荐网站</el-button>
            <el-button type="primary" :disabled="isRecommend" @click="recommend(false)">取消推荐</el-button>
            <el-button type="info" class="rec-export" @click="exportRecommend" plain>导出数据</el-button>
          </div>
      </s-simple-table>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
// import { Message } from 'element-ui'
import webRecommend from '@/api/1739-post-service-order-web-case-statistics'
// import aaaa from '@/api/1562'
export default defineComponent({
  setup(props, { root }) {
    let recommendData = reactive({
      isRecommend: true,
      options: [],
      selection: [],
      data: [{code: 'OL20200910293'},{code: 'OL20200910292'}],
      cols: [
        {
          type: 'selection'
        },
        {
          showOverflowTooltip: true,
          label: '服务单号',
          prop: 'code',
        },
        {
          label: '客户姓名',
          prop: 'name',
        },
        {
          label: '产品类型',
          prop: 'custName',
        },
        {
          label: '语言',
          prop: 'subCompanyName',
        },
        {
          label: '设计师',
          prop: 'orderSourceName',
        },
        {
          label: '质检评分',
          prop: 'workStatus',
        },
        {
          label: '操作',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() => recommend(true, row)}
              >
                取消推荐
              </s-button>,
            ]
          }
        }
      ]
    })

    let form = reactive({
      orgId: [1],
      type: '',
      serviceCode: '',
      pageNum: 1,
      pageSize: 10
    })

    const __getRecommend = () => {
      // 获取接口
      webRecommend(form)
      .then((res) => {
        console.log("res",res)
        // recommendData.data = res.data || [];
      })
    }

    const search = () => {
      console.log("search",form)
    }

    const recommend = (b, row) => {
      let ids = '';
      if (row) {
        ids = row.code;
      } else {
        ids = recommendData.selection.map(item => {
          return item.code || "";
        }).join(",");
      }
      console.log("recommend", b, ids)
    }

    const selectionRecommend = (selection) => {
      recommendData.selection   = selection;
      recommendData.isRecommend = !selection.length
    }

    const exportRecommend = () => {
      // 导出数据
    }
    
    __getRecommend();

    return {
      ...toRefs(recommendData),
      form,
      search,
      recommend,
      exportRecommend,
      selectionRecommend
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
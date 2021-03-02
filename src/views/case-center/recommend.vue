<template>
  <div>
    <div class="recomm mb20 k">
      <div class="rec-head">网站推荐</div>
      <div class="rec-query">
        <span>生产团队：</span>
        <p>
          <el-select v-model="form.team" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </p>
        <span>服务单号：</span>
        <p>
          <el-input v-model="form.code" placeholder="请输入客户名称"></el-input>
        </p>
        <el-button type="primary">搜索</el-button>
      </div>
      <div class="rec-con">
        <div class="rec-con-item item-1">
          <b>200</b>
          <p>当月发布网站数</p>
        </div>
        <div class="rec-con-item item-2">
          <b>150</b>
          <p>当月达标网站数</p>
        </div>
        <div class="rec-con-item item-3">
          <b>65%</b>
          <p>当月质检达标率</p>
        </div>
        <div class="rec-con-item item-4">
          <b>10</b>
          <p>当月推荐网站数量</p>
        </div>
      </div>
    </div>
    <div class="rec-table">
      <s-simple-table :data="data" :cols="cols">
        <div slot="top" class="mb15">
          <el-button type="primary" @click="recommend">推荐网站</el-button>
          <el-button type="primary" @click="recommend">取消推荐</el-button>
        </div>
      </s-simple-table>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
export default defineComponent({
  setup(props, { root }) {
    let recommendData = reactive({
        options: [],
        data: [{code: 'OL20200910293'}],
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
            row.status = 1
            return [
              <s-button
                type="text"
              >
                取消推荐
              </s-button>,
            ]
          }
        }
      ]
    })

    let form = reactive({
      team: '',
      code: ''
    })

    const search = (form) => {
      console.log("search")
    }

    const recommend = (row) => {
      console.log("recommend", row)
    }

    return {
      ...toRefs(recommendData),
      form,
      search,
      recommend
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
        b {
          font-size: 32px;
          margin-bottom: 8px;
        }
        p {
          margin: 0;
          font-size: 14px;
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
</style>
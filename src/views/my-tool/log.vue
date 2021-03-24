<template>
  <div class="EtIiSG4XoP7h8BwC">
    <s-simple-table :data="table.data" :init="false" :page="false" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="服务单号" prop="serviceOrderCode" />
        <s-form-item label="操作账号" prop="userAccount" />
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/2141-get-service-order-operatelog'

export default defineComponent({
  setup() {
    const table = reactive({
      data: getTableData,
      cols: [
        {
          showOverflowTooltip: true,
          label: '操作类型',
          prop: ({ row }) => {
            return (
              <span>
                <span
                  class={
                    row.operateResult === '成功' ? 'ring green' : 'ring red'
                  }
                ></span>
                {row.operateType}
              </span>
            )
          },
          width: '180px',
        },
        {
          label: '操作人',
          prop: 'operaterName',
          width: '180px',
        },
        {
          label: '操作服务单',
          width: '180px',
          prop: 'orderCode',
        },
        {
          label: '执行结果',
          width: '80px',
          prop: ({ row }) => {
            return (
              <span class={row.operateResult === '成功' ? 'green' : 'red'}>
                <span class="dot"></span>
                {row.operateResult}
              </span>
            )
          },
        },
        {
          label: '操作时间',
          width: '180px',
          prop: 'operateTime',
        },
        {
          showOverflowTooltip: true,
          label: '操作详情',
          prop: 'operateDetail',
        },
      ],
    })

    return {
      table,
    }
  },
})
</script>
<style lang="scss" >
.EtIiSG4XoP7h8BwC {
  .green {
    color: #0dac5d;
    border-color: #0dac5d;
  }
  .red {
    color: #f04134;
    border-color: #f04134;
  }
  .dot,
  .ring {
    display: inline-block;
    vertical-align: middle;
    width: 8px;
    height: 8px;
    background: #0dac5d;
    border-radius: 50%;
    margin-right: 10px;
  }
  .ring {
    background: #fff;
    border: 2px solid;
  }
}
</style>
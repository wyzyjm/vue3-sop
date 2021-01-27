<template>
  <div>
    <s-simple-table :data="table.data" :cols="table.cols"></s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import { getTableData } from './service'
export default defineComponent({
  setup() {
    const table = reactive({
      data: getTableData,
      cols: [
        {
          showOverflowTooltip: true,
          label: '工单名称',
          prop: 'groupName',
        },
        {
          label: '生产单ID',
          prop: 'orderCode',
          width: '160px',
        },
        {
          label: '客户名称',
          prop: 'custName',
        },
        {
          label: '分公司',
          prop: 'subCompanyName',
        },
        {
          label: '订单来源',
          prop: 'orderSourceName',
        },
        {
          label: '状态',
          prop: 'workStatus',
        },
        {
          label: '创建日期',
          prop: 'strCreateDate',
        },
      ],
    })

    return {
      table,
    }
  },
})
</script>
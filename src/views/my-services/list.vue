<template>
  <div>
    <s-simple-table :data="table.data" :cols="table.cols">
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getList from '@/api/1700-get-service-order-sevice-order-info-list'

export default defineComponent({
  setup() {
    const table = reactive({
      checked: [],
      data: getList,
      cols: [
        {
          type: 'checkbox',
          key: 'id',
          width: '40px',
        }, 
        // {
        //   type: 'expand',
        //   prop: ({ row }) => (
        //     <s-simple-table uid={row.id} data={table.data} cols={table.cols} />
        //   ),
        // },
        {
          showOverflowTooltip: true,
          label: '服务单号',
          prop: 'serviceCode',
        },
        {
          label: '客户名称',
          prop: 'custName',
          showOverflowTooltip: true,
          width: '160px',
        },
        {
          label: '产品类型',
          showOverflowTooltip: true,
          prop: 'productType',
        },
        {
          label: '语言',
          showOverflowTooltip: true,
          prop: 'language',
        },
        {
          label: '业务类型',
          showOverflowTooltip: true,
          prop: 'businessType',
        },
        {
          label: '服务人员',
          showOverflowTooltip: true,
          prop: 'workStatus',
        },
        {
          label: '状态',
          showOverflowTooltip: true,
          prop: 'status',
        },
        {
          label: '服务单创建时间',
          width: 160,
          showOverflowTooltip: true,
          prop: 'createTime',
        },
        {
          label: '剩余周期',
          showOverflowTooltip: true,
          prop: 'wholeMakeSurplusCycle',
        },
      ],
    })

    const form = reactive({
      orderCode: '',
    })

    return {
      table,
      form,
    }
  },
})
</script>
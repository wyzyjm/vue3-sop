<template>
  <div>
    <breadcrumb />
    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" :model="form" inline>
        <s-form-item label="生产单ID" prop="orderCode">
          <s-input v-model="form.orderCode"></s-input>
        </s-form-item>
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
import { getTableData } from './service'
export default defineComponent({
  setup() {
    const table = reactive({
      data: getTableData,
      cols: [
        {
          type: 'expand',
          prop: ({ row }) => (
            <s-simple-table uid={row.id} data={table.data} cols={table.cols} />
          ),
        },
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
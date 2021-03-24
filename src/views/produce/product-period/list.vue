<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" />
    <s-simple-table v-model="table.checked" :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="服务产品名称" prop="serviceProductName" />
        <!-- <s-form-item label="产品线" prop="name" /> -->
        <s-form-item label="创建时间" prop="date" value-format="yyyy-MM-dd hh:mm:ss" component="el-date-picker" type="datetimerange" />
        <s-form-item label="服务产品编码" prop="serviceProductCode" />
        <!-- <s-form-item label="状态" prop="status" component="s-group" :data="options" /> -->
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div class="mb20" slot="top">
        <s-button type="primary" :disabled="table.checked.length===0" @click="dialog.open({data:table.checked})">批量设置</s-button>
      </div>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1526-get-production-config-service-product-production-cycle-search'
import useDialog from '@/hooks/use-dialog'
import useOptions from '../service-product/hooks/use-options'
// import { Message } from 'element-ui'

export default defineComponent({
  setup() {
    const dialog = useDialog({
      uid: 'set-product-period',
      title: '生产周期设置',
      width: '500px',
      component: require('./dialog/set'),
    })

    const options = useOptions()

    const options1 = [
      { label: '自然日', value: 0 },
      { label: '工作日', value: 1 },
    ]

    const table = reactive({
      checked: [],
      data: (params) => {
        try {
          params.serviceProductCreateTimeFrom = params.date[0]
          params.serviceProductCreateTimeTo = params.date[1]
          delete params.date
        } catch (err) {
          // console.log(err)
        }
        return getTableData(params)
      },
      cols: [
        {
          type: 'checkbox',
          width: '44px',
        },
        {
          showOverflowTooltip: true,
          label: '服务产品名称',
          prop: 'serviceProductName'
        },
        {
          label: '服务产品编码',
          showOverflowTooltip: true,
          prop: 'serviceProductCode',
        },
        {
          label: '服务产品分类',
          width: '110px',
          prop: ({ row }) =>
            options.type.find((v) => v.code === row.serviceProductType).name,
        },
        {
          label: '创建时间',
          width: '180px',
          prop: 'createTime',
        },
        {
          label: '基准生产周期（天）',
          width: '100px',
          prop: 'baseCycle',
        },
        {
          label: '同风格时限（天）',
          width: '100px',
          prop: 'sameStyleTimeLimit',
        },
        {
          label: '不同风格时限（天）',
          width: '100px',
          prop: 'differentStyleTimeLimit',
        },
        {
          label: '蓝色预警周期（天）',
          width: '100px',
          prop: 'blueWarningCycle',
        },
        {
          label: '黄色预警周期（天）',
          width: '100px',
          prop: 'yellowWarningCycle',
        },
        {
          label: '橙色预警周期（天）',
          width: '100px',
          prop: 'orangeWarningCycle	',
        },
        {
          label: '红色预警周期（天）',
          width: '100px',
          prop: 'redWarningCycle',
        },
        {
          label: '',
          width: '80px',
          prop: ({ row }) => {
            const l = options1.find((v) => v.value === row.dateType)
            return l && l.label
          },
        },
        {
          label: '操作',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() => dialog.open({ data: [row], isEdit: true })}
              >
                编辑
              </s-button>,
            ]
          },
        },
      ],
    })

    return {
      dialog,
      table,
    }
  },
})
</script>
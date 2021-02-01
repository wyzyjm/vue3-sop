<template>
  <div>
    <breadcrumb />
    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" :model="form" inline>
        <s-form-item label="服务流程名称" prop="orderCode">
          <s-input v-model="form.orderCode"></s-input>
        </s-form-item>
        <s-form-item label="状态" prop="orderCode">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in table.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </s-form-item>
        <s-form-item label="关联工作流" prop="relation">
          <s-input v-model="form.relation"></s-input>
        </s-form-item>

        <s-form-item>
          <s-button type="primary" run="form.search">搜索</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div slot="top" class="mb20">
        <el-button type="primary">新增流程</el-button>
        <el-button type="primary" @click="$store.commit('dialog/open',{propsTest:'flow'})">复制流程</el-button>
      </div>
    </s-simple-table>
    <s-dialog title="弹窗标题" :component="require('./dialog/dialog-test.vue')"></s-dialog>
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
      options: [
        {
          value: '1',
          label: '停用'
        }, {
          value: '2',
          label: '启用'
        }
      ]
    })

    const form = reactive({
      orderCode: '',
      relation: ''
    })

    return {
      table,
      form,
    }
  },
})
</script>
<template>
  <div>
    <s-simple-table v-model="table.checked" :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="服务产品名称" prop="name" />
        <s-form-item label="服务产品类型" prop="name" component="s-group" :data="type" />
        <s-form-item label="服务产品编码" prop="name" />
        <s-form-item label="状态" prop="status" component="s-group" :data="options" tag="el-radio-group" />
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div slot="top" class="mb20">
        <el-button type="primary" @click="dialog.open">新增</el-button>
        <el-button type="primary" @click="importDialog.open">导入映射</el-button>
        <el-button type="primary" @click="productionSetDialog.open">生产流程</el-button>
      </div>
    </s-simple-table>
    <s-dialog v-bind="dialog" @close="dialog.close" />
    <s-dialog v-bind="productionSetDialog" @close="productionSetDialog.close" />
    <s-dialog v-bind="importDialog" @close="importDialog.close" />
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1494-get-service-product-search'
import useDialog from '@/hooks/use-dialog'
import useState from '@/hooks/use-state/shelves-state'
import _setState from '@/api/1492-put-service-product'
import useSafeParams from '@/hooks/use-router-util/sale-params'
import useOptions from './hooks/use-options'

export default defineComponent({
  setup(props, { root }) {
    const { setState, getStateText, options } = useState(undefined, (row) => {
      row.status = 1 ^ row.status
      return _setState(row).then(() => {
        root.$store.commit('table/update')
      })
    })

    const dialog = useDialog({
      uid: 'add',
      dynamicTitle: (data) => (data.isEdit ? '编辑产品线' : '新增产品线'),
      width: '500px',
      component: require('./dialog/add'),
    })

    const productionSetDialog = useDialog({
      uid: 'productionSetDialog',
      title: '生产流程',
      width: '800px',
      component: require('./dialog/production-set'),
    })

    const importDialog = useDialog({
      uid: 'importDialog',
      title: '导入数据',
      width: '600px',
      component: require('./dialog/import'),
    })

    const view = (data) => {
      root.$router.push(`./detail/${useSafeParams(data)}`)
    }

    const table = reactive({
      checked: [],
      data: getTableData,
      cols: [
        {
          type: 'checkbox',
          key: 'id',
          width: '40px',
        },
        {
          label: '服务产品名称',
          prop: 'name',
        },
        {
          label: '服务产品编码',
          prop: 'code',
        },
        {
          label: '服务产品类型',
          prop: 'serviceContent',
        },
        {
          label: '状态',
          prop: (row) => `已${getStateText(row.status)}`,
        },
        {
          label: '创建时间',
          prop: 'createTime',
        },
        {
          label: '操作',
          prop: ({ row }) => {
            row.status = 1
            return [
              <s-button
                type="text"
                onClick={() =>
                  productionSetDialog.open({ data: row, isEdit: true })
                }
              >
                生产流程
              </s-button>,
              <s-button type="text" onClick={() => setState(row)}>
                {getStateText(1 ^ row.status)}
              </s-button>,
              <s-button type="text" onClick={() => view(row)}>
                查看
              </s-button>,
            ]
          },
        },
      ],
    })

    const { type } = useOptions()

    return {
      table,
      dialog,
      importDialog,
      productionSetDialog,
      options,
      type,
    }
  },
})
</script>
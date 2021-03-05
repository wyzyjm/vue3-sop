<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" />
    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="状态名称" prop="name" />
        <s-form-item label="状态" clearable prop="status" component="s-group" :data="options" />
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div class="mb20" slot="top">
        <s-button type="primary" @click="dialog.open">新增</s-button>
      </div>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import setServiceTypeStatus from '@/api/1520-put-production-config-service-order-status'
import getTableData from '@/api/1522-get-production-config-service-order-status-search'
import useDialog from '@/hooks/use-dialog'
import useState from '@/hooks/use-state/disable-state'
import { Message } from 'element-ui'

export default defineComponent({
  setup(props, { root }) {
    const { setState, getStateText, options } = useState(
      {
        message:
          '停用后服务生产流程配置将无法选择该业务类型，请确认是否继续停用？',
      },
      (row) => {
        row.status = 1 ^ row.status
        return setServiceTypeStatus(row).then(() => {
          Message({
            type: 'success',
            message: '操作成功！',
          })
          root.$store.commit('table/update')
        })
      }
    )
    const dialog = useDialog({
      uid: 'add-service-type',
      dynamicTitle: (data) =>
        data.isEdit ? '编辑服务单状态' : '新增服务单状态',
      width: '500px',
      component: require('./dialog/add-service-type'),
    })

    const table = reactive({
      data: getTableData,
      cols: [
        {
          label: '状态名称',
          prop: 'name',
          showOverflowTooltip: true,
        },
        {
          label: '状态编码',
          showOverflowTooltip: true,

          prop: 'code',
        },
        {
          label: '状态',
          width: '80px',
          prop: ({ row }) => getStateText(row.status),
        },
        {
          label: '描述',
          showOverflowTooltip: true,

          prop: 'description',
        },
        {
          label: '创建时间',
          width: '180px',
          prop: 'createTime',
        },
        {
          label: '操作项',
          width: '120px',
          prop: ({ row }) => {
            return [
              <s-button type="text" onClick={() => setState(row)}>
                {getStateText(1 ^ row.status)}
              </s-button>,
              <s-button
                type="text"
                onClick={() => dialog.open({ data: row, isEdit: true })}
              >
                编辑
              </s-button>,
            ]
          },
        },
      ],
    })

    return {
      options,
      dialog,
      table,
    }
  },
})
</script>
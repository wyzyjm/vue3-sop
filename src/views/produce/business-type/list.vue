<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" />

    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="业务类型" prop="name" />
        <s-form-item label="状态" prop="status" component="s-group" :data="options" />
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
import getTableData from '@/api/1408-get-production-config-business-type-search'
import setBusinessType from '@/api/1406-put-production-config-business-type'
import useDialog from '@/hooks/use-dialog'
import useState from '@/hooks/use-state/disable-state'
import { Message } from 'element-ui'

export default defineComponent({
  setup(props, { root }) {
    const { setState, getStateText, options } = useState(
      {
        message: '停用后服务产品入驻将无法选择该业务类型，请确认是否继续停用？',
      },
      (row) => {
        row.status = 1 ^ row.status
        return setBusinessType(row).then(() => {
          Message({
            type: 'success',
            message: '操作成功！',
          })
          root.$store.commit('table/update')
        })
      }
    )

    const dialog = useDialog({
      dynamicTitle: (data) => (data.isEdit ? '编辑业务类型' : '新增业务类型'),
      width: '500px',
      uid: 'add-business-type',
      component: require('./dialog/add-business-type'),
    })

    const table = reactive({
      data: getTableData,
      cols: [
        {
          showOverflowTooltip: true,
          label: '业务名称',
          prop: 'name',
        },
        {
          label: '业务code',
          prop: 'code',
        },
        {
          label: '状态',
          prop: ({ row }) => getStateText(row.status),
        },
        {
          label: '创建时间',
          prop: 'createTime',
        },
        {
          label: '操作项',
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
      dialog,
      table,
      options,
    }
  },
})
</script>
<template>
  <div>
    <s-simple-table :page="false"  row-key="id" :data="table.data" :cols="table.cols">
      <div slot="top" class="mb20">
        <el-button type="primary" @click="dialog.open">新增</el-button>
      </div>
    </s-simple-table>
    <s-dialog v-bind="dialog" @close="dialog.close" />
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1424-get-production-config-sales-channel-treelist'
import useDialog from '@/hooks/use-dialog'
import useState from '@/hooks/use-state/disable-state'
import _update from '@/api/1436-put-production-config-sales-channel'
import { Message } from 'element-ui'
import getProductionConfig from '@/api/1434-get-production-config-sales-channel'
export default defineComponent({
  setup(props, { root }) {
    const { setState, getStateText } = useState(
      {
        message: '请确认是否停用该售卖渠道？',
      },
      (row) => {
        row.status = 1 ^ row.status
        return _update({ id: row.id, status: row.status }).then(() => {
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
      dynamicTitle: (data) => (data.isEdit ? '编辑售卖渠道' : '新增售卖渠道'),
      width: '500px',
      component: require('./dialog/add-sales-channels'),
    })

    const table = reactive({
      data: getTableData,
      cols: [
        {
          showOverflowTooltip: true,
          label: '渠道名称',
          prop: 'name',
        },
        {
          label: '渠道编码',
          showOverflowTooltip: true,
          prop: 'code',
        },
        {
          label: '状态',
          width: '80px',
          prop: ({ row }) => {
            return getStateText(row.status)
          },
        },
        {
          label: '创建时间',
          width: '180px',
          prop: 'createTime',
        },
        {
          label: '操作',
          width: '120px',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() => {
                  return getProductionConfig({ id: row.id }).then(
                    (response) => {
                      dialog.open({ data: response.data, isEdit: true })
                    }
                  )
                }}
              >
                编辑
              </s-button>,
              <s-button type="text" onClick={() => setState(row)}>
                {getStateText(1 ^ row.status)}
              </s-button>,
            ]
          },
        },
      ],
    })

    return {
      table,
      dialog,
    }
  },
})
</script>
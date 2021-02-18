<template>
  <div>
    <s-simple-table :page="false" :data="table.data" :cols="table.cols">
      <div slot="top" class="mb20">
        <el-button type="primary" @click="dialog.open">新增</el-button>
      </div>
    </s-simple-table>
    <s-dialog v-bind="dialog" @close="dialog.close" />
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1424-get-sales-channel-treelist'
import useDialog from '@/hooks/use-dialog'
import useOptions from './hooks/use-options'
import _update from '@/api/1436-put-sales-channel'

import { MessageBox } from 'element-ui'

export default defineComponent({
  setup(props, { root }) {
    const setState = async (row) => {
      if (row.status === 0) {
        const isContinue = await MessageBox.confirm(
          '请确认是否停用该售卖渠道？',
          '停用',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }
        )

        if (!isContinue) return
      }

      return _update(row).then(() => {
        root.$store.commit('table/update')
      })
    }
    const dialog = useDialog({
      uid: 'add-service-type',
      title: '新增业务类型',
      width: '500px',
      component: require('./dialog/add-sales-channels'),
    })
    const options = useOptions()

    const getLabel = (options, value) => {
      const c = options.find((v) => v.value === value)
      return c && c.label
    }
    const table = reactive({
      data: getTableData,
      cols: [
        {
          type: 'expand',
          prop: ({ row }) => (
            <s-simple-table
              page={false}
              uid={row.id}
              data={row.children}
              cols={table.cols}
            />
          ),
        },
        {
          showOverflowTooltip: true,
          label: '渠道名称',
          prop: 'name',
        },
        {
          label: '渠道编码',
          prop: 'code',
        },
        {
          label: '状态',
          prop: 'status',
        },
        {
          label: '创建时间',
          prop: 'createTime',
        },
        {
          label: '操作',
          prop: ({ row }) => {
            // row.status=0
            return [
              <s-button
                type="text"
                onClick={() => dialog.open({ data: row, isEdit: true })}
              >
                编辑
              </s-button>,
              <s-button
                type="text"
                onClick={() =>
                  setState({
                    ...row,
                    status: 1 ^ row.status,
                  })
                }
              >
                {getLabel(options.status, 1 ^ row.status)}
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
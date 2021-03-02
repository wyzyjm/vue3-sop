<template>
  <div>
    <s-simple-table :uid="uid" :page="false" :data="table.data" :cols="table.cols"></s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1460-get-service-order-cust-service-show-config-nodelist-{stageid}'
import _delete from '@/api/1478-delete-service-order-cust-service-show-config-node-{nodeid}'
import _update from '@/api/1480-post-service-order-cust-service-show-config-node-{nodeid}'
import {
  isEdit,
  createEditRow,
  saveEdit,
  startEdit,
  resetEdit,
} from '../hooks/use-edit-row'
export default defineComponent({
  props: {
    uid: {
      default: 0,
    },
  },
  setup(props, { root }) {
    const deleteNode = (params) => {
      return _delete(params).then(() => {
        root.$store.commit('table/update', {
          _uid: props.uid,
        })
      })
    }

    const table = reactive({
      data(params) {
        resetEdit()
        getTableData({ custShowConfigId: props.uid, ...params })
        return new Promise((r) =>
          r({
            list: [{ nodeName: new Date().getTime(), id: 'r2r32r23' }],
          })
        )
      },
      cols: [
        {
          showOverflowTooltip: true,
          label: '环节名称',
          prop: ({ row }) => {
            return createEditRow(row, 'nodeName')
          },
        },
        {
          label: '展示顺序',
          prop: ({ row }) => {
            return createEditRow(row, 'orderSort')
          },
        },
        {
          label: '进行中显示状态',
          prop: ({ row }) => {
            return createEditRow(row, 'progressStatusName')
          },
        },
        {
          label: '进行中显示话述',
          prop: ({ row }) => {
            return createEditRow(row, 'progressTerm')
          },
        },
        {
          label: '显示编辑内容',
          prop: ({ row }) => {
            return createEditRow(row, 'showContentCode')
          },
        },
        {
          label: '显示文档',
          prop: ({ row }) => {
            return createEditRow(row, 'showDocumentFileName')
          },
        },
        {
          label: '操作项',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() =>
                  isEdit(row)
                    ? saveEdit(() => {
                        return _update(row).then(() => {
                          root.$store.commit('table/update', {
                            _uid: props.uid,
                          })
                        })
                      })
                    : startEdit(row)
                }
              >
                {isEdit(row) ? '保存' : '编辑'}
              </s-button>,
              <s-button
                type="text"
                onClick={() => {
                  deleteNode({ nodeId: row.id })
                }}
              >
                删除
              </s-button>,
            ]
          },
        },
      ],
    })

    const addTableCol = () => {
      const tableColModel = reactive({
        aaa: 1,
      })
      table.data.push(tableColModel)
    }

    return {
      addTableCol,
      table,
    }
  },
})
</script>
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
import getBusinessflownodelist from '@/api/1512-get-service-order-cust-service-show-config-getbusinessflownodelist-{businessflowdefid}'

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
    businessFlowDefId: {
      required: true,
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
    const options = reactive({
      businessFlowDefList: [],
    })

    getBusinessflownodelist({
      businessFlowDefId: props.businessFlowDefId,
    }).then((response) => {
      options.businessFlowDefList = response.data
    })
    const table = reactive({
      data(params) {
        resetEdit()
        return getTableData({ stageId: props.uid, ...params })
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
          label: '显示顺序',
          prop: ({ row }) => {
            return isEdit(row) ? (
              <el-input-number
                class="w140"
                min={0}
                value={row.orderSort}
                onInput={(val) => {
                  row.orderSort = val
                }}
              />
            ) : (
              row.orderSort
            )
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
        // {
        //   label: '显示文档',
        //   prop: ({ row }) => {
        //     return createEditRow(row, 'showDocumentFileName')
        //   },
        // },
        {
          label: '关联服务环节',
          prop: ({ row }) => {
            return isEdit(row) ? (
              <s-group
              multiple
                value={row.businessNodeIdsArray}
                onInput={(val) => {
                  row.businessNodeIdsArray = val
                }}
                data={options.businessFlowDefList}
                props={{
                  props: {
                    label: 'businessFlowNodeName',
                    value: 'businessFlowNodeCode',
                  },
                }}
              />
            ) : (
              row.businessNodeIdsArray
            )
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
                        row.nodeId = row.id

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
                  return deleteNode({ nodeId: row.id })
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
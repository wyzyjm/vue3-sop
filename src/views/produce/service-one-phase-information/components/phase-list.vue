<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" />
    <s-simple-table :uid="uid" :page="false" :data="table.data" :cols="table.cols"></s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import LinkList from './link-list'
import useDialog from '@/hooks/use-dialog'
import getTableData from '@/api/1458-get-service-order-cust-service-show-config-stagelist-{custshowconfigid}'
import _update from '@/api/1472-post-service-order-cust-service-show-config-stage-{stageid}'
import _delete from '@/api/1474-delete-service-order-cust-service-show-config-stage-{stageid}'
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
      required: true,
    },
    businessFlowDefId: {
      required: true,
    },
  },
  components: { LinkList },
  setup(props, { root }) {
    const dialog = useDialog({
      uid: 'add-link',
      title: '新增环节',
      width: '500px',
      component: require('../dialog/add-link'),
    })

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
        return getTableData({ custShowConfigId: props.uid, ...params })
      },
      cols: [
        {
          type: 'expand',
          prop: ({ row }) => {
            return (
              <LinkList
                uid={row.id}
                businessFlowDefId={props.businessFlowDefId}
              />
            )
          },
        },
        {
          showOverflowTooltip: true,
          label: '阶段名称',
          prop: ({ row }) => {
            return createEditRow(row, 'stageName')
          },
        },
        {
          label: '阶段编码',
          prop: 'stageCode',
        },
        {
          label: '显示顺序',
          prop: ({ row }) => {
            return isEdit(row) ? (
              <el-input-number
                class="w160"
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
          label: '未开始显示话术',
          prop: ({ row }) => {
            return createEditRow(row, 'noStartTerm')
          },
        },
        {
          label: '生产中显示话术',
          prop: ({ row }) => {
            return createEditRow(row, 'progressTerm')
          },
        },
        {
          label: '已完成显示话术',
          prop: ({ row }) => {
            return createEditRow(row, 'finishedTerm')
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
                        row.stageId = row.id
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
                  return deleteNode({ stageId: row.id })
                }}
              >
                删除
              </s-button>,
              <s-button
                type="text"
                onClick={() =>
                  dialog.open({
                    data: row,
                    businessFlowDefId: props.businessFlowDefId,
                  })
                }
              >
                新增环节
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
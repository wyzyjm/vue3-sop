<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" />
    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="服务单名称" prop="flowShowName" />
        <s-form-item label="状态" prop="status" component="s-group" :data="options" />
        <s-form-item label="流程名称" prop="businessFlowDefName" />
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div class="mb20" slot="top">
        <router-link to="./add">
          <s-button type="primary">新增</s-button>
        </router-link>
      </div>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import setStatus from '@/api/1470-get-service-order-cust-service-show-config-{id}-{status}'
import PhaseList from './components/phase-list'
import useDialog from '@/hooks/use-dialog'
import getTableData from '@/api/1440-get-service-order-cust-service-show-config'
import update from '@/api/1466-post-service-order-cust-service-show-config-{id}'
import useState from '@/hooks/use-state/disable-state'
import { Message } from 'element-ui'
import useOptions from './hooks/use-options'

import {
  isEdit,
  createEditRow,
  saveEdit,
  startEdit,
} from './hooks/use-edit-row'
export default defineComponent({
  components: { PhaseList },
  setup(props, { root }) {
    const { setState, getStateText, options } = useState(
      {
        message: '请确认是否继续停用？',
      },
      (row) => {
        row.status = 1 ^ row.status
        return setStatus(row).then(() => {
          Message({
            type: 'success',
            message: '操作成功！',
          })
          root.$store.commit('table/update')
        })
      }
    )
    const dialog = useDialog({
      uid: 'add-phase',
      title: '新增阶段',
      width: '500px',
      component: require('./dialog/add-phase'),
    })

    const table = reactive({
      data: getTableData,
      cols: [
        {
          type: 'expand',
          prop: ({ row }) => <PhaseList uid={row.id} businessFlowDefId={row.businessFlowDefId} />,
        },
        {
          showOverflowTooltip: true,
          label: '服务单呈现名称',
          prop: ({ row }) => {
            return createEditRow(row, 'flowShowName')
          },
        },
        {
          label: '名称编码',
          prop: ({ row }) => {
            return createEditRow(row, 'flowShowCode')
          },
        },
        {
          label: '状态',
          width: '80px',
          prop: ({ row }) => {
            return isEdit(row) ? (
              <s-group
                value={row.status}
                onInput={(val) => {
                  row.status = val
                }}
                data={options}
              />
            ) : (
              getStateText(row.status)
            )
          },
        },
        {
          label: '对应服务流程',
          prop: ({ row }) => {
            return isEdit(row) ? (
              <s-group
                props={{
                  props: {
                    label: 'businessFlowName',
                    value: 'id',
                  },
                }}
                value={row.businessFlowDefId}
                onInput={(val) => {
                  row.businessFlowDefId = val
                  row.businessFlowDefVersion = moreOptions.businessFlowList.find(
                    (v) => v.id === val
                  ).version
                }}
                data={moreOptions.businessFlowList}
              />
            ) : (
              row.businessFlowDefName
            )
          },
        },
        {
          label: '流程版本',
          prop: 'businessFlowDefVersion',
        },
        {
          label: '操作项',
          width:'160px',
          prop: ({ row }) => {
            return [
              <s-button type="text" onClick={() => setState(row)}>
                {getStateText(1 ^ row.status)}
              </s-button>,
              <s-button
                type="text"
                onClick={() =>
                  isEdit(row)
                    ? saveEdit(() => {
                        return update(row).then(() => {
                          root.$store.commit('table/update')
                        })
                      })
                    : startEdit(row)
                }
              >
                {isEdit(row) ? '保存' : '编辑'}
              </s-button>,
              <s-button type="text" onClick={() => dialog.open({ data: row })}>
                新增阶段
              </s-button>,
            ]
          },
        },
      ],
    })

    const moreOptions = useOptions()

    return {
      dialog,
      table,
      options,
      moreOptions,
    }
  },
})
</script>
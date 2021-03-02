<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" />
    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="角色名称" prop="roleName" />
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
import {
  isEdit,
  createEditRow,
  saveEdit,
  startEdit,
} from './hooks/use-edit-row'
export default defineComponent({
  components: { PhaseList },
  setup(props, { root }) {
    const _setStatus = (row) => {
      return setStatus(row).then(() => {
        root.$store.commit('table/update')
      })
    }

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
          prop: ({ row }) => <PhaseList uid={row.id} />,
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
          prop: ({ row }) => {
            return createEditRow(row, 'statusName')
          },
        },
        {
          label: '对应服务流程',
          prop: ({ row }) => {
            return createEditRow(row, 'businessFlowDefName')
          },
        },
        {
          label: '流程版本',
          prop: ({ row }) => {
            return createEditRow(row, 'businessFlowDefVersion')
          },
        },
        {
          label: '操作项',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() =>
                  _setStatus({
                    id: row.id,
                    status: 1 ^ row.status,
                  })
                }
              >
                {row.state ? '启用' : '停用'}
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

    return {
      dialog,
      table,
    }
  },
})
</script>
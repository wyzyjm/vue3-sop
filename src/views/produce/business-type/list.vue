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
      <div slot="top">
        <s-button type="primary" @click="dialog.open">新增</s-button>
      </div>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1408-get-business-type-search'
import setRoleState from '@/api/1386-post-role-state'
import useDialog from '@/hooks/use-dialog'

export default defineComponent({
  setup(props, { root }) {
    const setState = (row) => {
      return setRoleState(row).then(({ msg }) => {
        console.log(msg)
        root.$store.commit('table/update')
      })
    }

    const dialog = useDialog({
      dynamicTitle: (data) => (data.isEdit ? '编辑业务类型' : '新增业务类型'),
      width: '500px',
      uid: 'add-business-type',
      component:require('./dialog/add-business-type')
    })

    const table = reactive({
      data: getTableData,
      cols: [
        {
          showOverflowTooltip: true,
          label: '业务名称',
          prop: 'roleName',
        },
        {
          label: '业务code',
          prop: 'roleGroupName',
        },
        {
          label: '状态',
          prop: 'stateLable',
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
                {row.state ? '启用' : '停用'}
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
    }
  },
})
</script>
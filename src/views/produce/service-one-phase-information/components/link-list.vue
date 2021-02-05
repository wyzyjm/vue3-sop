<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" :component="require('../dialog/add-business-type')" />
    <s-simple-table  :page="false" :data="table.data" :cols="table.cols"></s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1348-get-role-list'
import setRoleState from '@/api/1386-post-role-state'

export default defineComponent({
  setup(props, { root }) {
    const setState = (row) => {
      return setRoleState(row).then(({ msg }) => {
        console.log(msg)
        root.$store.commit('table/update')
      })
    }

    const dialog = reactive({
      title: '新增业务类型',
      width: '500px',
      openAdd() {
        root.$store.commit('dialog/open')
      },
      openEdit(data) {
        root.$store.commit('dialog/open', {
          isEdit: true,
          data,
        })
      },
      close() {
        root.$store.commit('dialog/close')
      },
    })

    const table = reactive({
      data: getTableData,
      cols: [
        {
          showOverflowTooltip: true,
          label: '环节名称',
          prop: 'roleName',
        },
        {
          label: '展示顺序',
          prop: 'roleGroupName',
        },
        {
          label: '进行中显示状态',
          prop: 'stateLable',
        },
        {
          label: '进行中显示话述',
          prop: 'isSpVisibleLable',
        },
        {
          label: '显示编辑内容',
          prop: 'createBy',
        },
        {
          label: '显示文档',
          prop: 'createTime',
        },
        {
          label: '显示文档',
          prop: 'createTime',
        },
        {
          label: '操作项',
          prop: ({ row }) => {
            return [
              <s-button type="text" onClick={() => setState(row)}>
                {row.state ? '启用' : '停用'}
              </s-button>,
              <s-button type="text" onClick={() => dialog.openEdit(row)}>
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
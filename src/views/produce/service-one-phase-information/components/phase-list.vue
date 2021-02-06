<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" />

    <s-simple-table :page="false" :data="table.data" :cols="table.cols"></s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1348-get-role-list'
import setRoleState from '@/api/1386-post-role-state'
import LinkList from './link-list'
import useDialog from '@/hooks/use-dialog'

export default defineComponent({
  props: {
    uid: {
      required: true,
    },
  },
  components: { LinkList },
  setup(props, { root }) {
    const setState = (row) => {
      return setRoleState(row).then(({ msg }) => {
        console.log(msg)
        root.$store.commit('table/update')
      })
    }

    const dialog = useDialog({
      title: '新增环节',
      width: '500px',
      component: require('../dialog/add-link'),
    })

    const table = reactive({
      data: getTableData,
      cols: [
        {
          type: 'expand',
          prop: ({ row }) => {
            return <LinkList uid={row.id} />
          },
        },
        {
          showOverflowTooltip: true,
          label: '阶段名称',
          prop: 'roleName',
        },
        {
          label: '阶段编码',
          prop: 'roleGroupName',
        },
        {
          label: '显示顺序',
          prop: 'stateLable',
        },
        {
          label: '未开始显示话术',
          prop: 'isSpVisibleLable',
        },
        {
          label: '生产中显示话术',
          prop: 'createBy',
        },
        {
          label: '已完成显示话术',
          prop: 'createTime',
        },
        {
          label: '操作项',
          prop: ({ row }) => {
            return [
              <s-button type="text" onClick={() => setState(row)}>
                {row.state ? '启用' : '停用'}
              </s-button>,
              // <s-button type="text" onClick={() => dialog.openEdit(row)}>
              //   编辑
              // </s-button>,
              <s-button type="text" onClick={() => dialog.open({data:row})}>
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
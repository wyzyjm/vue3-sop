<template>
  <div>
    <s-simple-table :page="false" :data="table.data" :cols="table.cols"></s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import getTableData from '@/api/1348-get-role-list'
import setRoleState from '@/api/1386-post-role-state'
import LinkList from './link-list'
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

    const linkListRef = ref(null)

    const addNewLink = () => {
      console.log(3, linkListRef)
    }

    const table = reactive({
      data: getTableData,
      cols: [
        {
          type: 'expand',
          prop: ({ row }) => {
            return <LinkList ref={linkListRef} uid={row.id} />
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
              <s-button type="text" onClick={() => addNewLink(row)}>
                新增环节
              </s-button>,
            ]
          },
        },
      ],
    })

    return {
      table,
    }
  },
})
</script>
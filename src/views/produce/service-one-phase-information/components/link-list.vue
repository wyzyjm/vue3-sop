<template>
  <div>
    <s-simple-table :page="false" :data="table.data" :cols="table.cols"></s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import setRoleState from '@/api/1386-post-role-state'

export default defineComponent({
  setup(props, { root }) {
    const setState = (row) => {
      return setRoleState(row).then(({ msg }) => {
        console.log(msg)
        root.$store.commit('table/update')
      })
    }

    const edit = (row) => {
      row.isEdit = true
    }

    const table = reactive({
      data: [],
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
              <s-button type="text" onClick={() => edit(row)}>
                编辑
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
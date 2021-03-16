<template>
  <div>
    <s-simple-table :page="false" row-key="id" :data="table.data" :cols="table.cols">
      <div slot="top" class="mb20">
        <el-button type="primary" @click="dialog.open">新增</el-button>
      </div>
    </s-simple-table>
    <s-dialog v-bind="dialog" @close="dialog.close" />

  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1392-get-common-service-resource-list-tree'
import useDialog from '@/hooks/use-dialog'

// import useState from '@/hooks/use-state/disable-state'
// import _setState from '@/api/1402-post-common-service-resource-state'
// import { Message } from 'element-ui'
export default defineComponent({
  setup() {
    // const { setState, getStateText } = useState(
    //   {
    //     message: '请确认是否停用该售卖渠道？',
    //   },
    //   (row) => {
    //     return _setState({ id: row.id, state: 1 ^ row.state }).then(() => {
    //       Message({
    //         type: 'success',
    //         message: '操作成功！',
    //       })
    //       root.$store.commit('table/update')
    //     })
    //   }
    // )

    const dialog = useDialog({
      uid: 'add',
      title: '新增',
      width: '500px',
      component: require('./dialog/add'),
    })

    const table = reactive({
      data: getTableData,
      cols: [
        {
          showOverflowTooltip: true,
          label: '名称',
          prop: 'resourceName',
        },
        {
          label: '编码',
          showOverflowTooltip: true,
          prop: 'resourceCode',
        },
        {
          label: 'URL',
          showOverflowTooltip: true,
          prop: 'resourceUrl',
        },
        {
          label: '图标',
          width: '100px',
          showOverflowTooltip: true,
          prop: 'resourceIcon',
        },
        {
          label: '排序',
          width: '80px',
          showOverflowTooltip: true,
          prop: 'resourceSort',
        },
        {
          label: '类型',
          width: '120px',
          showOverflowTooltip: true,
          prop: 'resourceType',
        },
        {
          label: '描述',
          showOverflowTooltip: true,
          prop: 'resourceDesc',
        },
        // {
        //   label: '状态',
        //   width: '80px',
        //   prop: ({ row }) => {
        //     return getStateText(row.state)
        //   },
        // },
        {
          label: '操作',
          width: '180px',
          prop: ({ row }) => {
            return [
              //   <s-button type="text" onClick={() => setState(row)}>
              //     {getStateText(1 ^ row.status)}
              //   </s-button>,
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
      table,
      dialog,
    }
  },
})
</script>
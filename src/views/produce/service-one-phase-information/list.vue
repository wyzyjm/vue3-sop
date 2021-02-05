<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" :component="require('./dialog/add-business-type')" />

    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="角色名称" prop="roleName" />
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div slot="top">
        <s-button type="primary" @click="dialog.openAdd">新增</s-button>
      </div>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1348-get-role-list'
import setRoleState from '@/api/1386-post-role-state'
import PhaseList from './components/phase-list'

export default defineComponent({
  components: { PhaseList },
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
          type: 'expand',
          prop: () => <PhaseList />,
        },
        {
          showOverflowTooltip: true,
          label: '服务单呈现名称',
          prop: 'roleName',
        },
        {
          label: '名称编码',
          prop: 'roleGroupName',
        },
        {
          label: '版本',
          prop: 'stateLable',
        },
        {
          label: '状态',
          prop: 'isSpVisibleLable',
        },
        {
          label: '对应服务流程',
          prop: 'createBy',
        },
        {
          label: '流程版本',
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
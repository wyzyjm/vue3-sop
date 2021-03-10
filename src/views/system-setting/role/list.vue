<template>
  <div>

    <s-dialog v-bind="roleDialog" @close="roleDialog.close" />
    <s-dialog v-bind="roleGroupDialog" @close="roleGroupDialog.close" />
    <s-dialog v-bind="functionAuthorizationDialog" @close="functionAuthorizationDialog.close" />
    <s-dialog v-bind="productionOrganizationAuthorizationDialog" @close="productionOrganizationAuthorizationDialog.close" />
    <s-dialog v-bind="salesChannelsAuthorizationDialog" @close="salesChannelsAuthorizationDialog.close" />

    <s-simple-table v-model="table.checked" :data="table.data" :cols="table.cols">
      <div slot="top" class="mb20">
        <s-button type="primary" @click="roleGroupDialog.open">新增角色组</s-button>
        <s-button type="primary" @click="roleDialog.open">新增角色</s-button>
        <s-button type="primary" @click="functionAuthorizationDialog.open" :disabled="table.checked.length===0">功能授权</s-button>
        <s-button type="primary" @click="productionOrganizationAuthorizationDialog.open({data:table.checked})" :disabled="table.checked.length===0">生产组织授权</s-button>
        <s-button type="primary" @click="salesChannelsAuthorizationDialog.open" :disabled="table.checked.length===0">售卖渠道授权</s-button>
      </div>
      <s-form slot="form" inline>
        <s-form-item label="角色名称" prop="roleName" />
        <s-form-item label="状态" :data="options" prop="state" component="s-group" />
        <s-form-item label="角色组" :data="moreOptions.roleGroup" prop="roleGroupId" component="s-group" />
        <s-form-item label="服务商可见" :data="moreOptions.isSpVisible" prop="isSpVisible" component="s-group" />
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1348-get-common-service-role-list'
import setRoleState from '@/api/1386-post-common-service-role-state'
import useOptions from './hooks/use-options'
import useDialog from '@/hooks/use-dialog'
import useState from '@/hooks/use-state/disable-state'
import { Message } from 'element-ui'

export default defineComponent({
  setup(props, { root }) {
    const roleDialog = useDialog({
      dynamicTitle: (data) => (data.isEdit ? '编辑角色' : '新增角色'),
      uid: 'role-dialog',
      component: require('./dialog/role'),
    })

    const roleGroupDialog = useDialog({
      uid: 'role-group-dialog',
      dynamicTitle: (data) => (data.isEdit ? '编辑角色组' : '新增角色组'),
      component: require('./dialog/role-group'),
    })

    const functionAuthorizationDialog = useDialog({
      uid: 'function-authorization',
      title: '功能授权',
      component: require('./dialog/function-authorization'),
    })

    const productionOrganizationAuthorizationDialog = useDialog({
      uid: 'production-organization-authorization',
      title: '生产组织授权',
      component: require('./dialog/production-organization-authorization'),
    })

    const salesChannelsAuthorizationDialog = useDialog({
      uid: 'sales-channels-authorization',
      title: '售卖渠道授权',
      component: require('./dialog/sales-channels-authorization'),
    })

    const { setState, getStateText, options } = useState(
      {
        message: '请确认是否继续停用？',
      },
      (row) => {
        return setRoleState({
          id: row.id,
          state: 1 ^ row.state,
        }).then(() => {
          Message({
            type: 'success',
            message: '操作成功！',
          })
          root.$store.commit('table/update')
        })
      }
    )

    const table = reactive({
      checked: [],
      data: getTableData,
      cols: [
        {
          type: 'checkbox',
          width: '44px',
        },
        {
          showOverflowTooltip: true,
          label: '角色名称',
          prop: 'roleName',
        },
        {
          label: '角色组',
          prop: 'roleGroupName',
        },
        {
          label: '状态',
          prop: 'stateLable',
        },
        {
          label: '服务商可见',
          prop: 'isSpVisibleLable',
        },
        {
          label: '创建人',
          prop: 'createBy',
        },
        {
          label: '创建时间',
          prop: 'createTime',
        },
        {
          label: '操作项',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() => roleDialog.open({ data: row, isEdit: true })}
              >
                编辑
              </s-button>,
              <s-button type="text" onClick={() => setState(row)}>
                {getStateText(1 ^ row.state)}
              </s-button>,
            ]
          },
        },
      ],
    })

    const moreOptions = useOptions()

    return {
      functionAuthorizationDialog,
      roleGroupDialog,
      roleDialog,
      table,
      options,
      moreOptions,
      productionOrganizationAuthorizationDialog,
      salesChannelsAuthorizationDialog,
    }
  },
})
</script>
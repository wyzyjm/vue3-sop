<template>
  <div>

    <s-dialog v-bind="roleDialog" @close="roleDialog.close" :component="require('./dialog/role')" />
    <s-dialog v-bind="roleGroupDialog" @close="roleGroupDialog.close" :component="require('./dialog/role-group')" />
    <s-dialog v-bind="functionAuthorizationDialog" @close="functionAuthorizationDialog.close" :component="require('./dialog/function-authorization')" />
    <s-dialog v-bind="productionOrganizationAuthorizationDialog" @close="productionOrganizationAuthorizationDialog.close" :component="require('./dialog/production-organization-authorization')" />
    <s-dialog v-bind="salesChannelsAuthorizationDialog" @close="salesChannelsAuthorizationDialog.close" :component="require('./dialog/sales-channels-authorization')" />

    <s-simple-table :data="table.data" :cols="table.cols">
      <div slot="top" class="mb20">
        <s-button type="primary" @click="roleGroupDialog.openAdd">新增角色组</s-button>
        <s-button type="primary" @click="roleDialog.openAdd">新增角色</s-button>
        <s-button type="primary" @click="functionAuthorizationDialog.open">功能授权</s-button>
        <s-button type="primary" @click="productionOrganizationAuthorizationDialog.open">生产组织授权</s-button>
        <s-button type="primary" @click="salesChannelsAuthorizationDialog.open">售卖渠道授权</s-button>
      </div>
      <s-form slot="form" inline>
        <s-form-item label="角色名称" prop="roleName" />
        <s-form-item label="状态" :props="{label:'key'}" :data="options.state" prop="state" component="s-group" tag="el-radio-group" />
        <s-form-item label="角色组" :data="options.roleGroup" prop="roleGroupId" component="s-group" />
        <s-form-item label="服务商可见" :data="options.isSpVisible" prop="isSpVisible" component="s-group" tag="el-radio-group" />
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
import getTableData from '@/api/1348-get-role-list'
import setRoleState from '@/api/1386-post-role-state'
import useOptions from './hooks/use-options'
export default defineComponent({
  setup(props, { root }) {
    const roleDialog = reactive({
      uid: 'role-dialog',
      title: '新增角色',
      width: '500px',
      openAdd() {
        roleDialog.title = '新增角色'
        root.$store.commit('dialog/open', { _uid: roleDialog.uid })
      },
      openEdit(row) {
        roleDialog.title = '编辑角色'
        root.$store.commit('dialog/open', {
          _uid: roleDialog.uid,
          isEdit: true,
          data: row,
        })
      },
      close() {
        root.$store.commit('dialog/close', {
          _uid: roleDialog.uid,
        })
      },
    })

    const roleGroupDialog = reactive({
      uid: 'role-group-dialog',
      title: '新增角色组',
      width: '500px',
      openAdd() {
        roleGroupDialog.title = '新增角色组'
        root.$store.commit('dialog/open', { _uid: roleGroupDialog.uid })
      },
      openEdit(row) {
        roleGroupDialog.title = '编辑角色组'
        root.$store.commit('dialog/open', {
          _uid: roleGroupDialog.uid,
          isEdit: true,
          data: row,
        })
      },
      close() {
        root.$store.commit('dialog/close', {
          _uid: roleGroupDialog.uid,
        })
      },
    })

    const functionAuthorizationDialog = reactive({
      uid: 'function-authorization',
      title: '功能授权',
      width: '500px',
      open() {
        root.$store.commit('dialog/open', {
          _uid: functionAuthorizationDialog.uid,
        })
      },
      close() {
        root.$store.commit('dialog/close', {
          _uid: functionAuthorizationDialog.uid,
        })
      },
    })

    const productionOrganizationAuthorizationDialog = reactive({
      uid: 'production-organization-authorization',
      title: '生产组织授权',
      width: '500px',
      open() {
        root.$store.commit('dialog/open', {
          _uid: productionOrganizationAuthorizationDialog.uid,
        })
      },
      close() {
        root.$store.commit('dialog/close', {
          _uid: productionOrganizationAuthorizationDialog.uid,
        })
      },
    })

    const salesChannelsAuthorizationDialog = reactive({
      uid: 'production-organization-authorization',
      title: '生产组织授权',
      width: '500px',
      open() {
        root.$store.commit('dialog/open', {
          _uid: salesChannelsAuthorizationDialog.uid,
        })
      },
      close() {
        root.$store.commit('dialog/close', {
          _uid: salesChannelsAuthorizationDialog.uid,
        })
      },
    })

    const setState = (row) => {
      return setRoleState(row).then(({ msg }) => {
        console.log(msg)
        root.$store.commit('table/update')
      })
    }

    const table = reactive({
      data: getTableData,
      cols: [
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
              <s-button type="text" onClick={() => roleDialog.openEdit(row)}>
                编辑
              </s-button>,
              <s-button type="text" onClick={() => setState(row)}>
                {row.state ? '启用' : '停用'}
              </s-button>,
            ]
          },
        },
      ],
    })

    const options = useOptions()

    return {
      functionAuthorizationDialog,
      roleGroupDialog,
      roleDialog,
      table,
      options,
      productionOrganizationAuthorizationDialog,
      salesChannelsAuthorizationDialog,
    }
  },
})
</script>
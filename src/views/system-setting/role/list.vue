<template>
  <div>

    <role-dialog />
    <role-group-dialog />

    <s-simple-table :data="table.data" :cols="table.cols">
      <div slot="top" class="mb20">
        <s-button type="primary" @click="roleGroupDialog.openAdd">新增角色组</s-button>
        <s-button type="primary" @click="roleDialog.openAdd">新增角色</s-button>
        <s-button type="primary" @click="functionAuthorization">功能授权</s-button>
        <s-button type="primary" @click="productionOrganizationAuthorization">生产组织授权</s-button>
        <s-button type="primary" @click="salesChannelsAuthorization">售卖渠道授权</s-button>
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
import RoleDialog, { dialog as roleDialog } from './dialog/role'
import RoleGroupDialog, { dialog as roleGroupDialog } from './dialog/role'
export default defineComponent({
  components: { RoleDialog, RoleGroupDialog },
  setup(props, { root }) {
    const functionAuthorization = () => {}
    const productionOrganizationAuthorization = () => {}
    const salesChannelsAuthorization = () => {}

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
      roleGroupDialog,
      roleDialog,
      table,
      options,
      functionAuthorization,
      productionOrganizationAuthorization,
      salesChannelsAuthorization,
    }
  },
})
</script>
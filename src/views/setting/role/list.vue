<template>
  <div>
    <s-dialog width="500px" title="新增角色组" @close="$store.commit('dialog/close',{_uid:'add-role-group'})" :component="require('./dialog/add-role-group')" uid="add-role-group" />
    <s-dialog width="500px" title="新增角色" @close="$store.commit('dialog/close',{_uid:'add-role'})" :component="require('./dialog/add-role')" uid="add-role" />
    <s-simple-table :data="table.data" :cols="table.cols">
      <div slot="top" class="mb20">
        <s-button type="primary" @click="$store.commit('dialog/open',{_uid:'add-role-group'})">新增角色组</s-button>
        <s-button type="primary" @click="$store.commit('dialog/open',{_uid:'add-role'})">新增角色</s-button>
        <s-button type="primary" @click="functionAuthorization">功能授权</s-button>
        <s-button type="primary" @click="productionOrganizationAuthorization">生产组织授权</s-button>
        <s-button type="primary" @click="salesChannelsAuthorization">售卖渠道授权</s-button>
      </div>
      <s-form slot="form" :model="form" inline>
        <s-form-item label="生产单ID" prop="orderCode">
          <s-input v-model="form.orderCode"></s-input>
        </s-form-item>
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

export default defineComponent({
  setup(props, { root }) {
    const edit = () => {}
    const disable = () => {
      console.log(1)
    }
    const addRoleGroup = () => {
      root.$store.commit('dialog/open', {
        _uid: 'add-role-group',
      })
    }
    const addRole = () => {
      console.log(2)
    }
    const functionAuthorization = () => {}
    const productionOrganizationAuthorization = () => {}
    const salesChannelsAuthorization = () => {}

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
              <s-button type="text" click={edit.bind(row)}>
                编辑
              </s-button>,
              <s-button type="text" click={disable.bind(row)}>
                停用
              </s-button>,
            ]
          },
        },
      ],
    })

    const form = reactive({
      orderCode: '',
    })
    return {
      table,
      form,
      addRoleGroup,
      addRole,
      functionAuthorization,
      productionOrganizationAuthorization,
      salesChannelsAuthorization,
    }
  },
})
</script>
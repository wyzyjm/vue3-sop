<template>
  <div class="clear-number cb-table-style">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="buttonName"
        label="按钮名称"
        width="150">
        <template slot-scope="{row}">
          <template v-if="row.isEdit">
            <s-input v-model="row.buttonName"></s-input>
          </template>
          <template v-else>{{row.buttonName}}</template>
        </template>
      </el-table-column>
      <el-table-column
        prop="useScence"
        label="仅对外展示">
        <template slot-scope="{row}">
          <template v-if="row.isEdit">
            <el-switch v-model="row.useScence">
          </el-switch>
          </template>
          <template v-else>{{row.useScence?'是':'否'}}</template>
        </template>
      </el-table-column>
      <el-table-column
        prop="buttonAuthority"
        label="仅当前操作人可见">
        <template slot-scope="{row}">
          <template v-if="row.isEdit">
            <el-switch v-model="row.buttonAuthority">
          </el-switch>
          </template>
          <template v-else>{{row.buttonAuthority?'是':'否'}}</template>
        </template>
      </el-table-column>
      <el-table-column
        prop="orderNum"
        label="顺序">
        <template slot-scope="{row}">
          <template v-if="row.isEdit">
            <s-input v-model="row.orderNum" type="number" min="0"></s-input>
          </template>
          <template v-else>{{row.orderNum}}</template>
        </template>
      </el-table-column>
      <el-table-column
        prop="bindForms"
        label="表单">
        <template slot-scope="{row}">
          <template v-if="row.isEdit">
            <s-input v-model="row.bindForms"></s-input>
          </template>
          <template v-else>{{row.bindForms}}</template>
        </template>
      </el-table-column>
      <el-table-column
        prop="eventAction"
        label="动作事件">
        <template slot-scope="{row}">
          <template v-if="row.isEdit">
            <s-input v-model="row.eventAction"></s-input>
          </template>
          <template v-else>{{row.eventAction}}</template>
        </template>
      </el-table-column>
      <el-table-column
        prop="actionResult"
        label="动作结果">
        <template slot-scope="{row}">
          <template v-if="row.isEdit">
            <s-input v-model="row.actionResult"></s-input>
          </template>
          <template v-else>{{row.actionResult}}</template>
        </template>
      </el-table-column>
      <el-table-column
        prop="executor"
        label="执行人">
        <template slot-scope="{row}">
          <template v-if="row.isEdit">
            <s-input v-model="row.executor"></s-input>
          </template>
          <template v-else>{{row.executor}}</template>
        </template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="添加时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="100">
        <template slot-scope="{row}">
          <template v-if="row.isEdit">
            <el-button type="text" size="small" @click="btnUpdate(row)">保存</el-button>
            <el-button type="text" size="small" @click="btnIsEdit(row, false)">取消</el-button>
          </template>
          <template v-else>
            <el-button @click="btnIsEdit(row, true)" type="text" size="small">编辑</el-button>
            <el-button @click="btnDelete(row)" type="text" size="small">删除</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, set } from '@vue/composition-api'
import { Message } from 'element-ui'
import buttonList from '@/api/1599-get-service-order-sevice-business-flow-node-{nodeid}-{serviceorderstatus}-buttonlist'
import buttonDelete from '@/api/1601-delete-service-order-sevice-business-flow-node-button-{buttonid}'
import buttonUpdate from '@/api/1605-post-service-order-sevice-business-flow-node-button-{buttonid}-update'

export default defineComponent({
  props: {
    nodeId: {
      type: Number
    },
    data: {
      type: Object,
    }
  },
  setup({ nodeId, data }) {
    let btnData = reactive({
      tableData: []
    })

    const form = reactive({})

    function getList() {
      buttonList({nodeId, serviceOrderStatus: data.serviceOrderStatus })
      .then(({data}) => {
        console.log("data", data)
        btnData.tableData = data || [];
      })
    }

    function btnIsEdit(row, is=fasle) {
      set(row, 'isEdit', is);
    }

    function btnDelete(row) {
      buttonDelete({buttonId: row.id}).then(() => {
        getList();
        Message({
          type: 'success',
          message: '删除成功！',
        })
      })
    }

    function btnUpdate(row) {
      buttonUpdate({buttonId: row.id, ...row})
      .then(() => {
        btnIsEdit(row, false);
        Message({
          type: 'success',
          message: '保存成功！',
        })
      })
    }

    getList();

    const save = (form) => {
      
    }

    return {
      ...toRefs(btnData),
      save,
      form,
      btnDelete,
      btnIsEdit,
      btnUpdate
    }
  },
})
</script>
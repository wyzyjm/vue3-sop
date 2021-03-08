<template>
  <div>
    <s-form :model="form" label-width="140px" @submit="save">
      <el-row>
        <el-col :span="18">
          <s-form-item label="按钮名称" :rules="['required']" prop="buttonName" />
        </el-col>
        <el-col :span="4" style="padding-left:10px">
          <el-checkbox v-model="form.useScence">仅对外展示</el-checkbox>
          <el-checkbox v-model="form.buttonAuthority">仅当前操作人可见</el-checkbox>
        </el-col>
        <el-col :span="18">
          <s-form-item label="按钮code" :rules="['required']" prop="buttonCode" />
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="18">
          <s-form-item label="顺序" prop="orderNum" type="number" min="0" :rules="['required']" />
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="18">
          <s-form-item label="绑定表单" prop="bindForms" :rules="['required']" />
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="18">
          <s-form-item label="动作事件" prop="eventAction" :rules="['required']" />
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="18">
          <s-form-item label="动作结果" prop="actionResult" :rules="['required']" />
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="4"></el-col>
        <el-col :span="18">
          <s-form-item label="关联业务状态" prop="businessNodeStatusArray" :rules="['required:array']">
            <el-select v-model="form.businessNodeStatusArray" multiple placeholder="请选择关联业务状态" style="width:100%">
              <el-option
                v-for="item in relevanceData"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </s-form-item>
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="18">
          <s-form-item label="执行人类型" prop="executorType" :rules="['required:number']">
            <el-select v-model="form.executorType" placeholder="请选择执行人类型" style="width:100%">
              <el-option
                v-for="item in exeType"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </s-form-item>
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="18">
          <s-form-item label="执行人" prop="executor" :rules="['required']" />
        </el-col>
      </el-row>
      
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Message } from 'element-ui'
import addbutton from '@/api/1597-post-service-order-sevice-business-flow-node-{nodeid}-addbutton'

export default defineComponent({
  props: {
    nodeId: {
      type: Number
    },
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ nodeId, data }, {root, emit}) {
    const flowData = reactive({
      relevanceData: [
        { id: 0, name: '未开始'},
        { id: 1, name: '进行中'},
        { id: 2, name: '异步等待'},
        { id: 4, name: '执行失败'},
        { id: 8, name: '执行成功'}
      ],
      exeType: [
        { id: 1, name: '账号'},
        { id: 2, name: '角色'}
      ]
    })

    let form = reactive({
      serviceStatusRelationId: data.id,
      serviceOrderStatus: data.serviceOrderStatus,
      useScence: false,
      buttonAuthority: false,
      executorType: 1,
      status: 1,
      businessNodeStatusArray: []
    })

    const save = (form) => {
      addbutton({nodeId, ...form}).then((res) => {
        emit('close')
        root.$store.commit('table/update')
        Message({
          type: 'success',
          message: '按钮添加成功！',
        })
      })
    }

    return {
      ...toRefs(flowData),
      save,
      form
    }
  },
})
</script>
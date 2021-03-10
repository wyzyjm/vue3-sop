<template>
  <div>
    <s-form :model="form" label-width="140px" @submit="save" class="flow-form">
      <s-form-item label="状态名称" prop="serviceOrderStatus" :rules="['required:number']">
        <el-select v-model="form.serviceOrderStatus" placeholder="请选择状态" class="flow-select">
          <el-option
            v-for="item in serviceState"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </s-form-item>
      <s-form-item label="状态code" component="s-text" :content="form.serviceOrderStatus" prop="serviceOrderStatus" />
      <s-form-item label="顺序" prop="sortOrder" :rules="['required']" />
      <s-form-item label="关联业务状态" prop="businessNodeStatusArray" :rules="['required:array']">
        <el-select v-model="form.businessNodeStatusArray" multiple placeholder="请选择关联业务状态" class="flow-select">
          <el-option
            v-for="item in relevanceData"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </s-form-item>
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
import statusList from '@/api/1685-get-production-config-service-order-status-list'
import addStatus from '@/api/1572-post-service-order-sevice-business-flow-node-{nodeid}-addstatus'
import updaetStatus from '@/api/1592-post-service-order-sevice-business-flow-node-{nodeid}-{statusrelationid}-addstatus'
import getStatus from '@/api/1587-get-service-order-sevice-business-flow-node-{nodeid}-{statusrelationid}-statusrelation'

export default defineComponent({
  props: {
    nodeId: {
      type: Number
    },
    isEdit: {
      default: false,
    },
    data: {
      type: Object
    }
  },
  setup({ nodeId, data, isEdit }, {root, emit}) {
      console.log(root)
    const flowData = reactive({
      serviceState: [],
      relevanceData: [
        { id: 0, name: '未开始'},
        { id: 1, name: '进行中'},
        { id: 2, name: '异步等待'},
        { id: 4, name: '执行失败'},
        { id: 8, name: '执行成功'}
      ]
    })

    let form = reactive({
      sortOrder: '',
      serviceOrderStatus: '',
      businessNodeStatusArray: '',
    })

    if (isEdit) {
      getStatus({ nodeId, statusRelationId: data.id })
      .then(({data}) => {
        form.sortOrder = data.sortOrder+'';
        form.serviceOrderStatus = data.serviceOrderStatus;
        form.businessNodeStatusArray = data.businessNodeStatusArray;
        // console.log("form-2", form, data)
      })
    }

    const save = () => {
      return (isEdit ? updaetStatus({ nodeId, statusRelationId: data.id, ...form}) : addStatus({ nodeId, ...form }))
      .then(({ msg }) => {
        emit('close')
        emit('update')
        Message({
          type: 'success',
          message: msg,
        })
      })
    }

    statusList().then(({data}) => { flowData.serviceState = data||[] })

    return {
      ...toRefs(flowData),
      save,
      form
    }
  },
})
</script>
<style lang="scss" scoped>
 .flow-form {
      display: flex;
      flex-direction: column;
  }
</style>
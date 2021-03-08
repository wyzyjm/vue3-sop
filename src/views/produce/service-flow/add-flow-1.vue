<template>
  <div>
    <div class="ce-flow mb20 flow-k">
      <s-form :model="form" label-width="130px" @submit="save" class="flow-form">
        <s-form-item label="服务流程名称" prop="businessFlowName" :rules="['required']" />
        <s-form-item label="服务产品编号" prop="businessFlowCode" :rules="['required']" />
        <!-- <s-form-item label="版本" prop="version" :rules="['required']" /> -->
        <s-form-item label="关联工作流" prop="flowWorkDefId" :rules="['required']">
          <el-select v-model="form.flowWorkDefId" placeholder="请选择关联工作流" class="flow-select">
            <el-option
              v-for="item in flowList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </s-form-item>
        <s-form-item label="描述" prop="describeInfo" type="textarea" />

        <s-form-item>
          <s-button @click="$router.push('/produce/service-flow')">取消</s-button>
          <s-button type="primary" run="form.submit">确定</s-button>
        </s-form-item>
      </s-form>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import getworkflowlist from '@/api/1518-get-service-order-sevice-business-flow-getworkflowlist'
import addBusinessFlow from '@/api/1506-post-service-order-sevice-business-flow-add'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ isEdit, data }, { root }) {

    const flowData = reactive({      
      flowList: []
    });

    getworkflowlist().then((res) => {
      flowData.flowList = res.data || [];
    })

    let form = reactive({
      businessFlowName: '', // 业务流程名称	
      businessFlowCode: '', // 	业务流程code	
      flowWorkDefId: '', // 	工作流程定义id	
      describeInfo: '', // 	描述
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const save = (form) => {
      addBusinessFlow(form).then((res) => {
        let currF = res.data || {};
        addFlowPath(currF.id, currF.flowWorkDefId)
      })
    }

    function addFlowPath(id, workId) {
      root.$router.push({
        path: "/produce/add-service-flow",
        query: { id, workId }
      });
    }

    return {
      ...toRefs(flowData),
      form,
      save
    }
  },
})
</script>
<style lang="scss" scoped>
  .flow-k {
    background: $sop-color-white;
    border-radius: 6px;
    border: 1px solid #EBEBEB;
  }
  .ce-flow {
    text-align: center;
    padding: 40px 20px;
    .flow-select {
      width: 100%;
    }
    .flow-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-form-item {
        width: 600px;
      }
    }
  }
</style>
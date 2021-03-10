<template>
  <div>
    <s-form :model="form" label-width="140px" @submit="save">
      <template v-if="isEdit">
        <s-form-item label="业务流程名称" :rules="['required']" prop="businessFlowName" />
        <s-form-item label="业务流程code" :disabled="true" prop="businessFlowCode" />
        <s-form-item label="版本" :disabled="true" :rules="['required']" prop="version" />
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
        <s-form-item label="描述" prop="describeInfo" type="textarea"/>
        <s-form-item>
          <s-button @click="$emit('close')">取消</s-button>
          <s-button type="primary" run="form.submit">确定</s-button>
          <s-button type="primary" @click="flowNext">下一步</s-button>
        </s-form-item>
      </template>
      <template v-else>
        <s-form-item label="业务流程名称" component="s-text" :content="form.businessFlowName" prop="businessFlowName" />
        <s-form-item label="业务流程code" component="s-text" :content="form.businessFlowCode" prop="businessFlowCode" />
        <s-form-item label="版本" component="s-text" :content="form.version" prop="version" />
        <s-form-item label="工作流程定义名称" component="s-text" :content="form.flowWorkDefName" prop="flowWorkDefName" />
        <s-form-item label="状态" component="s-text" :content="form.statusName" prop="statusName" />
        <s-form-item label="创建人" component="s-text" :content="form.creater" prop="creater" />
        <s-form-item label="描述" component="s-text" :content="form.describeInfo" prop="describeInfo" />
        <s-form-item label="创建时间" component="s-text" :content="form.creatreTime" prop="creatreTime" />
        <s-form-item label="更新时间" component="s-text" :content="form.updateTime" prop="updateTime" />
      </template>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import updateBusinessFlow from '@/api/1547-post-service-order-sevice-business-flow-{id}'
import getworkflowlist from '@/api/1518-get-service-order-sevice-business-flow-getworkflowlist'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ data }, { emit, root }) {
    const flowData = reactive({      
      flowList: []
    });
    
    let form = reactive({})
    form = { ...form, ...data }

    getworkflowlist().then((res) => {
      flowData.flowList = res.data || [];
    })
    
    const flowNext = () => {
      root.$router.push({
        path: "/produce/add-service-flow",
        query: { id: form.id, workId: form.flowWorkDefId }
      });
    }

    const save = () => {
      return updateBusinessFlow(form).then(
        (res) => {
          if (res.data) {
            emit('close')
            root.$store.commit('table/update')
          }
        }
      )
    }

    return {
      save,
      form,
      flowNext,
      ...toRefs(flowData)
    }
  },
})
</script>
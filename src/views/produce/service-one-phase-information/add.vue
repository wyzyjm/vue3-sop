<template>
  <div>
    <s-form :model="form" label-width="150px" @submit="save">
      <h2>服务单信息</h2>

      <s-form-item label="服务单呈现名称" :rules="['required']" prop="flowShowName" />
      <s-form-item label="服务单名称编码" :rules="['required']" prop="flowShowCode" />
      <s-form-item label="版本" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="流程名称" :rules="['required']" prop="businessFlowDefId" />
      <s-form-item label="流程版本" :rules="['required']" prop="roleGroupName" />
      <h2>阶段信息</h2>
      <div v-for="(item,i) in form.stageGroupDTOList" :key="i">
        <div>
          <s-button type="primary" @click="add(i)">添加</s-button>
          <s-button type="primary" @click="del(i)">删除</s-button>
        </div>
        <s-form-item label="阶段名称" :rules="['required']" prop="stageName" />
        <s-form-item label="阶段编码" :rules="['required']" prop="stageCode" />
        <s-form-item label="展示顺序" :rules="['required']" prop="orderSort" />
        <s-form-item label="未开始术语" :rules="['required']" prop="noStartTerm" />
        <s-form-item label="进行中术语" :rules="['required']" prop="progressTerm" />
        <s-form-item label="已完成术语" :rules="['required']" prop="finishedTerm" />
      </div>

      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import saveConfig from '@/api/1444-post-cust-service-show-config-addconfig'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ isEdit, data }) {
    const stageGroupDTOItem = reactive({
      stageName: '',
      stageCode: '',
      orderSort: '',
      noStartTerm: '',
      progressTerm: '',
      finishedTerm: '',
    })

    let form = reactive({
      flowShowName: '',
      flowShowCode: '',
      businessFlowDefId: '',
      stageGroupDTOList: [{ ...stageGroupDTOItem }],
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const add = (i) => {
      form.stageGroupDTOList.splice(i + 1, 0, { ...stageGroupDTOItem })
    }
    const del = (i) => {
      form.stageGroupDTOList.splice(i, 1)
    }

    const save = (form) => {
      return saveConfig(form).then(({ msg }) => {
        console.log(msg)
      })
    }

    return {
      add,
      del,
      save,
      form,
    }
  },
})
</script>
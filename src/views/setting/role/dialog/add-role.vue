<template>
  <s-form @submit="save" :model="form" :rules="rules" label-width="100px">
    <s-form-item label="角色名称:" prop="roleName" render="el-input">
      <s-input v-model="form.roleName"></s-input>
    </s-form-item>
    <s-form-item label="角色组名称:" prop="roleGroupName">
      <s-input v-model="form.roleGroupName"></s-input>
    </s-form-item>
    <s-form-item label="关联设计器:" prop="roleGroupName">
      <s-input v-model="form.roleGroupName"></s-input>
    </s-form-item>
    <s-form-item label="描述:" prop="remark">
      <s-input type="textarea" v-model="form.remark"></s-input>
    </s-form-item>
    <s-form-item>
      <s-button @click="$emit('close')">取消</s-button>
      <s-button run="form.submit" type="primary">确定</s-button>
    </s-form-item>
  </s-form>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const save = () => {}

    const form = reactive({
      roleName: '',
      roleGroupName: '',
      remark: '',
    })

    const rules = reactive({
      roleGroupName: [{ required: true, message: '请输入角色组名称' }],
    })

    return {
      form,
      rules,
      save,
    }
  },
})
</script>
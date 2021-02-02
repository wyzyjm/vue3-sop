<template>
  <div>
    <s-form :model="form" label-width="100px" @submit="save">
      <s-form-item label="角色组名称" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="描述" type="textarea" prop="remark" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const save = (f) => {
      console.log(f)
    }

    const form = reactive({
      roleGroupName: '',
    })

    setTimeout(() => {
      form.roleGroupName = '999'
    }, 2000)

    return {
      save,
      form,
    }
  },
})
</script>
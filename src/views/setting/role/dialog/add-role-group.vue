<template>
  <div>
    <s-form label-width="100px" @submit="save">
      <s-form-item label="角色组名称" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="描述" :rules="[{required:true,message:'服务网'}]" type="textarea" prop="remark" />
      <s-form-item>
        <s-button run="form.submit">xxx</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup() {
    let form = reactive({})
    const save = (f) => {
      form = f
    }
    return {
      save,
      form,
    }
  },
})
</script>
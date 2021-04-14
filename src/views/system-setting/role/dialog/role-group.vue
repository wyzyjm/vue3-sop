<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
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
import roleGroupSave from '@/api/1368-post-common-service-role-group-save'
import { Message } from 'element-ui'
export default defineComponent({
  setup(props, { emit, root }) {
    const save = (form) => {
      return roleGroupSave(form).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        root.$store.commit('table/update')
      })
    }

    const form = reactive({
      roleGroupName: '',
      remark: '',
    })

    return {
      save,
      form,
    }
  },
})
</script>
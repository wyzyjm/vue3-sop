<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="业务名称" :rules="['required']" prop="name" />
      <s-form-item label="业务code" v-if="isEdit" component="s-text" :content="form.code" prop="code" />
      <s-form-item label="业务code" v-else prop="code" />
      <s-form-item label="状态" prop="status" component="s-group" :data="options.status" tag="el-radio-group" />
      <s-form-item label="描述" type="textarea" prop="description" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import saveBusinessType from '@/api/1404-post-business-type'
import updateBusinessType from '@/api/1406-put-business-type'
import useState from '@/hooks/use-state/disable-state'

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
    let form = reactive({
      description: '',
      id: undefined,
      code: '',
      name: '',
      status: 1,
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const save = (form) => {
      return (isEdit ? updateBusinessType(form) : saveBusinessType(form)).then(
        ({ msg }) => {
          console.log(msg)
        }
      )
    }

    const { options } = useState()

    return {
      save,
      form,
      options,
    }
  },
})
</script>
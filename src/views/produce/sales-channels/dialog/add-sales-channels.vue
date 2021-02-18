<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="渠道名称" :rules="['required']" prop="name" />
      <s-form-item label="渠道编码" v-if="isEdit" component="s-text" :content="form.code" prop="code" />
      <s-form-item label="渠道编码" v-else prop="code" />
      <s-form-item label="选择上级渠道" prop="status" component="s-group" :data="options.status" />
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
import useOptions from '../hooks/use-options'
import _save from '@/api/1430-post-sales-channel'
import _update from '@/api/1436-put-sales-channel'
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
      parentId: '',
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const save = (form) => {
      return (isEdit ? _update(form) : _save(form)).then(({ msg }) => {
        console.log(msg)
      })
    }

    const options = useOptions()

    return {
      save,
      form,
      options,
    }
  },
})
</script>
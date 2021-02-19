<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="产品名称" :rules="['required']" prop="name" />
      <s-form-item label="产品编码" v-if="isEdit" component="s-text" :content="form.code" prop="code" />
      <s-form-item label="产品编码" v-else prop="code" />
      <s-form-item label="业务类型" prop="status" component="s-group" :data="options" />
      <s-form-item label="售卖渠道" prop="status" component="s-group" :data="options" />
      <s-form-item label="状态" prop="status" component="s-group" :data="options" tag="el-radio-group" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import useState from '@/hooks/use-state/disable-state'
import _save from '@/api/1412-post-product-line'
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
      return _save(form).then(({ msg }) => {
        console.log(msg)
      })
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
<template>
  <div>
    {{form}}
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="阶段名称" :rules="['required']" prop="stageName" />
      <s-form-item label="阶段编码" :rules="['required']" prop="stageCode" />
      <s-form-item label="展示顺序" :rules="['required']" prop="orderSort" />
      <s-form-item label="未开始术语" :rules="['required']" prop="noStartTerm" />
      <s-form-item label="进行中术语" :rules="['required']" prop="progressTerm" />
      <s-form-item label="已完成术语" :rules="['required']" prop="finishedTerm" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import _save from '@/api/1448-post-service-order-cust-service-show-config-addstage'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ isEdit, data }, { root, emit }) {
    let form = reactive({
      stageName: '',
      stageCode: '',
      orderSort: '',
      noStartTerm: '',
      progressTerm: '',
      finishedTerm: '',
    })
    if (isEdit) {
      form = { ...form, ...data }
    }

    const save = (form) => {
      return _save(form).then(() => {
        console.log(data)
        root.$store.commit('table/update', {
          _uid: data.id,
        })

        emit('close')
      })
    }

    return {
      save,
      form,
    }
  },
})
</script>
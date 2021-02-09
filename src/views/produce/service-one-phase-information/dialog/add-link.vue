<template>
  <div>
    <s-form :model="form" label-width="140px" @submit="save">
      <s-form-item label="节点名称" :rules="['required']" prop="nodeName" />
      <s-form-item label="展示顺序" :rules="['required']" prop="orderSort" />
      <s-form-item label="进行中显示状态" :rules="['required']" prop="progressStatusName" />
      <s-form-item label="进行中显示话述" :rules="['required']" prop="progressTerm" />
      <s-form-item label="显示编辑内容" :rules="['required']" prop="showContentCode" />
      <s-form-item label="显示文档" :rules="['required']" prop="showDocumentFileId" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import _save from '@/api/1456-post-cust-service-show-config-addnode'
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
      nodeName: '',
      orderSort: '',
      progressStatusName: '',
      progressTerm: '',
      showContentCode: '',
      showDocumentFileId: '',
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const save = (form) => {
      return _save(form).then(({ msg }) => {
        console.log(data)
        root.$store.commit('table/update', {
          _uid: data.id,
        })

        emit('close')

        console.log(msg)
      })
    }

    return {
      save,
      form,
    }
  },
})
</script>
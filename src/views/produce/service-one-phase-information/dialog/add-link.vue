<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="a" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="v" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="c" :rules="['required']" prop="roleGroupName" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import roleGroupSave from '@/api/1368-post-role-group-save'
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
      roleGroupName: '',
      remark: '',
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const save = (form) => {
      return roleGroupSave(form).then(({ msg }) => {
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
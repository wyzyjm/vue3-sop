<template>
  <div>
    <s-form :model="form" label-width="140px" @submit="save">
      <s-form-item label="配置名称" component="s-group" :props="{label:'flowShowName',value:'id'}" :data="_getList" :rules="['required:number']" prop="configId" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import _getList from '@/api/2519-get-service-order-cust-service-show-config-list'
import _save from '@/api/2525-get-service-order-cust-service-show-config-copy'
export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },
  setup({ data }, { root, emit }) {
    let form = reactive({
      configId: '',
    })

    const save = (form) => {
      return _save(form).then(() => {
        root.$store.commit('table/update', {
          _uid: data.id,
        })

        emit('close')
      })
    }

    return {
      _getList,
      save,
      form,
    }
  },
})
</script>
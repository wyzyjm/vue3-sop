<template>
  <div>
    <s-form :model="form" label-width="140px" @submit="save">
      <s-form-item label="选择服务流程" :rules="['required']" prop="businessFlowName">
        <!-- <el-select v-model="form.businessFlowName" placeholder="请选择流程">
            <el-option
            v-for="item in table.basictype"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            ></el-option>
        </el-select> -->
      </s-form-item>
      <s-form-item label="版本" prop="version" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import updateBusinessFlow from '@/api/1547-post-service-order-sevice-business-flow-{id}'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ data }, { emit }) {
    let form = reactive({
      id: '',
      version: ''
    })

    const save = () => {
      updateBusinessFlow(form).then(
        (res) => {
          if (res.data) {
            emit('close')
            root.$store.commit('table/update')
          }
        }
      )
    }

    return {
      save,
      form
    }
  },
})
</script>
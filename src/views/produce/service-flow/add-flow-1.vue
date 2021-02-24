<template>
  <div>
    <div class="ce-flow mb20 flow-k">
      <s-form :model="form" label-width="130px" @submit="save">
        <s-form-item label="服务流程名称" prop="name" :rules="['required']" />
        <s-form-item label="服务产品编号" prop="code" :rules="['required']" />
        <s-form-item label="版本" prop="a" :rules="['required']" />
        <s-form-item label="关联工作流" prop="b" :rules="['required']" />
        <s-form-item label="描述" prop="c" type="textarea" />

        <s-form-item>
          <s-button @click="$emit('close')">取消</s-button>
          <s-button type="primary" run="form.submit">确定</s-button>
        </s-form-item>
      </s-form>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ isEdit, data }, { root }) {

    let form = reactive({
      name: '',
      code: 1,
      a: ''
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const save = (form) => {
      console.log("form")
      addFlow();
    }

    function addFlow() {
      root.$router.push({
        path: "/produce/add-service-flow",
        query: {}
      });
    }

    return {
      form,
      save
    }
  },
})
</script>
<style lang="scss" scoped>
  .flow-k {
    background: $sop-color-white;
    border-radius: 6px;
    border: 1px solid #EBEBEB;
  }
  .ce-flow {
    text-align: center;
    padding: 20px;
  }
</style>
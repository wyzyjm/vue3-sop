<template>
  <div>
    <s-form :model="form" label-width="100px" @submit="save">
      <s-form-item prop="propertyList">
        <el-checkbox-group v-model="form.propertyList">
          <el-checkbox v-for="(item,i) in options.propertyList" :key="i" :label="i">{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </s-form-item>
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

export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    let form = reactive({
      propertyList: [],
    })

    const options = useOptions()

    const save = () => {
      emit(
        'change',
        options.propertyList.filter((v, i) => form.propertyList.includes(i))
      )

      emit('close')
    }

    return {
      save,
      form,
      options,
    }
  },
})
</script>
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
      type: Array,
    },
  },
  setup({ data }, { emit }) {
    let form = reactive({
      propertyList: [],
    })

    const options = useOptions()

    options.propertyList.forEach((v, i) => {
      if (data.some((c) => c.name === v.name)) {
        form.propertyList.push(i)
      }
    })

    const save = () => {
      const emitData = options.propertyList.filter((v, i) =>
        form.propertyList.includes(i)
      )

      emit(
        'change',
        emitData.map((v) => {
          const cur = data.find((c) => c.name === v.name)
          return cur || v
        })
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
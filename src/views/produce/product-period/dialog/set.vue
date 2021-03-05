<template>
  <div>
    <s-form :model="form" label-width="180px" @submit="save">
      <s-form-item component="el-input-number" :precision="0" :min="0" label="基准生产周期（天）" prop="baseCycle" />
      <s-form-item component="el-input-number" :precision="0" :min="0" label="同风格时限（天）" prop="sameStyleTimeLimit" />
      <s-form-item component="el-input-number" :precision="0" :min="0" label="不同风格时限（天）" prop="differentStyleTimeLimit" />
      <s-form-item component="el-input-number" :precision="0" :min="0" label="蓝色预警时限（天）" prop="blueWarningCycle" />
      <s-form-item component="el-input-number" :precision="0" :min="0" label="黄色预警时限（天）" prop="yellowWarningCycle" />
      <s-form-item component="el-input-number" :precision="0" :min="0" label="橙色预警时限（天）" prop="orangeWarningCycle" />
      <s-form-item component="el-input-number" :precision="0" :min="0" label="红色预警时限（天）" prop="redWarningCycle" />
      <s-form-item label="" component="s-group" :data="options" prop="dateType" />

      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import _save from '@/api/1528-put-production-config-service-product-production-cycle-batch'
import { Message } from 'element-ui'

export default defineComponent({
  props: {
    data: {
      type: Array,
    },
  },
  setup({ data }, { emit, root }) {
    let form = reactive({
      baseCycle: '',
      id: undefined,
      sameStyleTimeLimit: '',
      differentStyleTimeLimit: '',
      blueWarningCycle: '',
      yellowWarningCycle: '',
      orangeWarningCycle: '',
      redWarningCycle: '',
      dateType: 1,
    })

    const save = (form) => {
      const params = { ...form }
      Object.keys(params).forEach((v) => {
        if (params[v] === '' || params[v] === 0) {
          params[v] = undefined
        }
      })
      const arr = data.map((v) => {
        return {
          ...params,
          id: v.id,
        }
      })
      return _save(arr).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        root.$store.commit('table/update')
      })
    }


    if(data.length === 1){
      Object.keys(form).forEach(v=>{
        form[v]=data[0][v]
      })
    }

    const options = ref([
      { label: '自然日', value: 0 },
      { label: '工作日', value: 1 },
    ])

    return {
      save,
      form,
      options,
    }
  },
})
</script>
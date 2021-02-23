<template>
  <div>
    <s-form :model="form" label-width="130px" @submit="save">
      <h2>基本信息</h2>
      <s-form-item label="服务产品名称" prop="name" :rules="['required']" />
      <s-form-item label="服务产品编号" prop="code" :rules="['required']">
        <el-radio-group v-model="form.code">
          <el-radio label="0">随机生成</el-radio>
          <el-radio label="1">自定义编号
            <el-input v-model="form.code"></el-input>
          </el-radio>
        </el-radio-group>
      </s-form-item>
      <s-form-item label="服务产品类型" prop="type" :rules="['required']" component="s-group" :data="options.type" />
      <s-form-item label="单位" prop="unit" :rules="['required']" component="s-group" :data="options.unit" />
      <s-form-item label="优先级" prop="name" :rules="['required']" />
      <s-form-item label="业务类型" prop="type" component="s-group" :data="options.type" />
      <s-form-item label="服务内容" prop="name" type="textarea" />
      <h2>属性信息</h2>

      <s-form-item label="风格" prop="type" :rules="['required']" component="s-group" :data="options.type" />
      <s-form-item label="语言" prop="type" :rules="['required']" component="s-group" :data="options.type" />


      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import useOptions from './hooks/use-options'
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

    const options = useOptions()

    return {
      save,
      form,
      options,
    }
  },
})
</script>
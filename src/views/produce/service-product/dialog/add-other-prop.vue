<template>
  <div>
    <s-form :model="form" label-width="100px" @submit="save">

      <s-form-item prop="name" label="属性名称" />

      <s-form-item prop="valueList" label="属性值">
        <el-row v-for="(item,i) in form.valueList" class="mb10" :key="i">
          <el-col :span="12">
            <s-form-item>
              <s-input class="pct90" v-model="item.value"></s-input>
            </s-form-item>
          </el-col>
          <el-col :span="12">
            <s-form-item>
              <s-input class="pct90" v-model="item.code"></s-input>
            </s-form-item>
          </el-col>
        </el-row>

      </s-form-item>

      <s-form-item>
        <s-button icon="el-icon-circle-plus" @click="add">继续添加</s-button>
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
import _save from '@/api/1630-post-production-config-service-product-property-prepared'
import { Message } from 'element-ui'

export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const item = {
      value: '',
      code: '',
    }

    let form = reactive({
      name: '',
      valueList: [],
    })

    const save = (form) => {
      return _save(form).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        // root.$store.commit('table/update')
      })
    }

    const add = () => {
      form.valueList.push({ ...item })
    }

    add()

    return {
      add,
      save,
      form,
    }
  },
})
</script>
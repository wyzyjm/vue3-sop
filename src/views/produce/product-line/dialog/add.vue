<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="产品名称" :props="{
            label:'name',
            value:'id'
          }" component="s-group" :data="moreOptions.productList" @change="nameChange" :rules="['required:number']" prop="name" />
      <s-form-item label="产品编码" component="s-text" :content="form.code" prop="code" />
      <s-form-item label="业务类型" :rules="['required:array']" prop="businessTypeIdList" multiple component="s-group" :props="{
            label:'name',
            value:'id'
          }" :data="moreOptions.businessType" />
      <s-form-item label="售卖渠道" :rules="['required']">
        <el-cascader :props="{
          multiple:true,
            label:'name',
            value:'id'
          }" v-model="form.salesChannelIdList" :options="moreOptions.salesChannels"></el-cascader>
      </s-form-item>
      <s-form-item label="状态" :rules="['required:number']" prop="status" component="s-group" :data="options" tag="el-radio-group" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import useState from '@/hooks/use-state/disable-state'
import _save from '@/api/1412-post-production-config-product-line'
import useOptions from '../hooks/use-options'
import { Message } from 'element-ui'

export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ isEdit, data }, { emit, root }) {
    let form = reactive({
      status: 1,
      id: undefined,
      code: '',
      name: '',
      businessTypeIdList: [],
      salesChannelIdList: [],
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const nameChange = (id) => {
      form.code = moreOptions.productList.find((v) => v.id === id).code
    }

    const save = (form) => {
      const params = JSON.parse(JSON.stringify(form))
      params.salesChannelIdList = [
        ...new Set([].concat(...params.salesChannelIdList)),
      ]
      return _save(params).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        root.$store.commit('table/update')
      })
    }
    const moreOptions = useOptions()

    const { options } = useState()

    return {
      save,
      form,
      options,
      moreOptions,
      nameChange,
    }
  },
})
</script>
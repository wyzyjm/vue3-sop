<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="渠道名称" :rules="['required']" prop="name" />
      <s-form-item label="渠道编码" :rules="['required']" v-if="isEdit" component="s-text" :content="form.code" prop="code" />
      <s-form-item label="渠道编码" :rules="['required']" v-else prop="code" />
      <s-form-item label="选择上级渠道">
        <el-cascader :props="{
            label:'name',
            value:'id',
            checkStrictly:true,
          }" v-model="form.allParentSalesChannelIdList" :options="moreOptions.salesChannels"></el-cascader>
      </s-form-item>
      <s-form-item label="状态" :rules="['required:number']" prop="status" component="s-group" :data="options" tag="el-radio-group" />
      <s-form-item label="描述" type="textarea" prop="description" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive, computed } from '@vue/composition-api'
import useState from '@/hooks/use-state/disable-state'
import _save from '@/api/1430-post-production-config-sales-channel'
import _update from '@/api/1436-put-production-config-sales-channel'
import { Message } from 'element-ui'
import useOptions from '../hooks/use-options'

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
      description: '',
      id: undefined,
      code: '',
      name: '',
      status: 1,
      allParentSalesChannelIdList: [],
      parentId: computed(() => {
        return form.allParentSalesChannelIdList[
          form.allParentSalesChannelIdList.length - 1
        ]
      }),
    })



    if (isEdit) {
      form = { ...form, ...data }
      form.allParentSalesChannelIdList=JSON.parse(data.allParentIds)
    }

    const save = (form) => {
      return (isEdit ? _update(form) : _save(form)).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        root.$store.commit('table/update')
      })
    }

    const { options } = useState()
    const moreOptions = useOptions()

    return {
      save,
      form,
      options,
      moreOptions,
    }
  },
})
</script>
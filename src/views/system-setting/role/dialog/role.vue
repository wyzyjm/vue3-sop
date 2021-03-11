<template>
  <div>

    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="角色名称" :rules="['required']" prop="roleName" />
      <s-form-item label="角色组名称" :data="options.roleGroup" :rules="['required:number']" prop="roleGroupId" component="s-group" />
      <s-form-item label="关联设计器" :data="options.qtDesigner" prop="qtDesignerId" component="s-group" />
      <s-form-item label="状态" :rules="['required:number']" :data="options.state" prop="state" component="s-group" tag="el-radio-group" />
      <s-form-item label="服务商可见" :data="options.isSpVisible" :rules="['required:number']" prop="isSpVisible" component="s-group" tag="el-radio-group" />
      <s-form-item label="描述" type="textarea" prop="remark" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import roleSave from '@/api/1382-post-common-service-role-save'
import roleUpdate from '@/api/1384-post-common-service-role-update'
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
      roleName: '',
      roleGroupId: '',
      isSpVisible: 0,
      qtDesignerId: '',
      remark: '',
      state: 1,
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const save = (form) => {
      return (isEdit ? roleUpdate(form) : roleSave(form)).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        root.$store.commit('table/update')
      })
    }

    const options = useOptions()

    return {
      form,
      save,
      options,
    }
  },
})
</script>
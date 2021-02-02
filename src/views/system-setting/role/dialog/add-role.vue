<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="角色名称" :rules="['required']" prop="roleName" />
      <s-form-item label="角色组名称" :data="options.roleGroup" :rules="['required']" prop="roleGroupId" component="s-group" />
      <s-form-item label="关联设计器" :data="options.qtDesigner" prop="qtDesignerId" component="s-group" />
      <s-form-item label="状态" :rules="['required']" :data="options.state" prop="state" component="s-group" tag="el-radio-group" />
      <s-form-item label="服务商可见" :data="options.isSpVisible" :rules="['required']" prop="isSpVisible" component="s-group" tag="el-radio-group" />
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
import roleSave from '@/api/1382-post-role-save'
import roleUpdate from '@/api/1384-post-role-update'
import getRoleDropDownList from '@/api/1388-get-role-drop-down-list'
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
      roleName: '',
      roleGroupId: '',
      isSpVisible: '',
      qtDesignerId: '',
      remark: '',
      state: '',
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const save = (form) => {
      return (isEdit ? roleSave(form) : roleUpdate(form)).then((response) => {
        console.log(1, response)
      })
    }

    let options = {}
    getRoleDropDownList().then(({ data }) => {
      options = data
    })

    return {
      form,
      save,
      options,
    }
  },
})
</script>
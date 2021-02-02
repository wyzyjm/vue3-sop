<template>
  <div>
    <s-form label-width="110px" @submit="save">
      <s-form-item label="角色名称" :rules="['required']" prop="roleName" />
      <s-form-item label="角色组名称" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="关联设计器" :data="[]" prop="sjq" component="s-group" kief="3"></s-form-item>
      <s-form-item label="状态" :rules="['required']" :data="getData" prop="state" component="s-group" tag="el-radio-group"></s-form-item>
      <s-form-item label="服务商可见" :data="[]" :rules="['required']" prop="state" component="s-group" tag="el-radio-group"></s-form-item>
      <s-form-item label="描述" type="textarea" prop="remark" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const save = (f) => {
      console.log(f)
    }

    const getData = () => {
      return new Promise((r) => {
        setTimeout(() => {
          r([])
        }, 3000)
      })
    }

    return {
      save,
      getData,
    }
  },
})
</script>
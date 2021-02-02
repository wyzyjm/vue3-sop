<template>
  <div>

    <!-- 
      和原有form参数一致，可以省略model参数
      如果需要编辑的表单，可以绑定model进行赋值操作
      例：<s-form :model="form" label-width="100px" @submit="save">

     -->
    <s-form label-width="100px" @submit="save">
      <s-form-item label="角色名称" :rules="['required']" prop="roleName" />
      <s-form-item label="角色组名称" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="关联设计器" :data="[]" prop="sjq" component="s-group" kief="3"></s-form-item>
      <s-form-item label="状态" :rules="['required']" :data="getData" prop="state" component="s-group" tag="el-radio-group"></s-form-item>

      <!-- 
        data:选项数据，支持数组，函数,函数需要返回Promise对象或者数组
        component:要在form-item中渲染的组件名，默认是el-input.示例中s-group是封装的自定义组件，该组件可以渲染el-select、el-radio-group、el-checkbox-group 
        rules:校验规则，用法和原element-ui一致，增加快捷检验规则 required,mobile,email
        label,prop 和原有form-item 一致

        其他参数会传递给 component渲染出来的组件
        tag:s-group组件接收的参数，默认el-select，这里的el-radio-group>el-radio-button 中带 '>'代表指定后面的子元素，不传用默认el-radio
       -->
      <s-form-item label="服务商可见" :data="getData2" :rules="['required']" prop="state" component="s-group" tag="el-radio-group>el-radio-button"></s-form-item>

      <s-form-item label="描述" type="textarea" prop="remark" />
      <s-form-item>

        <!-- 
          run:快捷功能 
          form.submit 校验当前表单，通过后在form上触发submit事件
          form.search 校验当前表单，通过后在form上触发search事件,并将参数记录到路由，一般表格查询会用到,路由的参数会通过formInit事件传回来
          form.reset  把表单数据复原成刚打开页面是的状态，并触发form上的reset事件
          form.clear  清除所有数据，包括路由上的参数信息，并触发form上的clear事件
          @click="func" func 如果返回Promise对象，按钮会自动加上loading状态
         -->
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

    const getData2 = () => {
      return new Promise((r) => {
        setTimeout(() => {
          r([
            {
              label: '测试',
              value: '1',
            },
          ])
        }, 4000)
      })
    }

    return {
      save,
      getData,
      getData2,
    }
  },
})
</script>
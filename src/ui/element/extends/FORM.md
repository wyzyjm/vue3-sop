# s-form 说明文档


## attributes （默认继承 el-form 所有属性，这里只列举额外属性）

| 参数	 | 说明 | 类型	 | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| uid | 路由参数记录唯一值 | string/number |- |0 |


<br />

## example
### 1、基本用法
```html

<s-form :model="form" @submit="submit" @search="search" @clear="clear" @reset="reset" >
    <!-- 快捷写法 默认渲染el-input -->
    <s-form-item label="订单编号" prop="orderCode" />
    <!-- 下拉框 -->
    <s-form-item label="订单状态" prop="status" component="s-group" :data="options" />
    <!-- 多/单选 -->
    <s-form-item label="订单状态" prop="status" component="s-group" :data="options"  tag="checkbox" />
    <!-- 快捷校验 （目前支持 required,email,mobile） -->
    <s-form-item label="订单状态" :rules="['required:number','email']" prop="status" component="s-group" :data="options" />
    <!-- 组合校验 -->
    <s-form-item label="订单编号" :rules="['required',{max:9,message:'超过最大值'}]" prop="orderCode" />
    <!-- 普通写法（支持与快捷混用） -->
    <s-form-item label="订单编号" prop="orderCode" >
        <el-input v-model="form.orderCode" />
    </s-form-item>

    <!-- 表单提交 -->
    <s-form-item >
        <!-- 触发表单校验，校验通过触发事件search，在路由记录当前数据信息 -->
        <s-button type="primary" run="form.search">查询</s-button>
        <!-- 触发表单校验，校验通过触发事件submit -->
        <s-button type="primary" run="form.submit">提交</s-button>
        <!-- 重置表单数据位页面初始化时候的数据，触发事件reset，清除路由数据 -->
        <s-button run="form.reset">重置</s-button>
        <!-- 清空表单数据，触发事件clear，清除路由数据 -->
        <s-button run="form.clear">清空</s-button>

        <!-- 普通click -->
        <!-- 如果handleClick返回promise对象，会自动加载loading状态，无需手动设置 -->
        <s-button @click="handleClick">点击</s-button>


    </s-form-item>
</s-form>

```
```javascript
import request from '@/api/2363-get-frontapi-service-provider-org-get-orgenum'
import { reactive } from 'vue'
import useOptions from './hooks/use-options'

export default {
    const form=reactive({
       orderCode:'',
       status:1
    })


    const handleClick=()=>{
        ...
        return request()
    }

    const options=useOptions()  

    return {form,options,handleClick}
}

```

</br>

# s-button 说明文档


## attributes

| 参数	 | 说明 | 类型	 | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| run | 快捷命令 | string |form.submit/form.search/form.reset/form.clear |- |
| confirm | 提示信息（会在点击按钮的时候弹出提示，确定后执行click事件） | string |- |- |


</br>
</br>

# s-group 说明文档


## attributes

| 参数	 | 说明 | 类型	 | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| tag | 要渲染元素 | string |所有全局能访问到的组件 |el-input |
| data | 选项的数据（如下拉列表） | array/function/promise |- |- |
| init | 是否在组件加载完成后加载数据 | boolen | true/false | true |
| props | 手动指定label和value对应的字段（不指定会自动读取） | object | label/value |  {label:'label',value:'value'}  |

</br>
</br>

# s-text 说明文档


## attributes

| 参数	 | 说明 | 类型	 | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| formatDate | 时间格式化 | string | yyyy/MM/dd hh:mm:ss | yyyy/MM/dd |
| content | 要现实的数据字段 | string |- |- |
| tag | 渲染的元素 | string | - | span |
| tip | 鼠标移动上去的提示信息 | string | - | - |
| emptyText | 数据为空时候的占位符 | string | - | -- |
| options | 选项的数据（会通过content===value的方式匹配出对应的lable） | string | - | - |
| props | 手动指定label和value对应的字段（不指定会自动读取） | object | label/value |  {label:'label',value:'value'}  |


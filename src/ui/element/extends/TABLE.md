# s-s-table 说明文档


## attributes （默认继承 el-table 所有属性，这里只列举额外属性）

| 参数	 | 说明 | 类型	 | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| uid | 数据更新用（单页面多表格必须设置） | string/number |- |0 |
| data | 内置数据请求处理模块，可以直接传入获取数据的函数 | array/function |- |- |
| cols | 表格列配置（配置项参考 el-table column 相关属性） | array |- |- |
| value/v-model | 带 多选/单选 的表格，选中后的数据 | array |- |- |
| init | 是否在页面渲染完成后发起数据请求 | boolean | true/false | true |
| page | 分页数据,传入false隐藏分页，也可传入分页配置（配置项参考el-pagination） | boolean/object | -| - |
| props | 手动指定数据和分页数据字段(不指定会自动获取) | object | - | {data: 'data',total: 'total'} |



<br />


## cols attributes （默认继承 el-table-column 所有属性，这里只列举额外属性）
| 参数	 | 说明 | 类型	 | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| type | 在原type基础上增加checkbox/raido,对应的table使用v-model接收选中数据 | string | selection/index/expand/checkbox/radio	 |- |
| label | 扩展支持类型Function，可通过render渲染自定义表头 | string/function | -	 |- |
| prop | 扩展支持类型Function，可通过render渲染自定义表头 | string/function | -	 |- |



<br />



### 主动触发表格数据更新方法
```javascript
//单表格默认值
 $store.commit('table/update')
 
//通过uid单独更新某个表格，或者需要添加额外参数
 $store.commit('table/update',{_uid:'',...params}) //uid不传使用默认0，params是额外参数，表单和分页的参数默认自动读取
```

## data example
### 1、基本用法
```html
<s-s-table :cols="table.cols" :data="table.data" />
```
```javascript
import request from '@/api/2363-get-frontapi-service-provider-org-get-orgenum'
import { reactive } from 'vue'

export default {
    //table组件内置一套数据字段读取算法，一半情况下不需要手动指定，如遇到自动读取问题，可以手动写then处理函数，返回正确数据对象
    const table=reactive({
        data:request,
        cols:[{
            label:'表头',
            prop:'数据字段'
        }]
    })
    return {table}
}

```
<br />

### 2、对请求数据进行额外的操作
```html
<s-s-table :cols="table.cols" :data="getData" />
```
```javascript
import request from '@/api/2363-get-frontapi-service-provider-org-get-orgenum'
import { reactive } from 'vue'

export default {
    const table=reactive({
        data(params) {
            // 这里可以对数据请求参数做修改
            return request(params).then(response=>{
                return response.data //在这里对返回数据进行修改，手动返回数据对象。
            }) 
        },
        cols:...
    })
    return {table}
}

```
<br />

### 3、带筛选表单的表格
```html
<s-s-table :cols="table.cols" :data="table.data">
    <s-form :model="form" slot="form" inline>
        <!-- 快速定义 component不写默认el-input -->
        <s-form-item label="订单编号" prop="orderCode" component="el-switch" />
        <!-- 普通定义 -->
        <s-form-item label="订单编号" prop="orderCode" >
            <el-input v-model="form.orderCode" />
        </s-form-item>
    </s-form>
</s-s-table>
```
```javascript
import request from '@/api/2363-get-frontapi-service-provider-org-get-orgenum'
import { reactive } from 'vue'

export default {
    const form=reactive({
        orderCode:''
    })
    const table=reactive({
      ...
    })
    return {form,table}
}

```
<br />

### 3-1、带筛选表单的表格（快速定义）
```html
<s-s-table :cols="table.cols" :data="table.data">
    <s-form slot="form" inline>
        <!-- 快速定义 component不写默认el-input -->
        <!-- 此处接收的属性，会传递给componet定义的组件  -->
        <s-form-item label="订单编号" prop="orderCode" component="el-switch" />
        <s-form-item label="状态" prop="status" component="group" :data="options" />
    </s-form>
</s-s-table>
```
```javascript
import request from '@/api/2363-get-frontapi-service-provider-org-get-orgenum'
import { reactive } from 'vue'
import useOptions from './hooks/use-options'

export default {
    const table=reactive({
      ...
    })

    const options=useOptions()  
    /**
     * [{
     *  label:'启用',
     *  value:1
     * },{
     *  label:'停用',
     *  value:0
     * }]
     * /
    
    return {table,options}
}

```
<br />

### 4、带选择的表格

```html
<s-s-table v-model="table.selected" :cols="table.cols" :data="table.data" />
```
```javascript
import request from '@/api/2363-get-frontapi-service-provider-org-get-orgenum'

export default {
    const table=reactive({
        data:request,
        selected:[],
        cols:[{
            label:'选择',
            width:'44px',
            type:'checkbox'
        }]
    })
    return {table}
}

```
<br />

### 5、自定义prop字段内容

```html
<s-s-table v-model="table.selected" :cols="table.cols" :data="table.data" />
```
```javascript
import request from '@/api/2363-get-frontapi-service-provider-org-get-orgenum'

export default {
    const table=reactive({
        data:request,
        selected:[],
        cols:[{
            label:'render写法',
            prop:({row},h)=>{
                return h('div',null,row.status?'启用':'禁用')
            },
            label:'jsx写法',
            prop:({row})=>{
                return <el-switch value={row.status} onChange={(val)=>row.status=val}></el-switch>
            }
        }]
    })
    return {table}
}

```

### 6、嵌套表格

```html
<s-s-table :cols="table.cols" :data="table.data" />
```
```javascript
import request from '@/api/2363-get-frontapi-service-provider-org-get-orgenum'

export default {
    const table2=reactive({
        ...
    })

    const createRequest=(row)=>{
        return (params)=>{
            return request1({id:row.id,...params})
        }
    }

    const table=reactive({
        data:request,
        cols:[{
           type:'expand',
           prop:({row})=>{
               return <s-s-table cols={table2.cols} data={createRequest(row)} ></s-s-table>
           }
        }]
    })
    return {table}
}

```
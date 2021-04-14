# s-form 说明文档


## attributes （默认继承 el-form 所有属性，这里只列举额外属性）

| 参数	 | 说明 | 类型	 | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| uid | 路由参数记录唯一值 | string/number |- |0 |
| component | 弹窗内容 | module |- |- |


<br />

## example
### 1、基本用法
```html
<s-dialog :component="./dialog/add.vue">
```

### 打开/关闭方法
```javascript
//打开
 $store.commit('dialog/open')
//关闭
 $store.commit('dialog/close')
 
//通过uid单独操作某个弹窗，或者需要传递参数给内部组件
 $store.commit('table/update',{_uid:'',...params}) //uid不传使用默认0
```

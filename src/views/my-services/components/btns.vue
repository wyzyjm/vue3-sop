<!-- 按钮集合 -->
<template>
<div class='btn_box'>
    <el-button v-for="(value, key, idx) in btns" :key="idx" type="primary" size="small" 
    style="margin:0 10px 10px 0" @click="openDialog(value)">{{value.label}}</el-button>
    <s-dialog :title="curTitle"
    :component="curPath" :width="curWidth"></s-dialog>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { btns } from '../utils/btn.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['code'],
data() {
//这里存放数据
return {
    btns: [],
    curPath: '',
    curTitle: '',
    curWidth: ''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    openDialog (data) {
      if (data.fileName) {
        this.curPath = require('../dialog/' + data.fileName)
        this.curTitle = data.label
        this.curWidth = data.width ? data.width + 'px' : '800px'
        this.$store.commit("dialog/open", {code: this.code, buttonType: data.value});
      }
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.btns = btns
    console.log(btns, 999)
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
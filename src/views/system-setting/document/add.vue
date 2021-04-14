<!-- 文档 -->
<template>
<div class="box">
    <!--服务商基本信息-->
    <div class='module-box'>
        <div class="title-box">新增文档</div>
        <el-form :model="form" ref="form" :rules="formRules" label-width="140px" class="form-box">
            <el-form-item label="文档名称：" prop="basicName" class="is-required">
                <el-input class="w340" v-model="form.basicName" placeholder="请输入文档名称"
                minlength="2" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="文档类型：" prop="majorBusiness" class="is-required">
                <el-select
                    v-model="form.majorBusiness"
                    placeholder="请选择文档类型"
                    class="w340"
                >
                    <el-option label="工商财税" value="工商财税"></el-option>
                    <el-option label="知识产权" value="知识产权"></el-option>
                    <el-option label="营销推广" value="营销推广"></el-option>
                    <el-option label="电商服务" value="电商服务"></el-option>
                    <el-option label="软件服务" value="软件服务"></el-option>
                    <el-option label="视觉设计" value="视觉设计"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="适用渠道：" prop="basicName" class="is-required">
                <el-input class="w340" v-model="form.basicName" placeholder="请输入文档名称"
                minlength="2" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="适用产品线：" prop="basicName">
                <el-input class="w340" v-model="form.basicName" placeholder="请输入文档名称"
                minlength="2" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="适用服务产品：" prop="basicName">
                <el-input class="w340" v-model="form.basicName" placeholder="请输入文档名称"
                minlength="2" maxlength="50"></el-input>
            </el-form-item>
        </el-form>
    </div>
    <div class="footer-box">
        <el-button type="primary" @click="handleSave()">提交</el-button>
        <el-button class="ml20">取消</el-button>
    </div> 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    form: {

    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

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
@import url("../provider/style.scss");
</style>
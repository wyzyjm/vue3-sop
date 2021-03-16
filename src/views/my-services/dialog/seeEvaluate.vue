<!-- 操作日志 -->
<template>
<div >
    <div class="title">客户对你的服务评价分数为&nbsp;<strong>{{result.totalScore || '----'}}</strong>&nbsp;分</div>
    <div class="col_box">
        <span class="desc_style">设计能力</span>
        <el-rate
        style="float:left"
        v-model="result.designScore"
        disabled
        show-score
        text-color="#ff9900">
        </el-rate>
        <span class="score_style">得分：{{result.designScore}}</span>
    </div>
    <div class="col_box">
        <span class="desc_style">服务能力</span>
        <el-rate
        style="float:left"
        v-model="result.serviceScore"
        disabled
        show-score
        text-color="#ff9900">
        </el-rate>
        <span class="score_style">得分：{{result.serviceScore}}</span>
    </div>
    <div class="col_box">
        <span class="desc_style">服务周期</span>
        <el-rate
        style="float:left"
        v-model="result.makeScore"
        disabled
        show-score
        text-color="#ff9900">
        </el-rate>
        <span class="score_style">得分： {{result.makeScore}}</span>
    </div>
    <div class="col_box" style="margin-bottom:16px;">
        <p class="desc_style" style="line-height:20px;color:#888;">客户评价： {{result.evaluateContent}}看拉萨佳都科技阿三六九等撒家里的看拉萨佳都科技阿三六九等撒家里的看拉萨佳都科技阿三六九等撒家里的看拉萨佳都科技阿三六九等撒家里的看拉萨佳都科技阿三六九等撒家里的看拉萨佳都科技阿三六九等撒家里的看拉萨佳都科技阿三六九等撒家里的</p>
        <p style="clear:both;"></p>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['code', 'buttonType'],
data() {
//这里存放数据
return {
    value: 3.3,
    result: {}
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
    getServicesBtn({serviceCode: this.code, buttonType: this.buttonType}).then(res => {
        // res.data = res.data
        this.result = res.data
    }) 
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
    .title{
        font-size:16px;
        color:#999;
        strong {
            font-size: 24px;
            color:#666;
        }
    }
    .col_box{
        padding:20px 0;
        .desc_style{
            float:left;margin:2px 10px 0 0;
        }
        .score_style{
            float:left;margin:0px 0 0 30px;
        }
    }
</style>
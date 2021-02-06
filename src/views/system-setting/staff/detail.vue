<!-- 查看员工详情 -->
<template>
<div class='box'>
    <div class='module-box' v-for="(item, idx) in form" :key="idx">
        <div class="title-box">{{item.title}}</div>
        <p class="clear"></p>
        <el-row :gutter="20" class="row-box">
            <el-col :span="8" v-for="(value, key, index) in item.keys" :key="index">
                <div class="item-col">
                    <div class="col-title">{{value}}：</div>
                    <div class="col-txt">{{key}}</div>
                </div>
            </el-col>        
        </el-row>
    </div>
    <div class="footer-box">
        <el-button>关闭</el-button>
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
    // 服务商类型 1个人 2企业
    form: [
        {
            title: '创建信息', keys: {create: '创建人', createTime: '创建时间'}
        },
        {
            title: '基本信息', keys: {sourceId: '所属服务商', orgId: '所属组织', employeeName: '姓名', 
            officePhone: '电话', mobile: '手机',
            workMail: '邮箱', position: '岗位',
            roleMap: '授权角色', status: '状态'}
        }
        
    ]
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
    console.log(this.$route.params.pid)
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
.row-box{
    margin:25px auto;
}
.item-col{
    clear: both;
    // background: #0f0;
    height:44px;
    line-height: 44px;
    font-size:12px;
    .clear{
        clear: both;
    }
    .col-title{
        width:100px;
        text-align: right;
        float:left;
        margin:0;
        color:#999;
    }
    .col-txt{
        width:calc(100% - 110px);
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        float: left;
    }
}
</style>
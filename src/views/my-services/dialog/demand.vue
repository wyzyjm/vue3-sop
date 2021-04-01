<!-- 查看填写需求 -->
<template>
<div style="max-height:450px;overflow-y:scroll">
    <p class="el-popover__title">消耗单品
        <span style="float:right">本次消耗/总量</span>
    </p>
    <el-row class="row-box" v-for="(item, idx) in form.orderConsumeInfo" :key="idx">
        <el-col :span="6" class="omit1">{{item.accountText}}</el-col>
        <el-col :span="11"><el-progress :percentage="(item.consumeNum / item.totalNum).toFixed(2) * 100"></el-progress></el-col>
        <el-col :span="7" style="" class="col_box">
            <span>{{item.totalNum}}</span>
            <el-input size="mini" class="input" v-model="item.consumeNum"
            :disabled="isSee"
            @blur="checkNum(item, idx)"></el-input>
        </el-col>
    </el-row>
    <!-- <el-row class="row-box">
        <el-col :span="4">内容录入</el-col>
        <el-col :span="13"><el-progress :percentage="50"></el-progress></el-col>
        <el-col :span="7" style="" class="col_box">
            <span>100</span>
            <el-input type="number" size="mini" class="input"></el-input>
        </el-col>
    </el-row>
    <el-row class="row-box">
        <el-col :span="4">内容制作</el-col>
        <el-col :span="13"><el-progress :percentage="50"></el-progress></el-col>
        <el-col :span="7" style="" class="col_box">
            <span>100</span>
            <el-input type="number" size="mini" class="input"></el-input>
        </el-col>
    </el-row>
    <el-row class="row-box">
        <el-col :span="4">创意风格</el-col>
        <el-col :span="13"><el-progress :percentage="50"></el-progress></el-col>
        <el-col :span="7" style="" class="col_box">
            <span>100</span>
            <el-input type="number" size="mini" class="input"></el-input>
        </el-col>
    </el-row> -->

    <p class="el-popover__title">服务需求</p>
    <el-form :model="form" size="small" ref="form" label-width="100px">
        <el-form-item label="服务主体：" prop="serviceMainInstanceCode" >
            <el-input v-model="form.serviceMainInstanceCode" readonly></el-input>
        </el-form-item>
        <el-form-item label="需求说明：" prop="demandContent" >
            <el-input
            :readonly="isSee"
            type="textarea"
            :rows="4"
            maxlength="999"
            placeholder="设计要素,主色调,参考网站,说明"
            v-model="form.demandContent">
            </el-input>
        </el-form-item>
        <el-form-item>
            <div style="margin-top:10px;">
                <ce-file :form="form" :data="{'code': 'annexList'}" size="small" v-if="!isSee"></ce-file>
                <div v-else>
                    <el-tag v-for="(file, idx) in form.annexList" :key="idx" @click="preview(file)">{{file.annexName}}</el-tag>
                </div>
                
            </div>
        </el-form-item>
        <!-- <el-form-item>
            <div class="foot_box">
                <el-button type="default" @click="cancel">取消</el-button>
                <el-button type="primary" @click="save">确定</el-button>
            </div>
        </el-form-item> -->
    </el-form>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
import ceFile from "../components/file"
export default {
props: ['code', 'buttonType', 'form'],
//import引入的组件需要注入到对象中才能使用
components: {
    ceFile
},
data() {
//这里存放数据
return {
    isSee: false
    // unitList: [],
    // form: {}
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
},
//方法集合
methods: {
    checkNum(row, idx) {
        if (!row.consumeNum || row.consumeNum == '') {
            row.consumeNum = 0
        }
        if (row.consumeNum > row.totalNum) {
            this.$message.warning('消耗数量不能大于总量')
            this.form.orderConsumeInfo[idx].consumeNum = row.totalNum
            return false
        }
    },
    preview (file) {
        window.open(file.annexShowUrl)
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    // 查看需求
    if (this.buttonType == 'demand_see') {
        this.isSee = true
    }
    // // 单品消耗
    getServicesBtn({serviceCode: this.code, buttonType: 'demand_see'}).then(res => {
        Object.keys(res.data).forEach(key => {
                this.form[key] = res.data[key]
                if (key == 'annexList' && !res.data[key]) {
                    this.form[key] = []
                } 
        })
        for(let i = 0; i < 7; i++) {
            this.form.orderConsumeInfo.push(this.form.orderConsumeInfo[0])
        }
        // this.form.buttonType = 'demand_confirm'
        // this.form = res.data
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
    .row-box{
        margin:20px 0 0 0;border-bottom:1px solid #ebebeb;height:36px;
        .col_box{
            text-align:right;margin-top:-4px;
            span{
                width:30%;height:26px;line-height:26px;font-size:12px;background:#ccc;margin-left:5px;float:right;text-align:center;color:#fff;
            }
            .input{
                width:40%  !important;
                float:right ;
                border:0 !important
            }
        }
    }
    .omit1{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
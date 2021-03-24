<!-- 按钮集合 -->
<template>
<div class='btns_box'>
    <el-button size="small" type="primary" style="margin-bottom:10px"
    @click="handleShowBtn(btn, idx)"
    v-for="(btn, idx) in btn" :key="idx">{{btn.label}}</el-button>
    <div v-bind:id="id" 
    @mousedown="mousedown" 
    class="drag_box" 
    v-if="dragDialogVisible">
        <!--标题-->
        <p class="el-popover__title" v-if="!curBtn.hideTitle">{{curBtn.label}}</p>
        <!--业务展示-->
        <component :is="curBtn.fileName" 
        :code="code" 
        :curBtn="curBtn"
        :buttonType="curBtn.value"
        :form="form"></component>
        <!--底部操作按钮-->
        <div style="text-align:center;margin-top:20px">
            <el-button @click="submitForm(curBtn)" type="primary" size="small" 
            v-if="!curBtn.hideSubmit" :loading="curBtn.loading">确定</el-button>
            <!-- <el-button @click="$refs['dragForm'].resetFields()" size="small">重置</el-button> -->
            <el-button @click="closeDrag" type="danger" size="small">关闭</el-button>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { btns } from '../utils/btn.js'
import Log from '../dialog/log'
import seeEvaluate from '../dialog/seeEvaluate'
import Score from '../dialog/score'
import webPreview from '../dialog/webPreview'
import Allot from '../dialog/allot'
import editForm from '../dialog/editForm'
import Upload from '../dialog/upload'
import Demand from '../dialog/demand'
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
import { cloneDeep } from 'lodash';
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Log,
    seeEvaluate,
    Score,
    webPreview,
    Allot,
    editForm,
    Upload,
    Demand
},
props: ['code', 'btnList'],
data() {
//这里存放数据
return {
    dragDialogVisible: false,
    id: 'drag_box',
    move: true,
    btn: [],
    curBtn: {},
    form: {
        annexList: [], // 附件ID集合
        buttonType: '', // 按钮类型
        configId: '', // 配置ID
        demandContent: '', // 需求
        orgId: '', // 部门ID
        empId: '', // 员工ID
        personScoreJson: '', // 评分结果
        reason: '', // 原因
        serviceCode: '', // 服务单号
        serviceId: '', // 服务商ID
        serviceMainInstanceCode: '', // 实例号
        orderConsumeInfo: '', // 消耗单品
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    submitForm (data) {
        if (data.requiredParam) {
            if (!this.form[data.requiredParam.vaild]) {
                this.$message.error(data.requiredParam.errorMsg)
                return false
            }
        }
        let cloneOrderConsumeInfo = cloneDeep(this.form.orderConsumeInfo)
        // if (this.form.orderConsumeInfo.length > 0) {

        //     this.form.orderConsumeInfo = JSON.stringify(this.form.orderConsumeInfo)
        // } else {
        //     this.form.orderConsumeInfo = ''
        // }

        // 填写需求特殊处理
        if (this.form.buttonType == 'demand_write') {
            getServicesBtn({
                annexList: this.form.annexList,
                buttonType: this.form.buttonType,
                configId: this.form.configId,
                demandContent: this.form.demandContent,
                orgId: this.form.orgId,
                empId: this.form.empId,
                personScoreJson: this.form.personScoreJson,
                reason: this.form.reason,
                serviceCode: this.form.serviceCode,
                serviceMainInstanceCode: this.form.serviceMainInstanceCode,
                orderConsumeInfo: JSON.stringify(cloneOrderConsumeInfo)
            }).then(res => {
                if (res.status == 200) {
                    this.$message.success(res.msg)
                    this.dragDialogVisible = false
                    this.form = {
                        annexList: [], // 附件ID集合
                        buttonType: '', // 按钮类型
                        configId: '', // 配置ID
                        demandContent: '', // 需求
                        orgId: '', // 部门ID
                        empId: '', // 员工ID
                        personScoreJson: '', // 评分结果
                        reason: '', // 原因
                        serviceCode: '', // 服务单号
                        serviceId: '', // 服务商ID
                        serviceMainInstanceCode: '', // 实例号
                        orderConsumeInfo: '', // 消耗单品
                    }    
                    // location.reload()
                    this.$emit('reload', {})
                }
            }) 
        } else {
            getServicesBtn(this.form).then(res => {
                this.form.orderConsumeInfo = cloneOrderConsumeInfo
                if (res.status == 200) {
                    this.$message.success(res.msg)
                    this.dragDialogVisible = false
                    this.form = {
                        annexList: [], // 附件ID集合
                        buttonType: '', // 按钮类型
                        configId: '', // 配置ID
                        demandContent: '', // 需求
                        orgId: '', // 部门ID
                        empId: '', // 员工ID
                        personScoreJson: '', // 评分结果
                        reason: '', // 原因
                        serviceCode: '', // 服务单号
                        serviceId: '', // 服务商ID
                        serviceMainInstanceCode: '', // 实例号
                        orderConsumeInfo: '', // 消耗单品
                    }    
                    // location.reload()
                    this.$emit('reload', {})
                }
            }) 
        }
    },
    handleShowBtn (btn, idx) {
        // 直接跳转
        if (btn.openWindow) {
            this.openWindow(btn.value)
            return false
        }

        // if (this.curBtn.value == btn.value) {
        //     // 防止重复点击
        //     console.log('dbclick')
        //     return false
        // }
        this.curBtn = btn
        this.form.serviceCode = this.code
        this.form.buttonType = btn.value
        this.form.serviceId = this.$route.params.id
        this.dragDialogVisible = true
    },
    openWindow (value) {
        getServicesBtn({serviceCode: this.code, buttonType: value}).then(res => {
            window.open(res.data)
            // if (res.status == 200) {
            //     this.$message.success(res.msg)
            //     this.dragDialogVisible = false
            // }
        }) 
    },
    // 获得焦点取消拖动
    handleFocus () {
        this.move = false
    },
    handleBlur () {
        this.move = true
    },
    mousedown (event) {
        if (!this.move) {
            return false
        }
        this.selectElement = document.getElementById(this.id)
        var div1 = this.selectElement
        this.selectElement.style.cursor = 'move'
        this.isDowm = true
        var distanceX = event.clientX - this.selectElement.offsetLeft
        var distanceY = event.clientY - this.selectElement.offsetTop
        document.onmousemove = function (ev) {
            var oevent = ev || event
            div1.style.left = oevent.clientX - distanceX + 'px'
            div1.style.top = oevent.clientY - distanceY + 'px'
        }
        document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        div1.style.cursor = 'default'
        }
      
    },
    closeDrag () {
        this.curBtn = {}
        this.dragDialogVisible = false
    },
    // submit (btnType) {
    //     getServicesBtn({serviceCode: this.code, buttonType: btnType}).then(res => {
    //         console.log(res)
    //     }) 
    // },
    // openDialog (data) {
    //   if (data.fileName) {
    //     this.curPath = require('../dialog/' + data.fileName)
    //     this.curTitle = data.label
    //     this.curWidth = data.width ? data.width + 'px' : '800px'
    //     this.$store.commit("dialog/open", {code: this.code, buttonType: data.value});
    //   }
    // }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    // Object.keys(btns.fixList).forEach(key => {
    //     this.btn.push(btns.fixList[key])
    // })
    setTimeout(() => {
        let mergeBtn = {...btns.fixList, ...btns.dynamicList}
        Object.keys(mergeBtn).forEach(key => {
            this.btn.push(mergeBtn[key])
        })
        // let btnArr = []
        // if (this.btnList.length > 0) {
        //     this.btnList.map(v => {
        //         btnArr.push(v.buttonCode)
        //     })
        // }
        // let mergeBtn = {...btns.dynamicList}
        // Object.keys(mergeBtn).forEach(key => {
        //     btnArr.map(v => {
        //         if (v == key) {
        //             this.btn.push(mergeBtn[key])
        //         }
        //     })
        // })
    }, 1000);

    // console.log(this.btn, 999)
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
//@import url(); 引入公共css类
.btns_box{
    // width:100%;
    height:auto;
    /* position: fixed;
    left:0;
    top:0;
    background: #0f0; */
    .drag_box{
        width:500px;
        height:auto;
        max-height:500px;
        overflow-y:scroll;
        background:#fff;
        position:fixed;
        left:calc(50% - 250px);
        top:20vh;
        // margin-left:-250px;
        z-index:2003;
        min-width: 150px;
        border: 1px solid #ebeef5;
        padding: 12px;
        color: #606266;
        line-height: 1.4;
        text-align: justify;
        font-size: 14px;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        word-break: break-all;     
        border-radius: 6px;   
    }
}
</style>
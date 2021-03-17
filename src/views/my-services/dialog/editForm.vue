<!-- 质检打回 -->
<template>
<div >
    <el-form :model="form" size="small" ref="form" label-width="140px" :rules="rules">
        <el-form-item label="操作描述：" prop="reason" >
            <el-input
            type="textarea"
            :rows="4"
            maxlength="999"
            placeholder="请输入"
            v-model="form.reason">
            </el-input>
        </el-form-item>
        <el-form-item>
            <div style="margin-top:10px;">
                <ce-file :form="form" :data="{'code': 'annexList'}" size="small"></ce-file>
            </div>
        </el-form-item>
        <el-form-item>
            <!-- <div class="foot_box"> -->
                <el-button type="default" @click="cancel">取消</el-button>
                <el-button type="primary" @click="save">确定</el-button>
            <!-- </div> -->
        </el-form-item>
    </el-form>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
import ceFile from "../components/file"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    ceFile
},
props: ['code', 'buttonType'],
data() {
//这里存放数据
return {
    form: {
        reason: '',
        annexList: []
    },
    rules: {
        reason: [
            { required: true, message: '请输入操作描述', trigger: 'blur' },
        ],
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    cancel () {
        this.$store.commit('dialog/close')
    },
    save () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
                getServicesBtn({
                    serviceCode: this.code, 
                    buttonType: this.buttonType,
                    ...this.form
                }).then(res => {
                    // res.data = res.data
                    // this.data = res.data
                }) 
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    // getServicesBtn({serviceCode: this.code, buttonType: this.buttonType}).then(res => {
    //     // res.data = res.data
    //     this.tableData = res.data
    // }) 
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
    .foot_box{
        margin:30px auto;
        text-align:center;
    }
</style>
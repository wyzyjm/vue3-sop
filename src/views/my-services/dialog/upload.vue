<!-- 操作日志 -->
<template>
<div class='dialog_box'>
    <div class="upload_box">
        <el-upload
        class="upload-demo"
        drag
        action=""
        :on-exceed="handleExceed"
        :http-request="httpRequest"
        :on-success="(res,file) => fileSuccess(res)"
        :on-remove="(res,file) => closeFile(res, fileList)"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <!-- action="http://test-api-sop.ceboss.cn/common-service/frontApi/common-upload/upload" -->
    </div>
    <div class="foot_box">
        <el-button type="default" size="small" @click="cancel">取消</el-button>
        <el-button type="primary" size="small" @click="save">确定</el-button>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import upload from '@/api/1308-post-frontapi-common-upload-upload'
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['code', 'buttonType'],
data() {
//这里存放数据
return {
    fileList: [],
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
        console.log(this.fileList)
        let fileArr = []
        this.fileList.map(v => {
            fileArr.push(v.id)
        })
        getServicesBtn({serviceCode: this.code, buttonType: this.buttonType, annexList:fileArr}).then(res => {
            console.log(res)
            this.$store.commit('dialog/close')
        }) 
    },
    httpRequest (data) {
        console.log(data)
        const formData  = new FormData()
        formData.append('file', data.file)
        upload(formData).then(res => {
            data.onSuccess(res.data);
        })
    },
    handleExceed() {
      this.$message.warning(`最多只能上传 5 个文件`);
    },
    fileSuccess (uploadData) {
        this.fileList.push(uploadData)
        console.log(this.fileList, 999)
    },
    // 关闭文件
    closeFile(res, list) {
        list.map((v, idx) => {
            if (v.fileName == res.name) {
                list.splice(idx, 1)
            }
        })
        this.fileList = list
        console.log(this.fileList, 999)
    //   this.form[code].splice(index, 1);
    },
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
    .upload_box{
        width:360px;
        margin:0 auto;
    }
    .foot_box{
        // height:100px;
        margin:30px auto;
        text-align: center;
    }
</style>
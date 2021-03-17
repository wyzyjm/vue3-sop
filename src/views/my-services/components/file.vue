<!-- input -->
<template>
<div class="create_box">
    <el-upload
    action=""
    class="kf-order-upload"
    :accept="accept"
    :show-file-list="false"
    :limit="5"
    :on-exceed="handleExceed"
    :disabled="form[data.code].length >= 5"
    :file-list="form[data.code]"
    :on-success="(res,file) => fileSuccess(res, data.code)"
    :http-request="httpRequest">
    <el-button type="primary" :size="size ? size : ''">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传gif,jpg,jpeg,bmp,png,doc,docx,rar,zip,xls,xlsx,txt文件</div>
    </el-upload>
    <div class="upload-tag" v-if="form[data.code].length">
        <el-tag style="margin-right:10px;" v-for="(file,index) in form[data.code]" :key="index" effect="plain" closable @click="seeFile(file)" @close="closeFile(data.code, index)">{{ file.fileName }}</el-tag>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import UPLOAD from '@/api/1308-post-frontapi-common-upload-upload'
export default {
//import引入的组件需要注入到对象中才能使用
name: 'ce-file',
components: {},
props: ["form","data", "size"],
data() {
//这里存放数据
return {
    accept: ".jpg,.jpeg,.png,.gif,.bmp,.doc,.docx,.rar,.zip,.xls,.xlsx,txt,.JPG,.JPEG,.PBG,.GIF,.BMP,.DOC,.DOCX,.RAR,.ZIP,.XLS,.XLSX,.TXT",

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleExceed() {
      this.$message.warning(`最多只能上传 5 个文件`);
    },
    // 文件上传成功时
    fileSuccess (uploadData, code) {
      if (code) {
        this.form[code].push(uploadData)
      }
      this.imgLoading = false;
    },
    // 上传文件 - 接口
    httpRequest (upload) {
      this.imgLoading = true;
      const formData  = new FormData()
      formData.append('file', upload.file)
        UPLOAD(formData).then(res => {
            upload.onSuccess(res.data);
        })
    },

    // 关闭文件
    closeFile(code, index) {
      this.form[code].splice(index, 1);
    },

    // 查看文件
    seeFile(file) {
      if (file.type == '0') {
        // this.$store.commit("OPEN_DIALOG", {
        //   component: require("../dialog/previewImg").default,
        //   props: { url: file.url }
        // });
      }
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    // console.log(this.form,this.data, 123)
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
// @import '../style.scss';
</style>
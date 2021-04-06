<!-- 查看填写需求 -->
<template>
<div style="max-height:450px;overflow-y:scroll">
    <p class="el-popover__title">消耗单品/运营
        <span style="float:right">本次消耗/可消耗量</span>
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
    <p class="el-popover__title">方案上传</p>
    <el-table size="small" border :data="fileList" :show-header="false" >
        <el-table-column width="130px"
        label="上传按钮">
            <template scope="scope">
                <div style="width:104px;height:32px;position:relative">
                    <input type="file" 
                     v-if="buttonType != 'programme_see'" 
                     :accept="scope.row.accept" class="hide_input" @change="uploadFile($event, scope.row.type, scope.row.id)">
                    <el-button type="primary" size="small"
                    :disabled="buttonType == 'programme_see' ? true : false">上传{{scope.row.type}}文件</el-button>
                </div>
            </template>
        </el-table-column>
        <el-table-column
        prop="tips"
        label="上传格式"
        :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
        label="内容预览"
        :show-overflow-tooltip="true">
            <template scope="scope">
                <el-link :href="scope.row.file.fileUrl" target="_blank">{{scope.row.file.fileName ? scope.row.file.fileName : ''}}</el-link>
            </template>
        </el-table-column>
    </el-table>    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
import ceFile from "../components/file"
import upload from '@/api/1308-post-frontapi-common-upload-upload'
export default {
props: ['code', 'buttonType', 'form'],
//import引入的组件需要注入到对象中才能使用
components: {
    ceFile
},
data() {
//这里存放数据
return {
    isSee: false,
    fileList: [
        {id: 0, type: 'PDF', tips: '只能上传PDF格式文件', file: {
            fileUrl: '', fileName: ''
        }, accept: 'application/pdf'},
        {id: 1, type: 'PPT', tips: '只能上传ppt,pptx格式文件', file: {
            fileUrl: '', fileName: ''
        }, accept: ''}
    ]
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
    uploadFile (data, type, idx) {
        let file = data.target.files[0];
        console.log(file)
        if (type == 'PPT') {
            if (file.type != 'application/vnd.openxmlformats-officedocument.presentationml.presentation' && file.type != 'application/vnd.ms-powerpoint') {
                this.$message.error("只支持PPT格式文件");
                return;
            }
        }        
        // let maxSize = 5000 * 1024;
        // if (file.size > maxSize) {
        //     this.$message.error("上传文件最大为5MB");
        //     return;
        // }
        let formData = new FormData();
        formData.append("file", file);
        upload(formData).then(res => {
            console.log(res)
            if (res.status == 200) {
                this.$set(this.fileList[idx], 'file', res.data)
                this.form.annexList[idx] = res.data.id
                console.log(this.form.annexList, 'test arr')
            }
        }).catch(err => {
            console.log(err, '上传失败')
            this.$message.error('上传失败')
        })
    },
    checkNum(row, idx) {
        if (!row.consumeNum || row.consumeNum == '') {
            row.consumeNum = 0
        }
        if (row.consumeNum > row.totalNum) {
            this.$message.warning('消耗数量不能大于总量')
            this.form.instanceAccount[idx].consumeNum = row.totalNum
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
    if (this.buttonType == 'programme_see') {
        this.isSee = true
    }
    // // 单品消耗
    getServicesBtn({serviceCode: this.code, buttonType: 'programme_see'}).then(res => {
        // Object.keys(res.data).forEach(key => {
        //         this.form[key] = res.data[key]
        //         if (key == 'annexList' && !res.data[key]) {
        //             this.form[key] = []
        //         } 
        // })
        this.form.orderConsumeInfo = res.data.instanceAccount
        if (res.data.pdf) {
            this.fileList[0].file.fileUrl = res.data.pdf.annexShowUrl
            this.fileList[0].file.fileName = res.data.pdf.annexName
            this.form.annexList[0] = res.data.pdf.annexId
        } 
        if (res.data.ppt) {
            this.fileList[1].file.fileUrl = res.data.ppt.annexShowUrl
            this.fileList[1].file.fileName = res.data.ppt.annexName
            this.form.annexList[1] = res.data.ppt.annexId
        } 
        // for(let i = 0; i < 7; i++) {
        //     this.form.orderConsumeInfo.push(this.form.orderConsumeInfo[0])
        // }
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
::-webkit-scrollbar {
    display:none;
}
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
    .hide_input{
        width:104px;
        height:32px;
        padding:0;
        opacity:0;
        position:absolute;
        left:0;top:0;
        cursor: pointer;
    }
</style>
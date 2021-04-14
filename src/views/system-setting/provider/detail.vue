<!-- 服务商详情 -->
<template>
<div class='box'>
    <div v-if="$route.params.category == 2">
    <div class='module-box' v-for="(item, idx) in form_2" :key="idx">
        <div class="title-box">{{item.title}}</div>
        <p class="clear"></p>
        <el-row :gutter="20" class="row-box">
            <el-col :span="8" v-for="(value, key, index) in item.keys" :key="index">
                <div class="item-col">
                    <div class="col-title">{{value}}：</div>
                    <div class="col-txt" v-if="key == 'category'">企业</div>
                    <div class="col-txt" v-else-if="key == 'basicStatus'">{{result[key] | filterStatus}}</div>
                    <div class="col-txt" v-else-if="key == 'legalCredentialsType'">{{result[key] | filterType}}</div>
                    <div class="col-txt" v-else-if="key == 'basicType'">{{result[key] == 1 ? '自营' : '非自营'}}</div>
                    <div class="col-txt" v-else-if="key == 'registeredCapital'">{{result[key]}}万</div>
                    <!-- <div class="col-txt" v-else-if="key == 'foundTime'">{{result[key].replace('T', ' ').replace('0Z', '')}}</div> -->
                    <div class="col-txt" v-else-if="key == 'businessLicenseUrl' || key == 'registrationUrl'">
                        <div v-if="result[key]">
                            <i class="iconfont iconcredentials_icon" style="font-size:40px;color:#666"></i>
                            <i class="iconfont iconfangdajing" style="font-size:15px;color:#18B398;cursor:pointer" @click="showView([result[key]])"></i>
                        </div>
                        <div v-else>
                            ------
                        </div>
                    </div>
                    <div class="col-txt" v-else-if="key == 'idCard'">
                        <div v-if="result['idcardFrontUrl'] && result['idcardBackUrl']">
                            <i class="iconfont iconcredentials_icon" style="font-size:40px;color:#666"></i>
                            <i class="iconfont iconfangdajing" style="font-size:15px;color:#18B398;cursor:pointer" @click="showView([result['idcardFrontUrl'], result['idcardBackUrl']])"></i>
                        </div>
                        <div v-else>
                            ------
                        </div>
                    </div>
                    <div class="col-txt" v-else>{{result[key] || '------'}}</div>
                </div>
            </el-col>        
        </el-row>
    </div>
    </div>
    <!--个人-->
    <div v-else>
        <div class='module-box' v-for="(item, idx) in form_1" :key="idx">
            <div class="title-box">{{item.title}}</div>
            <p class="clear"></p>
            <el-row :gutter="20" class="row-box">
            <el-col :span="8" v-for="(value, key, index) in item.keys" :key="index">
                <div class="item-col">
                    <div class="col-title">{{value}}：</div>
                    <div class="col-txt" v-if="key == 'category'">个人</div>
                    <div class="col-txt" v-else-if="key == 'basicStatus'">{{result[key] | filterStatus}}</div>
                    <div class="col-txt" v-else-if="key == 'legalCredentialsType'">{{result[key] | filterType}}</div>
                    <div class="col-txt" v-else-if="key == 'basicType'">{{result[key] == 1 ? '自营' : '非自营'}}</div>
                    <div class="col-txt" v-else-if="key == 'registeredCapital'">{{result[key]}}万</div>
                    <!-- <div class="col-txt" v-else-if="key == 'foundTime'">{{result[key].replace('T', ' ').replace('0Z', '')}}</div> -->
                    <div class="col-txt" v-else-if="key == 'businessLicenseUrl' || key == 'registrationUrl'">
                        <div v-if="result[key]">
                            <i class="iconfont iconcredentials_icon" style="font-size:40px;color:#666"></i>
                            <i class="iconfont iconfangdajing" style="font-size:15px;color:#18B398;cursor:pointer" @click="showView([result[key]])"></i>
                        </div>
                        <div v-else>
                            ------
                        </div>
                    </div>
                    <div class="col-txt" v-else-if="key == 'idCard'">
                        <div v-if="result['idcardFrontUrl'] && result['idcardBackUrl']">
                            <i class="iconfont iconcredentials_icon" style="font-size:40px;color:#666"></i>
                            <i class="iconfont iconfangdajing" style="font-size:15px;color:#18B398;cursor:pointer" @click="showView([result['idcardFrontUrl'], result['idcardBackUrl']])"></i>
                        </div>
                        <div v-else>
                            ------
                        </div>
                    </div>
                    <div class="col-txt" v-else>{{result[key] || '------'}}</div>
                </div>
            </el-col>           
            </el-row>
        </div>
    </div>
    <div class="footer-box">
        <el-button @click="cancel">关闭</el-button>
    </div> 
    <div style="width:0;height:0;z-index:9; position:fixed;left:10000px;top:10000px;">
        <el-image ref="showImg" :src="curPic" :preview-src-list="curPicArr"></el-image>
    </div>    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import getProviderDetail from '@/api/1298-get-frontapi-service-provider-detail-{id}'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    curPic: '',
    curPicArr: [],
    // 服务商类型 1个人 2企业
    form_2: [
        {
            title: '创建信息', keys: {creatorName: '创建人', createTimeStr: '创建时间'}
        },  
        {
            title: '基本信息', keys: {category: '服务商类型', basicType: '合作类型', basicStatus: '服务商状态', basicName: '公司全称',
            simpleName: '公司简称', basicDescribe: '公司简介', majorBusiness: '主营业务', businessDescribe: '业务介绍',
            address: '公司地址', companySize: '公司规模', companyUrl: '公司网站'},
            showPower: 2
        },    
        {
            title: '注册信息', keys: {foundTime: '成立时间', registeredCapital: '注册资本', ratepayingNumber: '纳税人识别号', businessLicenseUrl: '营业执照上传',
            businessLicenceNumber: '营业执照注册号', registrationUrl: '税务登记证上传', registrationNumber: '税务登记证号'}
        },   
        {
            title: '法人信息', keys: {legalPerson: '法人姓名', legalCredentialsType: '证件类型',
            legalCredentialsNumber: '证件号码', idCard: '证件附件'}
        },
        {
            title: '联系人信息', keys: {contactUsername: '联系人姓名', contactEmail: '联系人邮箱',
            contactPhone: '手机号'}
        },
        
    ],
    form_1: [
        {
            title: '创建信息', keys: {creatorName: '创建人', createTimeStr: '创建时间'}
        }, 
        {
            title: '基本信息', keys: {category: '服务商类型', basicType: '合作类型', basicStatus: '服务商状态', 
            contactUsername: '联系人姓名', contactEmail: '联系人邮箱',
            contactPhone: '手机号', legalCredentialsType: '证件类型',
            legalCredentialsNumber: '证件号码', idCard: '证件附件'},
        }        
    ],
    result: {}
};
},
filters: {
    filterStatus (val) {
        if (val == 0) {
            return '启用'
        } else if (val == 1) {
            return '暂停'
        } else if (val == 2) {
            return '清退'
        } else if (val == 3) {
            return '关闭'
        }
    },
    filterType (val) {
        if (val == 1) {
            return '身份证'
        } else if (val == 2) {
            return '临时身份证'
        } else if (val == 3) {
            return '护照'
        } else if (val == 4) {
            return '港澳台身份证'
        } else if (val == 5) {
            return '外国护照'
        } else if (val == 6) {
            return '户口卡'
        } else if (val == 7) {
            return '军人身份证'
        } else if (val == 8) {
            return '警察身份证'
        }
    }
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    cancel () {
        this.$router.push({
            path: '/system-setting/provider/list'
        })
    },
    showView (arr) {
        this.curPic = arr[0]
        this.curPicArr = arr
        this.$refs['showImg'].showViewer = true
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log(this.$route.params.pid)
    getProviderDetail({id: this.$route.params.pid}).then(res => {
        // console.log(res)
        // this.form.map(v => {
        //     console.log(v.keys)
        // })
        // Object.keys(res.data).forEach(key => {
        //     console.log(res.data[key])
        // })
        this.result = res.data
    }).catch(err => {
        console.log(err, '获取服务商详情失败')
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
@import url("./style.scss");
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
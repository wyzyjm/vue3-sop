<!-- 个人 -->
<template>
<div class="box">
    <!--个人信息-->
    <div class='module-box'>
        <div class="title-box">个人信息</div>
        <el-form :model="form" ref="form" label-width="140px" class="form-box">
            <el-form-item label="联系人姓名：" prop="contactUsername" class="is-required">
                <el-input class="w340" v-model="form.contactUsername" placeholder="请输入联系人姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别：" prop="contactSex" class="is-required">
                <el-radio-group v-model="form.contactSex">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="0">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号：" prop="contactPhone" class="is-required">
                <el-input class="w340" v-model="form.contactPhone" placeholder="请输入联系人手机号"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="contactEmail" class="is-required">
                <el-input class="w340" v-model="form.contactEmail" placeholder="请输入联系人邮箱"></el-input>
            </el-form-item>
            <el-form-item label="电话：" prop="contactEmail">
                <el-input class="w340" v-model="form.contactEmail" placeholder="请输入联系人邮箱"></el-input>
            </el-form-item>
            <el-form-item label="个人证件类型：" prop="legalCredentialsType">
                <el-select
                    v-model="form.legalCredentialsType"
                    placeholder="请选择个人证件类型"
                    class="w340"
                >
                    <el-option label="身份证" :value="1"></el-option>
                    <el-option label="临时身份证" :value="2"></el-option>
                    <el-option label="护照" :value="3"></el-option>
                    <el-option label="港澳台身份证" :value="4"></el-option>
                    <el-option label="外国护照" :value="5"></el-option>
                    <el-option label="户口卡" :value="6"></el-option>
                    <el-option label="军人身份证" :value="7"></el-option>
                    <el-option label="警察身份证" :value="8"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="个人证件号码：" prop="legalCredentialsNumber" class="is-required">
                <el-input class="w340" v-model="form.legalCredentialsNumber" placeholder="请输入个人证件号码"></el-input>
            </el-form-item>
        </el-form>
    </div>   
    <div class="footer-box">
        <el-button type="primary" >保存</el-button>
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
        basicName: '', // 公司名称
        simpleName: '', // 公司简称
        basicDescribe: '', // 公司简介
        majorBusiness: '', // 主营业务
        businessDescribe: '', // 业务介绍
        address: '', // 详细地址
        companySize: '5人 ~ 50人', // 公司规模
        companyUrl: '', // 官网地址
        provinceId: '', // 省份id
        provinceName: '', // 省份名称
        cityId: '', // 城市id
        cityName: '', // 城市名称
        distinctId: '', // 地区id
        distinctName: '', // 地区名称
        foundTime: '', // 成立时间
        registeredCapital: '', // 注册资本
        ratepayingNumber: '', // 纳税人识别号
        businessLicenseUrl: '', // 营业执照url
        businessLicenceNumber: '', // 营业执照注册号
        registrationUrl: '', // 税务登记证url
        registrationNumber: '', // 税务登记证编号
        idcardFrontUrl: '', // 证件正面url
        idcardBackUrl: '', // 证件反面url
        contactUsername: '', // 联系人姓名
        contactSex: 1, // 联系人性别，1：男，0：女
        contactPhone: '', // 联系人手机号
        contactEmail: '', // 联系人邮箱
        legalPerson: '', // 法人
        legalCredentialsType: '', // 法人证件类型 1:身份证,2:临时身份证,3:护照,4:港澳台身份证/5:外国护照6:户口卡7:军人身份证8:警察身份证
        legalCredentialsNumber: '', // 法人证件编码
        category: '', // 1:个人，2：企业
        basicType: 1, // 1、自营，2、非自营
        contactTel: '', // 联系人电话
        serviceStoptimeStr: '', // 服务到期时间
    }
}
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
@import url("../style.scss");
    .module-box{
        width:100%;
        // height:691px;
        margin-bottom:20px;
        background: #fff;
        border: 1px solid #EBEBEB;
        border-radius: 6px;
    }
    .footer-box{
        text-align: center;
        margin:40px auto;
        clear: both;

    }
</style>>
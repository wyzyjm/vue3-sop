<!-- 企业 -->
<template>
<div class="box">
    <!--服务商基本信息-->
    <div class='module-box'>
        <div class="title-box">服务商基本信息</div>
        <el-form :model="form" ref="form" label-width="140px" class="form-box">
            <el-form-item label="公司全称：" prop="basicName" class="is-required">
                <el-input class="w340" v-model="form.basicName" placeholder="请输入公司全称"></el-input>
            </el-form-item>
            <el-form-item label="合作类型：" prop="basicType" class="is-required">
                <el-radio-group v-model="form.basicType">
                    <el-radio :label="1">自营</el-radio>
                    <el-radio :label="2">非自营</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="公司简称：" prop="simpleName" class="is-required">
                <el-input class="w340" v-model="form.simpleName" placeholder="请输入公司简称"></el-input>
            </el-form-item>
            <el-form-item label="公司简介：" prop="basicDescribe">
                <el-input class="w700" v-model="form.basicDescribe" placeholder="请输入公司简介"
                type="textarea" rows="4"></el-input>
            </el-form-item>
            <el-form-item label="主营业务：" prop="majorBusiness">
                <el-select
                    v-model="form.majorBusiness"
                    placeholder="请选择主营业务"
                    class="w340"
                >
                    <el-option label="工商财税" value="工商财税"></el-option>
                    <el-option label="知识产权" value="知识产权"></el-option>
                    <el-option label="营销推广" value="营销推广"></el-option>
                    <el-option label="电商服务" value="电商服务"></el-option>
                    <el-option label="软件服务" value="软件服务"></el-option>
                    <el-option label="视觉设计" value="视觉设计"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="业务介绍：" prop="businessDescribe">
                <el-input class="w700" v-model="form.businessDescribe" placeholder="请输入业务介绍"
                type="textarea" rows="4"></el-input>
            </el-form-item>
            <el-form-item label="公司地址：" class="is-required">
            <el-cascader
                :options="[]"
                :props="{ expandTrigger: 'hover' }"
                @change="handleCascader"
                clearable
                class="w340"
                ref="cascader"
            ></el-cascader>
            <el-input
                v-model="form.address"
                class="w340 ml20"
                @change="valited('address')"
                placeholder="请填写企业的详细通讯地址"
            ></el-input>
            </el-form-item>
            <el-form-item label="公司规模：" prop="companySize" class="is-required">
                <el-radio-group v-model="form.companySize">
                    <el-radio label="5人 ~ 50人">5人 ~ 50人</el-radio>
                    <el-radio label="51人 ~ 200人">51人 ~ 200人</el-radio>
                    <el-radio label="201人 ~ 500人">201人 ~ 500人</el-radio>
                    <el-radio label="500人以上">500人以上</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="公司网址：">
            <el-input v-model="form.companyUrl" class="w340" placeholder="请输入URL地址"></el-input>
            </el-form-item>
        </el-form>
    </div>

    <!--服务商注册信息-->
    <div class='module-box'>
        <div class="title-box">服务商注册信息</div>
        <el-form :model="form" ref="form" label-width="140px" class="form-box">
            <el-form-item label="成立时间：" class="is-required">
            <el-date-picker
                class="w340"
                v-model="form.foundTime"
                type="date"
                placeholder="请选择成立时间"
            ></el-date-picker>
            </el-form-item>
        <el-form-item label="注册资本：" class="is-required">
          <el-input
            v-model="form.registeredCapital"
            onkeyup="this.value=this.value.replace(/\D/g,'')"
            class="w300"
            placeholder
          ></el-input>
          <span class="ml14">万元</span>
        </el-form-item>
        <el-form-item label="纳税人识别号：">
          <el-input
            v-model="form.ratepayingNumber"
            onkeyup="this.value=this.value.replace(/[^\w]/g,'')"
            class="w340"
            placeholder="请输入纳税人识别号"
          ></el-input>
        </el-form-item>       
        <el-form-item label="税务登记证号：">
          <el-input
            v-model="form.registrationNumber"
            onkeyup="this.value=this.value.replace(/[^\w]/g,'')"
            class="w340"
            placeholder="请输入税务登记证号"
          ></el-input>
        </el-form-item>
        </el-form>
    </div>    

    <!--联系人信息-->
    <div class='module-box'>
        <div class="title-box">联系人信息</div>
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
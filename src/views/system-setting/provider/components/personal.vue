<!-- 个人 -->
<template>
<div class="box">
    <!--个人信息-->
    <div class='module-box'>
        <div class="title-box">个人信息</div>
        <el-form :model="form" ref="form" :rules="formRules" label-width="140px" class="form-box">
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
            <el-form-item label="电话：" prop="contactTel">
                <el-input class="w340" v-model="form.contactTel" placeholder="请输入联系人电话"></el-input>
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
            <el-form-item label="个人证件上传：" class="is-required">
                <upload type="idcard" :param="['idcardFrontUrl', 'idcardBackUrl']" :form="form"></upload>
            </el-form-item>  
            <el-form-item label="个人证件号码：" prop="legalCredentialsNumber" class="is-required">
                <el-input class="w340" v-model="form.legalCredentialsNumber" placeholder="请输入个人证件号码"></el-input>
            </el-form-item>
        </el-form>
    </div>   
    <div class="footer-box">
        <el-button type="primary" @click="handleSave()">保存</el-button>
        <el-button class="ml20" @click="cancel">取消</el-button>
    </div> 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { contactPhoneVaild, contactEmailVaild } from "../utils/form-vaild";
import Upload from "./upload";
import addProvider from '@/api/1296-post-frontapi-service-provider-add'
import editProvider from '@/api/1304-post-frontapi-service-provider-update'
import getProviderDetail from '@/api/1298-get-frontapi-service-provider-detail-{id}'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Upload
},
data() {
//这里存放数据
const idcardVaild = (rule, value, callback) => {
    console.log(this.form.legalCredentialsType)
    if (!value) {
        callback(new Error('请输入证件号码'))
        return false 
    }

    if (this.form.legalCredentialsType == 1) {
        if (value.length != 18) {
            callback(new Error('请输入正确的身份证号'))
            return false  
        }
    }
    callback()
}
return {
    form: {
        // basicName: '', // 公司名称
        // simpleName: '', // 公司简称
        // basicDescribe: '', // 公司简介
        // majorBusiness: '', // 主营业务
        // businessDescribe: '', // 业务介绍
        // address: '', // 详细地址
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
        category: 1, // 1:个人，2：企业
        basicType: 1, // 1、自营，2、非自营
        contactTel: '', // 联系人电话
        serviceStoptimeStr: '', // 服务到期时间
    },
    // 表单校验规则
    formRules: {
        legalPerson: [
            { required: true, message: '请输入法人姓名', trigger: 'blur' },
            { min: 2, max: 100, message: '长度在 2 到 50 个字符', trigger: 'blur' }
        ],
        contactUsername: [
            { required: true, message: '请输入联系人姓名', trigger: 'blur' },
            { min: 2, max: 100, message: '长度在 2 到 50 个字符', trigger: 'blur' }
        ],
        contactPhone: [
            { validator: contactPhoneVaild, trigger: 'blur' }
        ],
        contactEmail: [
            { validator: contactEmailVaild, trigger: 'blur' }
        ],
        legalCredentialsType: [
            { required: true, message: '请选择证件类型', trigger: 'change' }
        ], 
        legalCredentialsNumber: [
            { validator: idcardVaild, trigger: 'blur' }
            // { required: true, message: '请输入证件号码', trigger: 'blur' },
            // { min: 18, max: 18, message: '请输入正确的证件号码', trigger: 'blur' }
        ]   
    },    
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    cancel () {
        this.$confirm('点击取消，信息将不做保存, 是否确定取消?', '取消', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$router.push({
                path: '/system-setting/provider/list'
            })
        }).catch(() => {

        })
    },
    handleSave () {
        if (!this.form.idcardFrontUrl || !this.form.idcardBackUrl) {
            this.$message.error('请上传个人证件')
            return false
        }
        this.$refs['form'].validate((valid) => {
            if (valid) {
                if (this.$route.params.pid) { 
                    editProvider(this.form).then((res) => {
                        console.log(res)
                        if (res.status == 200) {
                            this.$message.success('服务商信息修改成功！')
                            this.$router.push({
                                path: '/system-setting/provider/list'
                            })
                        } else {
                            this.$message.error(res.msg)
                        }
                    })
                } else {
                    addProvider(this.form).then((res) => {
                        console.log(res)
                        if (res.status == 200) {
                            this.$message.success('服务商信息保存成功！')
                            this.$router.push({
                                path: '/system-setting/provider/list'
                            })
                        } else {
                            this.$message.error(res.msg)
                        }
                    })
                }
            } else {
                console.log('error form submit')
            }
        });
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    if (this.$route.params.pid) {
        getProviderDetail({id: this.$route.params.pid}).then(res => {
            this.form = res.data
            this.form.contactSex = res.data ? 1 : 0 
        }).catch(err => {
            console.log(err, '获取详情失败')
        })
    }
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
</style>>
<!-- 企业 -->
<template>
<div class="box">
    <!--服务商基本信息-->
    <div class='module-box'>
        <div class="title-box">服务商基本信息</div>
        <el-form :model="form" ref="form1" :rules="formRules" label-width="140px" class="form-box">
            <el-form-item label="公司全称：" prop="basicName" class="is-required">
                <el-input class="w340" v-model="form.basicName" placeholder="请输入公司全称"
                minlength="2" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="合作类型：" prop="basicType" class="is-required">
                <el-radio-group v-model="form.basicType">
                    <el-radio :label="1">自营</el-radio>
                    <el-radio :label="2">非自营</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="公司简称：" prop="simpleName">
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
                    multiple
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
                <el-col :span="11">
                    <el-form-item prop="map">
                        <el-cascader
                            :options="citys.map"
                            :props="{ expandTrigger: 'hover' }"
                            v-model="citys.val"
                            @change="handleCascader"
                            clearable
                            class="w340"
                            ref="cascader"
                        ></el-cascader>
                    </el-form-item>
                </el-col>
                <el-col :span=".5">
                    <p style="width:20px;margin-left:20px;"></p>
                </el-col>
                <el-col :span="11">
                    <el-form-item prop="address">
                        <el-input
                            v-model="form.address"
                            class="w340"
                            placeholder="请填写企业的详细通讯地址"
                        ></el-input>
                    </el-form-item>
                </el-col>
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
        <el-form :model="form" ref="form2" :rules="formRules" label-width="140px" class="form-box">
            <el-form-item label="成立时间：" class="is-required" prop="foundTime">
            <el-date-picker
                class="w340"
                v-model="form.foundTime"
                type="date"
                placeholder="请选择成立时间"
            ></el-date-picker>
            </el-form-item>
        <el-form-item label="注册资本：" class="is-required" prop="registeredCapital">
          <el-input
            v-model="form.registeredCapital"
            class="w300"
            placeholder
          ></el-input>
          <span class="ml14">万元</span>
        </el-form-item>
        <el-form-item label="纳税人识别号：" prop="ratepayingNumber">
          <el-input
            v-model="form.ratepayingNumber"
            maxlength="100"
            onkeyup="this.value=this.value.replace(/[^\w]/g,'')"
            class="w340"
            placeholder="请输入纳税人识别号"
          ></el-input>
        </el-form-item>      
        <el-form-item label="营业执照上传：" prop="businessLicenseUrl" class="is-required">
            <upload type="businessLicenseUrl" param="businessLicenseUrl" :form="form"></upload>
        </el-form-item>  
        <el-form-item label="营业执照注册号：" prop="businessLicenceNumber" class="is-required">
          <el-input
            v-model="form.businessLicenceNumber"
            onkeyup="this.value=this.value.replace(/[^\w]/g,'')"
            maxlength="100"
            class="w340"
            placeholder="请输入营业执照注册号"
          ></el-input>
        </el-form-item>
        <el-form-item label="税务登记证上传：" prop="registrationUrl">
            <upload type="registrationUrl" param="registrationUrl" :form="form"></upload>
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

    <!--法人信息-->
    <div class='module-box'>
        <div class="title-box">法人信息</div>
        <el-form :model="form" ref="form3" :rules="formRules" label-width="140px" class="form-box" @submit.native.prevent>
            <el-form-item label="法人姓名：" prop="legalPerson" class="is-required">
                <el-input class="w340" v-model="form.legalPerson" placeholder="请输入法人姓名"
                maxlength="50"
                minlength="2"></el-input>
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
            <el-form-item label="法人证件上传：" prop="legalCredentialsNumber">
                <upload type="idcard" :param="['idcardFrontUrl', 'idcardBackUrl']" :form="form"></upload>
            </el-form-item>  
            <el-form-item label="法人证件号码：" prop="legalCredentialsNumber" class="is-required">
                <el-input class="w340" v-model="form.legalCredentialsNumber" placeholder="请输入个人证件号码"></el-input>
            </el-form-item>
        </el-form>
    </div>   

    <!--联系人信息-->
    <div class='module-box'>
        <div class="title-box">联系人信息</div>
        <el-form :model="form" ref="form4" :rules="formRules" label-width="140px" class="form-box">
            <el-form-item label="联系人姓名：" prop="contactUsername" class="is-required">
                <el-input class="w340" v-model="form.contactUsername" placeholder="请输入联系人姓名"
                maxlength="50"
                minlength="2"></el-input>
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
        <el-button type="primary" @click="handleSave()">保存</el-button>
        <el-button class="ml20" @click="cancel">取消</el-button>
    </div> 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { registeredCapitalVaild, contactPhoneVaild, contactEmailVaild } from "../utils/form-vaild";
import Upload from "./upload";
import addProvider from '@/api/1296-post-frontapi-service-provider-add'
import editProvider from '@/api/1304-post-frontapi-service-provider-update'
import getProviderDetail from '@/api/1298-get-frontapi-service-provider-{id}'
import checkProviderName from '@/api/1300-get-frontapi-service-provider-check-name-useful'
import city from "@/util/citys";
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Upload
},
data() {
const basicNameVaild = (rule, value, callback) => {
    if (!value) {
        callback(new Error('请输入公司全称'))
        return false 
    }
    if (value.length < 2 || value.length > 100) {
        callback(new Error('长度在 2 到 100 个字符'))
        return false
    }
    checkProviderName({
        name: value,
        id: this.$route.params.pid || '',
    }).then(res => {
        // 已存在服务商名称 不可用
        if (!res.data) {
            callback(new Error('公司名称已存在'))
            return false
        } else {
            callback()
        }
    }).catch(err => {
        console.log(err, '检查公司名称是否可用error')
    })
};    
//这里存放数据
return {
    // 省市区集合
    citys: {
        map: [],
        val: ""
    },
    form: {
        map: '',
        category: 2, // '公司'
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
        basicType: 1, // 1、自营，2、非自营
        contactTel: '', // 联系人电话
        serviceStoptimeStr: '', // 服务到期时间
    },
    // 表单校验规则
    formRules: {
        basicName: [
            { validator: basicNameVaild, trigger: 'blur' }
            // { required: true, message: '请输入公司全称', trigger: 'blur' },
            // { min: 2, max: 100, message: '长度在 2 到 100 个字符', trigger: 'blur' }
        ],
        registeredCapital: [
            // { required: true, message: '请输入公司全称', trigger: 'blur' },
            { validator: registeredCapitalVaild, trigger: 'blur' }
        ],
        foundTime: [
            { required: true, message: '请选择成立时间', trigger: 'change' }
        ],
        businessLicenceNumber: [
            { required: true, message: '请输入营业执照注册号', trigger: 'blur' },
        ],
        businessLicenseUrl: [
            { required: true, message: '请上传营业执照', trigger: 'upload' },
        ],
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
        address: [
            { required: true, message: '请填写企业的详细通讯地址', trigger: 'blur' },
        ],
        map: [
            { required: true, message: '请选择省市区', trigger: 'change' }
        ],        
    },
    formArr: [1,2,3,4]
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

    // 级联选择省市区
    handleCascader(code) {
      let checked = this.$refs["cascader"].getCheckedNodes();
      this.form.map = 'map val'
      this.form.provinceName = checked[0].pathLabels[0];
      this.form.cityName = checked[0].pathLabels[1];
      this.form.distinctName = checked[0].pathLabels[2];
      this.form.provinceId = code[0];
      this.form.cityId = code[1];
      this.form.distinctId = code[2];
    },
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
        if (!this.form.businessLicenseUrl) {
            this.$message.error('请上传营业执照')
            return false
        }
        console.log(this.form)
        let flag = true
        this.formArr.map(v => {
            this.$refs['form' + v].validate((valid) => {
                if (!valid) {
                    flag = valid
                }
            });
        })
        if (this.form.majorBusiness) {
            
            this.form.majorBusiness = this.form.majorBusiness.join(',')
            console.log(this.form.majorBusiness)
        }
        if (flag) {
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
                }).catch(err => {
                        console.log(err, '编辑失败')
                        this.form.majorBusiness = this.form.majorBusiness.split(',')
                        console.log(this.form.majorBusiness, 999)
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
                }).catch(err => {
                        console.log(err, '编辑失败')
                        this.form.majorBusiness = this.form.majorBusiness.split(',')
                        console.log(this.form.majorBusiness, 999)
                })
            }
        } else {
            console.log('error')
        }
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.citys.map = city.regions;
    // 编辑
    if (this.$route.params.pid) {
        getProviderDetail({id: this.$route.params.pid}).then(res => {
            this.form = res.data
            this.form.map = 'map val'
            this.form.contactSex = res.data.contactSex ? 1 : 0
            if (res.data.majorBusiness) {
                
                this.form.majorBusiness = res.data.majorBusiness.split(',')
                console.log(this.form.majorBusiness)
            }
            this.citys.val = [
                this.form.provinceId.toString(),
                this.form.cityId.toString(),
                this.form.distinctId.toString()
            ];
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
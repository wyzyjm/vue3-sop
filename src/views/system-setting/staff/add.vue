<!-- 添加编辑员工 -->
<template>
<div class='staff-box'>
    <div class='module-box'>
        <div class="title-box">新增员工信息</div>
        <el-form :model="form" ref="form" :rules="formRules" label-width="140px" class="form-box">
            <el-form-item label="所属服务商：" prop="sourceId" class="is-required">
                <el-select
                    v-model="form.sourceId"
                    placeholder="请选择所属服务商"
                    class="w340"
                >
                    <el-option label="测试" value="测试"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所属组织：" prop="orgId" class="is-required">
                <el-select
                    v-model="form.orgId"
                    placeholder="请选择所属组织"
                    class="w340"
                >
                    <el-option label="测试" value="测试"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="员工姓名：" prop="employeeName" class="is-required">
                <el-input class="w340" v-model="form.employeeName" placeholder="请输入员工姓名"
                minlength="2" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="电话：" prop="officePhone">
                <el-input class="w340" v-model="form.officePhone" placeholder="请输入员工电话"
                ></el-input>
            </el-form-item>
            <el-form-item label="手机：" prop="mobile" class="is-required">
                <el-input class="w340" v-model="form.officePhone" placeholder="请输入员工手机"
                ></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="workMail" class="is-required">
                <el-input class="w340" v-model="form.workMail" placeholder="请输入员工邮箱"
                ></el-input>
            </el-form-item>
            <el-form-item label="岗位：" prop="position">
                <el-select
                    v-model="form.position"
                    placeholder="请选择所属岗位"
                    class="w340"
                >
                    <el-option label="测试" value="测试"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="初始化密码：" prop="password">
                <el-input class="w340" v-model="form.password" placeholder="请输入初始化密码"
                ></el-input>
            </el-form-item>
            <el-form-item label="授权角色：" prop="position">
                <el-select
                    v-model="form.position"
                    filterable
                    multiple
                    placeholder="请选择授权角色"
                    class="w340"
                >
                    <el-option label="测试" value="测试"></el-option>
                    <el-option label="测试1" value="测试2"></el-option>
                    <el-option label="测试2" value="测试1"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
    <div class="footer-box">
        <el-button type="primary" @click="handleSave()">保存</el-button>
        <el-button class="ml20">取消</el-button>
    </div>     
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { contactPhoneVaild, contactEmailVaild } from "../provider/utils/form-vaild";
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    form: {
        employeeName: '', // 员工姓名
        orgId: '', // 机构id
        workMail: '', // 邮箱
        officePhone: '', // 办公电话
        mobile: '', // 手机
        position: '', // 岗位
        sourceId: '', // 服务商id
        password: '', // 密码
        roleMap: {}, // key为角色id，value为角色名称
    },
    formRules: {
        employeeName: [
            { required: true, message: '请输入员工姓名', trigger: 'blur' },
            { min: 2, max: 100, message: '长度在 2 到 50 个字符', trigger: 'blur' }
        ],
        orgId: [
            { required: true, message: '请选择所属机构', trigger: 'change' }
        ],
        sourceId: [
            { required: true, message: '请选择所属服务商', trigger: 'change' }
        ],
        mobile: [
            { validator: contactPhoneVaild, trigger: 'blur' }
        ],
        workMail: [
            { validator: contactEmailVaild, trigger: 'blur' }
        ]
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleSave () {
        this.$refs['form'].validate((valid) => {
            if (valid) {
                console.log('success')
            } else {
                console.log('error')
            }
        });
    }
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
@import url("../provider/style.scss");
</style>
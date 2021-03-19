<!-- 添加编辑员工 -->
<template>
<div class='staff-box'>
    <div class='module-box'>
        <div class="title-box">{{sid ? '编辑': '新增'}}员工信息</div>
        <el-form :model="form" ref="form" :rules="formRules" label-width="140px" class="form-box">
            <el-form-item label="所属服务商：" prop="sourceId" class="is-required">
                <el-select
                    v-model="form.sourceId"
                    filterable
                    placeholder="请选择所属服务商"
                    class="w340"
                    @change="changeOrg"
                >
                    <el-option :label="item.basicName" :value="item.id"
                    v-for="(item, idx) in providerList" :key="idx"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所属组织：" prop="orgId" class="is-required">
                <!-- <el-select
                    :disabled="form.sourceId ? false : true"
                    v-model="form.orgId"
                    placeholder="请选择所属组织"
                    class="w340"
                >
                    <el-option :label="item.basicName" :value="item.id"
                    v-for="(item, idx) in orgList" :key="idx"></el-option>
                </el-select> -->
                <el-cascader
                    :show-all-levels="false"
                    :key="cascaderKey"
                    :disabled="form.sourceId || form.sourceId == 0 ? false : true"
                    v-model="form.orgId"
                    placeholder="请选择所属组织"
                    class="w340"
                    :options="orgList"
                    :props="{ expandTrigger: 'hover' , value:'orgId', label:'orgName'}"
                    @change="handleChange"></el-cascader>
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
                <el-input class="w340" v-model="form.mobile" placeholder="请输入员工手机"
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
                    <el-option 
                    v-for="(item, idx) in positionArr" :key="idx"
                    :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="初始化密码：" prop="password">
                <el-input class="w340" v-model="form.password" placeholder="请输入初始化密码"
                ></el-input>
            </el-form-item>
            <el-form-item label="授权角色：" prop="roleMap">
                <el-select
                    v-model="form.roleMap"
                    filterable
                    multiple
                    placeholder="请选择授权角色"
                    class="w340"
                    @change="changeVal"
                >
                    <el-option
                    v-for="(item, idx) in roleList" :key="idx"
                    :label="item.roleName" :value="item.id"></el-option>
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
import addStaff from '@/api/1332-post-frontapi-service-provider-employee-add'
import editStaff from '@/api/1334-post-frontapi-service-provider-employee-update'
import getStaff from '@/api/1376-get-frontapi-service-provider-employee-{id}'
import getRoleList from '@/api/1348-get-common-service-role-list'
import getProviderList from '@/api/1660-get-frontapi-service-provider-list-by-name'
import getOrgList from '@/api/1320-get-frontapi-service-provider-org-get-by-providerid'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    cascaderKey: 1,
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
    checkRoleObj: {}, // 选中的角色组
    checkRoleArr: [],
    roleList: [],
    providerList: [],
    orgList: [],
    positionArr: ['服务商设计师', '服务商制作员', '服务商设计助理'],
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
    },
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    // 选择组织
    changeOrg () {
        this.orgList = []
        getOrgList({providerId: this.form.sourceId}).then(res => {
            res.data.children = res.data.children.length > 0 ? this.getTreeData(res.data.children) : undefined
            this.orgList = [res.data]
        }).catch(err => {
            console.log(err, '组织获取失败')
        })
    },
    handleChange () {},
    changeVal (e) {
        if (e.length == 0) {
            this.checkRoleObj = {}
        }
        this.checkRoleArr = e
        this.roleList.map(v => {
            e.map(c => {
                this.checkRoleObj[c] = v.roleName
            })
        })
        console.log(this.checkRoleObj)
    },
    // 树形
    getTreeData(data){
        // 循环遍历json数据
        for(var i=0;i<data.length;i++){
            if(data[i].children.length<1){
                // children若为空数组，则将children设为undefined
                data[i].children=undefined;
            }else {
                // children若不为空数组，则继续 递归调用 本方法
                this.getTreeData(data[i].children);
            }
        }
        
        return data;
    },
    handleSave () {
        console.log(this.form)
        this.form.roleMap = this.checkRoleObj
        if (this.form.orgId.length > 0) {
            this.form.orgId = this.form.orgId.join(',')
        }
        this.$refs['form'].validate((valid) => {
            if (valid) {
                if (this.$route.params.id) {
                    editStaff(this.form).then(res => {
                        console.log(res, 999)
                        if (res.status == 200) {
                            this.$message.success('编辑员工成功')
                            this.$router.push({
                                path: '/system-setting/staff/list'
                            })
                        } else {
                            this.$message.error(res.msg)
                        }
                    }).catch(err => {
                        console.log(err, '编辑员工失败')
                        this.form.roleMap = this.checkRoleArr
                    })
                } else {
                    addStaff(this.form).then(res => {
                        if (res.status == 200) {
                            this.$message.success('新增员工成功')
                            this.$router.push({
                                path: '/system-setting/staff/list'
                            })
                        } else {
                            this.$message.error(res.msg)
                        }
                    }).catch(err => {
                        console.log(err, '添加员工失败')
                        this.form.orgId = this.form.orgId.split(',')
                        this.form.roleMap = this.checkRoleArr
                    })
                }
            } else {
                this.form.orgId = this.form.orgId.split(',')
                console.log('error')
            }
        });
    },
    getDetail () {
        getStaff({id: this.sid}).then(res => {
            this.form = res.data
            this.checkRoleObj = res.data.roleMap || {}
            if (this.form.orgId) {
                this.form.orgId = this.form.orgId.split(',')
            }
            let arr =[] 
            if (res.data.roleMap) {
                Object.keys(res.data.roleMap).forEach(key => {
                    arr.push(Number(key))
                });
            }
            this.changeOrg()
            this.form.roleMap = arr
        })
    },
    getProviderList () {
        getProviderList().then(res => {
            this.providerList = res.data
        })
    },
    getRoleList () {
        // 获取角色列表
        getRoleList({pageSize: -1}).then(res => {
            this.roleList = res.data.records || []
        }).catch(err => {
            console.log(err, '获取角色列表失败')
        }) 
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.sid = this.$route.params.id
    if (this.sid) {
        this.getDetail()
    }
    this.getProviderList()
    this.getRoleList()
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
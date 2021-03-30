<!-- 批量授权 -->
<template>
<div class='auth_box'>
    <el-alert title="批量授权将会清空原有的角色信息，调整为新的角色，请慎重！" type="warning" show-icon :closable="false" />
    <!-- <div class="staff_box mt20">
        <span style="font-size:13px">授权员工列表：</span>
        <el-tag v-for="(item, idx) in data" :key="idx" class="ml15 mb10">{{item.employeeName}}</el-tag>
    </div> -->
    <el-form v-model="form" class="mt20" style="width:90%;margin:20px auto">
        <el-form-item label="授权员工：">
            <el-tag v-for="(item, idx) in data" :key="idx" class="mr15 mb10">{{item.employeeName}}</el-tag>
        </el-form-item>
        <el-form-item label="授权角色：" prop="role">
            <el-select
                v-model="form.role"
                filterable
                multiple
                placeholder="请选择授权角色"
                @change="changeVal"
                class="w340"
            >
                <el-option
                v-for="(item, idx) in roleList" :key="idx"
                :label="item.roleName" :value="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item style="padding-left:84px">
            <el-button type="primary" @click="submit">确定</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getRoleList from '@/api/1348-get-common-service-role-list'
import postAuth from '@/api/2429-post-common-service-employee-role-save'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['data'],
    data() {
      return {
        roleList: [],
        form: {
            role: ''
        },
        formArr: [],
      };
    },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    changeVal (e) {
        // console.log(e)
    },
    cancel () {
        this.$emit('close')
    },
    submit () {
        if (this.form.role.length == 0) {
            this.$message.error('请选择授权角色')
            return false
        }
        this.formArr.map(v => {
            v.roleIds = this.form.role
        })

        postAuth(this.formArr).then(res => {
            if (res.status == 200) {
                this.$message.success('批量授权成功')
                this.cancel()
            } else {
                this.$message.error(res.msg)
            }
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    
    this.data.map(v => {
        this.formArr.push({
            employeeId: v.employeeId,
            sourceType: v.sourceType,
            roleIds: [],
        })
    })
    console.log(this.formArr, 9999)
    // 获取角色列表
    getRoleList({pageSize:-1}).then(res => {
        this.roleList = res.data.records || []
    }).catch(err => {
        console.log(err, '获取角色列表失败')
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
    .transfer_box{
        margin:20px auto;
        width:600px;
        // background: #0f0;
    }
</style>
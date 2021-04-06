<!-- 分派相关 -->
<template>
<div>
  <el-cascader
    v-model="value"
    :options="options"
    ref="refSubCat"
    @change="handleChange"
    placeholder="请选择团队"
    :props="{label: 'orgName', value:'orgId', expandTrigger: 'hover'}" v-if="buttonType == 'change_liability'"></el-cascader>
    <el-select :disabled="selDisable" style="margin-left:20px;" placeholder="请选择员工" v-model="form.empId"
    v-if="buttonType != 'change_liability' && !term">
        <el-option v-for="(item, idx) in selectList" :key="idx" :value="item.employeeId" :label="item.employeeName"></el-option>
    </el-select>
    <el-select :disabled="selDisable" style="margin-left:20px;" placeholder="请选择组织" v-model="form.orgId" v-if="term"
    @change="selectChange">
        <el-option v-for="(item, idx) in selectList" :key="idx" :value="item.orgId" :label="item.orgName"></el-option>
    </el-select>
    <div class="foot_box" v-if="isBtn">
        <el-button type="default" size="small" @click="$emit('close')">取消</el-button>
        <el-button type="primary" size="small" @click="save">确定</el-button>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
import getTreeList from '@/api/1420-get-common-service-org-list-tree'
import getStaffList from '@/api/2243-get-common-service-employee-list-{orgid}-{sourcetype}'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['code', 'buttonType', 'form', 'curBtn', 'isBtn'],
data() {
//这里存放数据
return {
    value: [],
    options: [],
    selectList: [],
    
    selDisable: false,
    term: false
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    cancel () {
        this.$store.commit('dialog/close')
    },
    save () {
        // 员工
        if (this.buttonType == 'change_liability' || (this.buttonType != 'change_liability' && !this.term)) {
            if (!this.form.empId) {
                this.$message.error('请选择员工')
                return false
            }
        }
        if (this.term) {
            if (!this.form.orgId) {
                this.$message.error('请选择组织')
                return false
            }
        }
        getServicesBtn(this.form).then(res => {
            if (res.status == 200) {
                this.$message.success('操作成功')
                this.$emit('close')
                this.$store.commit('table/update')
            }
        }).catch(err => {
            this.$message.error('请求失败')
        })
    },
    // 递归去除空级联bug
    getTreeData (data, children) {
        for(var i=0;i<data.length;i++){
            if(data[i][children].length<1){
                // children若为空数组，则将children设为undefined
                data[i][children]=undefined;
            }else {
                // children若不为空数组，则继续 递归调用 本方法
                this.getTreeData(data[i][children], children);
            }
        }
        return data;
    },
    selectChange (e) {
        this.selectList.map(v => {
            if (v.orgId == e) {
                this.form.serviceId = v.providerId
            }
        })
        this.form.orgId = e
        console.log(this.form.serviceId, 9999)
    },
    handleChange (e) {
        let node = this.$refs["refSubCat"].getCheckedNodes()[0].data
        this.form.orgId = e[e.length - 1]
        this.form.serviceId = node.sourceId
        if (!this.curBtn.isTerm) {
            getStaffList({orgId: e[e.length - 1], sourceType: node.sourceType}).then(res => {
                console.log(res.data)
                this.selDisable = false
                this.selectList = res.data || []
            })  
        }
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    // console.log(this.buttonType, this.curBtn, this.code, this.form, this.isBtn)
    if (this.buttonType == 'assign_designers' || this.buttonType == 'assign_make' || this.buttonType == 'assign_assistant'
     || this.buttonType == 'change_designers' || this.buttonType == 'change_make' || this.buttonType == 'change_assistant'
     || this.buttonType == 'assign_mh_adviser' || this.buttonType == 'assign_ds_advise') {
        getServicesBtn({serviceCode: this.code, buttonType: 'get_assign_person'}).then(res => {
            // 获取设计师列表

            if (this.buttonType == 'assign_designers' || this.buttonType == 'change_designers') {
                this.selectList = res.data.designList
                //制作
            } else if (this.buttonType == 'assign_make' || this.buttonType == 'change_make') {
                this.selectList = res.data.makeList
                // 助理
            } else if (this.buttonType == 'assign_assistant' || this.buttonType == 'change_assistant') {
                this.selectList = res.data.assistantList
            } else if (this.buttonType == 'assign_mh_adviser') {
                this.selectList = res.data.pmcList
            } else if (this.buttonType == 'assign_ds_adviser') {
                this.selectList = res.data.eocList
            } else {
                this.selectList = res.data.qualityList
            }
        }) 
    } else if (this.buttonType == 'to_designers' || this.buttonType == 'to_make' || this.buttonType == 'to_assistant') {
        getServicesBtn({serviceCode: this.code, buttonType: 'get_to_org', resourceCode: this.buttonType}).then(res => {
            // console.log(res, 999)
            this.term = true
            // this.form.serviceId = res
            this.selectList = res.data
        })
    } else {
        // 获取组织
        getTreeList({ state: 1 }).then(res => {
            console.log(res.data)
            this.options = res.data
            this.options = this.getTreeData(res.data || [], 'children')
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
    .foot_box{
        // height:100px;
        margin:30px auto;
        text-align: center;
    }
</style>
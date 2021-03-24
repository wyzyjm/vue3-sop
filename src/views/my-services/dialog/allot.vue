<!-- 分派相关 -->
<template>
<div>
  <el-cascader
    v-model="value"
    :options="options"
    ref="refSubCat"
    @change="handleChange"
    placeholder="请选择团队"
    :props="{label: 'orgName', value:'orgId', expandTrigger: 'hover'}"></el-cascader>
    <el-select :disabled="selDisable" style="margin-left:20px;" placeholder="请选择员工" v-model="form.empId"
    v-if="!curBtn.isTerm">
        <el-option v-for="(item, idx) in selectList" :key="idx" :value="item.employeeId" :label="item.employeeName"></el-option>
    </el-select>
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
props: ['code', 'buttonType', 'form', 'curBtn'],
data() {
//这里存放数据
return {
    value: [],
    options: [],
    selectList: [],
    
    selDisable: true
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
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
    // 获取组织
    getTreeList({ state: 1 }).then(res => {
        console.log(res.data)
        this.options = res.data
        this.options = this.getTreeData(res.data || [], 'children')
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

</style>
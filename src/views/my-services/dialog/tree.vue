<!-- 操作树 -->
<template>
<div class='dialog_box'>
    <div class="tree_box">
        <el-tree :props="defaultProps" 
        highlight-current
        :data="data"
        @node-click="handleNodeClick"></el-tree>
    </div>
    
    <div class="foot_box">
        <el-button type="default" size="small" @click="cancel">取消</el-button>
        <el-button type="primary" size="small" @click="save">确定</el-button>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
import getTreeList from '@/api/1420-get-common-service-org-list-tree'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['code', 'buttonType'],
data() {
//这里存放数据
return {
    data: [],
    defaultProps: {
        children: 'children',
        label: 'orgName'
    },
    lazyload: false,
    deptId: '', // 部门ID
    empId: '', // 员工id
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    loadNode (node, resolve) {

        getTreeList({ state: 1 }).then(res => {
            console.log(res.data)
            this.data = res.data
        })
        console.log(node, resolve)
    },
    handleNodeClick(data) {
        // console.log(data);
        if (!data.children || data.children.length == 0) {
            this.lazyload = true
            // this.loadNode()
            // this.deptId = data.orgId
        }
    },
    cancel () {
        this.$store.commit('dialog/close')
    },
    save () {
        getServicesBtn({serviceCode: this.code, buttonType: this.buttonType}).then(res => {
            // res.data = res.data
            this.data = res.data
        }) 
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
        getTreeList({ state: 1 }).then(res => {
            console.log(res.data)
            this.data = res.data
        })
    // getServicesBtn({serviceCode: this.code, buttonType: 'operate_log'}).then(res => {
    //     res.data = res.data
    //     this.tableData = res.data
    // })
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
    .tree_box{
        // height:450px;
    }
    .foot_box{
        // height:100px;
        margin:30px auto;
        text-align: center;
    }
</style>
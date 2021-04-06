<!-- 操作日志 -->
<template>
<div>
  <el-table
    v-if="buttonType == 'operate_log'"
    :data="tableData"
    size="small"
    border
    max-height="400"
    style="width: 100%">
    <el-table-column
      prop="operateType"
      label="操作类型"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="operaterName"
      label="操作人"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="orderCode"
      :show-overflow-tooltip="true"
      label="操作服务单">
    </el-table-column>
    <el-table-column
      prop="operateResult"
      show-overflow-tooltip
      label="执行结果">
    </el-table-column>
    <el-table-column
      prop="operateTime"
      show-overflow-tooltip
      label="操作时间">
    </el-table-column>
    <el-table-column
      prop="operateDetail"
      show-overflow-tooltip
      label="操作详情">
    </el-table-column>
  </el-table>

  <el-table
    v-if="buttonType == 'quality_remark'"
    :data="tableData"
    size="small"
    border
    max-height="400"
    style="width: 100%">
    <el-table-column
      prop="communicatorId"
      label="操作人ID"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="communicatorName"
      label="操作人"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="orderCode"
      :show-overflow-tooltip="true"
      label="操作服务单">
    </el-table-column>
    <el-table-column
      prop="communicateContent"
      show-overflow-tooltip
      label="备注">
    </el-table-column>
  </el-table>

  <el-table
    v-if="buttonType == 'make_tools'"
    :data="tableData"
    size="small"
    border
    max-height="400"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="工具名称"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="language"
      label="语言"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="url"
      :show-overflow-tooltip="true"
      label="工具地址">
        <template scope="scope">
            <el-link v-if="scope.row.ifDirectJump == 0" @click="openWindow(scope.row)" type="primary">访问</el-link>
            <el-link v-else :href="scope.row.url" type="primary" target="_blank">访问</el-link>
        </template>
    </el-table-column>
  </el-table>  


  <el-table
    v-if="buttonType == 'programme_see_history'"
    :data="tableData"
    size="small"
    border
    max-height="400"
    style="width: 100%">
    <el-table-column
      width="200px"
      prop="annexName"
      label="方案名称"
      :show-overflow-tooltip="true">
        <template scope="scope">
            <!-- <el-link v-if="scope.row.annexType == 4" @click="openWindow(scope.row)" type="primary">{{scope.row.annexName}}</el-link> -->
            <el-link :href="scope.row.annexShowUrl" type="primary" target="_blank">{{scope.row.annexName}}</el-link>
        </template>
    </el-table-column>
    <el-table-column
      prop="uploadTime"
      label="创建时间"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="uploaderName"
      :show-overflow-tooltip="true"
      label="操作人">
    </el-table-column>
  </el-table>  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
import getMarkTool from '@/api/2399-get-service-order-sevice-order-info-urllist'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['code', 'buttonType'],
data() {
//这里存放数据
return {
    tableData: []
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    openWindow (row) {
        console.log(row)
        getServicesBtn({
            serviceCode: this.code, 
            buttonType: this.buttonType,
            viewType: row.type,
            designProductType: row.tenantType
        }).then(res => {
            window.open(res.data)
            // if (res.status == 200) {
            //     this.$message.success(res.msg)
            //     this.dragDialogVisible = false
            // }
        }) 
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    if (this.buttonType == 'make_tools') {
        getMarkTool({serviceOrderCode: this.code}).then(res => {
            // res.data = res.data
            // for(let i = 0; i < 100; i++) {
            //     this.tableData.push(res.data[0])
            // }
            this.tableData = res.data
        }) 
    } else {
        getServicesBtn({serviceCode: this.code, buttonType: this.buttonType}).then(res => {
            // res.data = res.data
            // for(let i = 0; i < 100; i++) {
            //     this.tableData.push(res.data[0])
            // }
            this.tableData = res.data
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

</style>
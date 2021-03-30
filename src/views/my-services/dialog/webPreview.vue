<!-- 操作日志 -->
<template>
<div >
  <el-table
    :data="tableData"
    size="small"
    max-height="400"
    border
    style="width: 100%">
    <el-table-column
      prop="typeName"
      width="100"
      :show-overflow-tooltip="true"
      label="预览类型">
    </el-table-column>
    <el-table-column
      :show-overflow-tooltip="true"
      label="预览内容">
        <template slot-scope="scope">
            <div v-if="scope.row.type == 'qrcode'">
                <p v-for="(item, idx) in scope.row.previewContent" :key="idx" style="width:80px;height:100px;float:left;margin-left:18px; text-align:center">
                    <el-image :src="item.value" style="width:80px;height:80px;display:block"
                    ></el-image>
                    {{item.label}}
                </p>
            </div>
            <p v-else>
                <el-tag type="success" v-for="(item, idx) in scope.row.previewContent" :key="idx"
                style="margin-right:6px;cursor:pointer;" @click="toPath(item.value)">{{item.label}}</el-tag>
            </p>
        </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['code', 'buttonType'],
data() {
//这里存放数据
return {
    value: 3.3,
    result: {},
    cols: [],
    tableData: [
        // {name: '制作预览', pc: '制作期', mobile: '制作期', qrcode: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F31%2F53%2F8956d2eaced73db.jpg%21rw400&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618972020&t=c52b86d33642a18c3d7993acde036279'},
        // {name: '正式预览', pc: 'www.300.cn', mobile: 'm.300.cn', qrcode: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F31%2F53%2F8956d2eaced73db.jpg%21rw400&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618972020&t=c52b86d33642a18c3d7993acde036279'},
    ],
    colLen: {},
    form: {},
    disable: false
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
        // let arr = []
        // Object.keys(this.form).forEach( key => {
        //     console.log(key, this.form[key])
        //     let obj = {}
        //     obj[key] = this.form[key]
        //     arr.push(obj)
        // })
        getServicesBtn({
            serviceCode: this.code, 
            buttonType: this.buttonType,
            personScoreJson: JSON.stringify(this.form)
            }).then(res => {
                // this.tableData = res.data
                this.tableData[0].pc = res.data.makeDomain
                this.tableData[0].mobile = res.data.mobileMakeDomain
                this.tableData[1].pc = res.data.domain
                this.tableData[1].mobile = res.data.makeDomain
        }) 
    },
    dataSpanMethods ({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
            if (row.isFirst) {
                return {
                    rowspan: this.colLen[row.classifySort],
                    colspan: 1
                }
            } else {
                return {
                    rowspan: 0,
                    colspan: 0
                }
            }
        }
    },
    toPath (path) {
        window.open(path)
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log(321)
    getServicesBtn({serviceCode: this.code, buttonType: this.buttonType}).then(res => {
        // let cols = []
        this.tableData = res.data
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
    .title{
        font-size:16px;
        color:#999;
        strong {
            font-size: 24px;
            color:#666;
        }
    }
    .col_box{
        padding:20px 0;
        .desc_style{
            float:left;margin:2px 10px 0 0;
        }
        .score_style{
            float:left;margin:0px 0 0 30px;
        }
    }
    .foot_box{
        // height:100px;
        margin:30px auto;
        text-align: center;
    }
</style>
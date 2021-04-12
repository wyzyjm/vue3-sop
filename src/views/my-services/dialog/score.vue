<!-- 操作日志 -->
<template>
<div >
  <el-table
    :data="tableData"
    size="small"
    max-height="400"
    :span-method="dataSpanMethods"
    border
    style="width: 100%">
    <el-table-column
      prop="classifyName"
      label="分类">
    </el-table-column>
    <el-table-column
      prop="projectName"
      label="项目"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="weight"
      label="权重">
      <template slot-scope="scope">
          <el-tag type="info">{{scope.row.weight * 100}}%</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="score"
      label="评分">
      <template slot-scope="scope">
          <!-- {{form.personScoreJson}} -->
          <el-input type="number" v-model="form.personScoreJson[scope.row.projectKey]" size="small"
          :disabled="disable"></el-input>

          <!-- <el-tag type="info">{{scope.row.score}}</el-tag> -->
      </template>
    </el-table-column>
  </el-table>
    <!-- <div class="foot_box" v-if="buttonType != 'score_see'">
        <el-button type="default" size="small" @click="cancel">取消</el-button>
        <el-button type="primary" size="small" @click="save">确定</el-button>
    </div>
    <div class="foot_box" v-else>
        <el-button type="default" size="small" @click="cancel">关闭</el-button>
    </div> -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesBtn from '@/api/1835-post-service-order-sevice-button-operate'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['code', 'buttonType', 'form'],
data() {
//这里存放数据
return {
    value: 3.3,
    result: {},
    tableData: [],
    colLen: {},
    // form: {},
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
        // this.$store.commit('dialog/close')
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
                console.log(res)
            // res.data = res.data
            // this.data = res.data
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
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    
    getServicesBtn({serviceCode: this.code, buttonType: 'score_config'}).then(res => {
        let obj = {}
        // this.form.personScoreJson = {}
        res.data.map(v => {
            if (this.buttonType != 'score_see') {
                this.$set(this.form.personScoreJson, v.projectKey, 0)
            }
            if (obj[v.classifySort]) {
                obj[v.classifySort]++
            } else {
                obj[v.classifySort] = 1
                v.isFirst = true
            }
        })
        this.colLen = obj
        // console.log(obj, res.data,  999)
        this.tableData = res.data
        // res.data = res.data
        // this.result = res.data
    }) 
    // 查看评分
    if (this.buttonType == 'score_see') {
        this.disable = true
        getServicesBtn({serviceCode: this.code, buttonType: 'score_see'}).then(res => {
            // this.form.personScoreJson = {}
            let obj = {}
            res.data.map(v => {
                 this.$set(obj, v.projectKey, v.projectValue)                
            })
            this.$nextTick(() => {
                this.form.personScoreJson = obj
                console.log(this.form.personScoreJson, 321321)
            })
            // console.log(this.form.personScoreJson, 8098)
            // let obj = {}
            // res.data.map(v => {
            //     this.$set(this.form, v.projectKey, 0)
            //     if (obj[v.classifySort]) {
            //         obj[v.classifySort]++
            //     } else {
            //         obj[v.classifySort] = 1
            //         v.isFirst = true
            //     }
            // })
            // this.colLen = obj
            // // console.log(obj, res.data,  999)
            // this.tableData = res.data
            // // res.data = res.data
            // // this.result = res.data
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
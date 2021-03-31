<!-- 高级查询 -->
<template>
<div class='search_box' style="height:500px;overflow-y:scroll;position:relative">
    <s-form v-model="form" size="small" label-width="140px">
        <el-row>
            <el-col :span="12">
                <s-form-item label="客户名称：">
                    <el-input v-model="form.custName" placeholder="请输入" class="w220" clearable></el-input>
                </s-form-item>
            </el-col>
            <el-col :span="12">
                <s-form-item label="服务单号：">
                    <el-input v-model="form.serviceCode" placeholder="请输入" class="w220" clearable></el-input>
                </s-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <s-form-item label="产品实例编号：">
                    <el-input v-model="form.productInstanceCode" placeholder="请输入" class="w220" clearable></el-input>
                </s-form-item>
            </el-col>
            <el-col :span="12">
                <s-form-item label="产品标识：">
                    <el-input v-model="form.productDomain" placeholder="请输入" class="w220" clearable></el-input>
                </s-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <s-form-item label="文本序号：">
                    <el-input v-model="form.contractTextCode" placeholder="请输入" class="w220" clearable></el-input>
                </s-form-item>
            </el-col>
            <el-col :span="12">
                <s-form-item label="售卖渠道：">
                    <el-input v-model="form.saleChannel" placeholder="请输入" class="w220" clearable></el-input>
                </s-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <s-form-item label="服务单生成时间：">
                    <el-date-picker
                    type="date"
                    v-model="createTime"
                    @change="changeTime($event, 'createTime')"
                    placeholder="选择日期">
                    </el-date-picker>
                </s-form-item>
            </el-col>
            <el-col :span="12">
                <s-form-item label="服务单发布时间：">
                    <el-date-picker
                    type="date"
                    v-model="publishTime"
                    @change="changeTime($event, 'publishTime')"
                    placeholder="选择日期">
                    </el-date-picker>
                </s-form-item>
            </el-col>
        </el-row>
        <s-form-item label="生产状态：">
            <ul class="ul_list">
                <li v-for="(item, idx) in statusList" :key="idx"
                :class="(check.statuss.some(v => v == item.id)) ? 'active': ''"
                @click="checkList('statuss', item.id)">{{item.name}}</li>
            </ul>
        </s-form-item>
        <s-form-item label="产品类型：">
            <ul class="ul_list">
                <li v-for="(item, idx) in productList" :key="idx"
                :class="(check.productTypes.some(v => v == item.id)) ? 'active': ''"
                @click="checkList('productTypes', item.id)">{{item.name}}</li>
            </ul>
        </s-form-item>
        <s-form-item label="业务类型：">
            <ul class="ul_list">
                <li v-for="(item, idx) in businessList" :key="idx"
                :class="(check.businessTypes.some(v => v == item.id)) ? 'active': ''"
                @click="checkList('businessTypes', item.id)">{{item.name}}</li>
            </ul>
        </s-form-item>
    </s-form>
    <div class="query-box" style="margin:0 auto; text-align:center;padding:0 0 30px 0">
        <s-button type="primary" @click="search">查询</s-button>
        <!-- <s-button run="form.reset" @click="resetFun">重置</s-button> -->
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getStatusList from '@/api/1685-get-production-config-service-order-status-list'
import getBusinessList from '@/api/1408-get-production-config-business-type-search'
import getProductList from '@/api/1665-get-production-config-product-group-by-code-list'
import formatDate from '@/ui/element/extends/utils/format-date'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
  props: {
    data: {
      type: Object,
    },
  },
data() {
//这里存放数据
return {
    form: {
      custName: '', // 客户名称
      serviceCode: '', // 服务单
      businessTypes: '', // 业务类型
      statuss: '', // 服务单状态
      productInstanceCode: '', // 产品实例code
      contractTextCode: '', // 合同文本号
      productDomain: '', // 产品标识
      saleChannel: '', // 售卖渠道
      designerEmpId: '', // 设计师员工id
      makerEmpId: '', // 制作员id
      entryClerkId: '', // 录入员id
      designerMakerEntryId: '', // 设计师员工/制作员/录入员id
      createTimeStart: '', // 服务单生成时间开始
      publishTimeStart: '', // 服务单发布时间开始
      createTimeEnd: '', // 服务单生成时间结束
      publishTimeEnd: '', // 服务单发布时间结束
      productType: '', // 产品类型
      publishTimeAscSort: '', // 创建时间升序排序
      cycleAscSort: '', // 周期升序排序
      custId: '', // 客户id
    },
    publishTime: '',
    createTime: '',
    statusList: [], // 状态
    businessList: [], // 业务类型
    productList: [], // 产品类型
    check: {
        productTypes: [],
        statuss: [],
        businessTypes: []
    },
};
},
//监听属性 类似于data概念
computed: {
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    changeTime (evt, type) {
        if (evt) {
            if (type == 'createTime') { //生成时间
                this.form.createTimeStart = formatDate(evt) + ' 00:00:01'
                this.form.createTimeEnd = formatDate(evt) + ' 23:59:59'
            } else {
                this.form.publishTimeStart = formatDate(evt) + ' 00:00:01'
                this.form.publishTimeEnd = formatDate(evt) + ' 23:59:59' 
            }
        } else {
            if (type == 'createTime') { //生成时间
                this.form.createTimeStart = ''
                this.form.createTimeEnd = ''
            } else {
                this.form.publishTimeStart = ''
                this.form.publishTimeEnd = ''
            }
        }
    },
    checkList (type, id) {
        if (this.check[type].some(v => v == id)) {
            this.check[type].map((c, i) => {
                if (c == id) {
                    this.check[type].splice(i, 1)
                }
            })
        } else {
            this.check[type].push(id)
        }
        console.log(this.check[type], type)
    },
    search () {
        let filterForm = {}
        this.form.statuss = this.check.statuss.join(',')
        this.form.businessTypes = this.check.businessTypes.join(',')
        this.form.productTypes = this.check.productTypes.join(',')
        Object.keys(this.form).forEach(key => {
            if (this.form[key] != '') {
                filterForm[key] = this.form[key]
            }
        })
        console.log(filterForm, '筛选参数')
        this.$emit('changeSearch', filterForm)
        // this.$store.commit('table/update', filterForm)
        this.$emit('close')
    },
    resetFun () {
        this.$emit('changeReset', {})
        this.$emit('close')
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    getStatusList().then(res => {
        this.statusList = res.data.filter(v => v.status == 1)
    })
    getBusinessList().then(res => {
        this.businessList = res.data.records.filter(v => v.status == 1)
    })
    getProductList().then(res => {
        this.productList = res.data
    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    Object.assign(this.form, this.data)
    console.log(this.form, 999999)
    this.check.statuss = this.form.statuss ? this.form.statuss.split(',') : []
    this.check.productTypes = this.form.productTypes ? this.form.productTypes.split(',') : []
    this.check.businessTypes = this.form.businessTypes ? this.form.businessTypes.split(',') : []
    console.log(this.check)
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
    .ul_list{
        margin:0;
        padding:0;
        list-style: none;
    }
    .ul_list > li{
        width: 90px;
        height:30px;
        color:#666;
        background: #fff;
        border:1px solid #e1e1e1;
        text-align: center;
        overflow: hidden;
        float:left;
        margin:0px 10px 10px 0;
        font-size: 12px;
        cursor: pointer;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .ul_list > .active{
        background: #18B398 !important;
        border:1px solid #18B398 !important;
        color:#fff !important;
    }
</style>
<style>
.el-dialog__body{
    padding:20px;
}
</style>
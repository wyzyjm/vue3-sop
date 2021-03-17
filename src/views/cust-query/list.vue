<template>
  <div>
    <div class="query-head mb20 flow-k">
      <span>客户名称：</span>
      <p>
        <el-autocomplete
          class="inline-input"
          v-model="form.custName"
          :fetch-suggestions="custSearch"
          placeholder="请输入客户名称"
          :trigger-on-focus="false"
          @select="custSelect">
        </el-autocomplete>
      </p>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <div class="query-info mb20 flow-k">
        <div class="info-cust">
            <el-row class="info-cust-item">
                <b>客户信息</b>
            </el-row>
            <el-row class="info-cust-item" :gutter="20">
                <el-col :span="8">会员帐号：{{info.memberCode || '--'}}</el-col>
                <el-col :span="8">会员邮箱：{{info.memberMail || '--'}}</el-col>
                <el-col :span="8">会员联系方式：{{info.memberMobile || '--'}}</el-col>
            </el-row>
            <el-row class="info-cust-item" :gutter="20">
                <el-col :span="8">客户名称：{{info.custName || '--'}}</el-col>
                <el-col :span="8">保护商务：{{info.salerName || '--'}}</el-col>
                <el-col :span="8">商务联系方式：{{info.salerMobile || '--'}}</el-col>
            </el-row>
        </div>

        <el-tabs v-model="activeWeb" type="card" v-if="custId" class="sop-tabs mb20" @tab-click="custTabSelect">
            <el-tab-pane label="网站产品" name="first">
              <div class="cust-product p20">
                <div :class="{'cust-product-item':true, 'cust-product-active': item.displayUpdateBtn}" v-for="(item, index) of productList" :key="index">
                  <div class="cust-item cust-flex-row">
                    <div class="item-icon">
                      <i class="iconfont" v-if="item.webSite">&#xe632;</i>
                      <i class="iconfont" v-else>&#xe606;</i>
                    </div>
                    <div class="item-con">
                      <div>{{item.domain}}</div>
                      <p>{{item.goodsName}}({{item.stateName}})</p>
                    </div>
                  </div>
                  <div class="item-date">{{item.state==2?(item.beginTime+' 到 '+item.endTime):item.stateName}}</div>
                  <div class="cust-product-mark" @click="custProductEdit(item)"><i class="iconfont">&#xe615;</i></div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="设计服务" name="107">
              <div class="cust-product p20">
                <div class="cust-design-item" v-for="(item, index) of designList" :key="index">
                  <div class="design-item-title">{{item.instanceDefName}}</div>
                  <p>总购买量 {{item.totalNum}} </p>
                  <p>可用余量 {{item.surplusNum}} </p>
                  <p>服务进行中 {{item.frozenNum}} </p>
                </div>
              </div>
              <div class="start-p" v-if="canNewList.length">
                <s-button type="primary" @click="startSerivce(107)">发起服务</s-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="运营服务" name="169">
              <div class="cust-product p20">
                <div class="cust-design-item" v-for="(item, index) of designList" :key="index">
                  <div class="design-item-title">{{item.instanceDefName}}</div>
                  <p>总购买量 {{item.totalNum}}</p>
                  <p>可用余量 {{item.surplusNum}}</p>
                  <p>服务进行中 {{item.frozenNum}}</p>
                </div>
              </div>
              <div class="start-p" v-if="canNewList.length">
                <s-button type="primary" @click="startSerivce(169)">发起服务</s-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="翻译服务" name="68">
              <div class="cust-product p20">
                <div class="cust-design-item" v-for="(item, index) of designList" :key="index">
                  <div class="design-item-title">{{item.instanceDefName}}</div>
                  <p>总购买量 {{item.totalNum}}</p>
                  <p>可用余量 {{item.surplusNum}}</p>
                  <p>服务进行中 {{item.frozenNum}}</p>
                </div>
              </div>
              <div class="start-p" v-if="canNewList.length">
                <s-button type="primary" @click="startSerivce(68)">发起服务</s-button>
              </div>
            </el-tab-pane>
        </el-tabs>

        <el-tabs v-model="activePro" type="card" v-if="custId" class="sop-tabs">
            <el-tab-pane label="客户服务单" name="first">
              <s-table :data="tabData" :cols="tabCols" class="cb-table-style"></s-table>
            </el-tab-pane>
            <!-- <el-tab-pane label="客户工单" name="first">客户工单</el-tab-pane> -->
        </el-tabs>
    </div>
    <s-dialog v-bind="serviceDialog" @close="serviceDialog.close" />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
// import { Message } from 'element-ui'
import useDialog from '@/hooks/use-dialog'
import custList from '@/api/1853-get-service-order-cust-info-api-search-cust'
import getCustInfo from '@/api/1841-get-service-order-cust-info-api-get-by-custid'
import getCustWebsite from '@/api/1859-get-service-order-cust-info-api-website-list-by-custid'
import getCustTabs from '@/api/1865-get-service-order-cust-info-api-other-service-list'
import getCustList from '@/api/1979-get-service-order-cust-info-api-order-list'
import getOrderService from '@/api/1829-get-service-order-sevice-order-info-get-service-product-{serviceorderid}'
export default defineComponent({
  setup(props, { root }) {
    let custData = reactive({
      custId: '',
      custInfo: {},
      activeWeb: 'first',
      activePro: 'first',
      info: {},
      productList: [],
      canNewList: [],
      designList: [],
      tabData: [],
      tabCols: [
        {
          type: 'expand',
          prop: ({ row }) => {
            return row ? (
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{ row.name }</span>
                </el-form-item>
                <el-form-item label="购买套餐">
                  <span>基础测试套餐      测试风格     测试响应式     测试版</span>
                </el-form-item>
              </el-form>
            ) : ('')
          }
        },
        {
          label: '服务单号',
          prop: 'serviceCode',
        },
        {
          label: '客户名称',
          prop: 'custName'
        },
        {
          sortable: true,
          label: '产品类型',
          prop: 'productType',
        },
        {
          label: '语言',
          prop: 'language',
        },
        {
          label: '服务人员',
          prop: 'servicePersonal'
        },
        {
          label: '状态',
          sortable: true,
          prop: 'status',
        },
        {
          label: '服务单创建时间',
          sortable: true,
          prop: 'createTime',
        },
        {
          label: '剩余周期',
          sortable: true,
          prop: 'wholeMakeSurplusCycle',
        },
        {
          label: '操作',
          fixed: 'right',
          align: 'center',
          prop: ({ row }) => {
            return [
              <s-button type="text" onClick={() => toDetail(row)}>
                详情
              </s-button>
            ]
          },
        }
      ]
    })

    let form = reactive({
      custName: ''
    })

    const serviceDialog = useDialog({
      uid: 'startServiceDialog',
      title: '发起服务',
      width: '600px',
      component: require('./dialog/dialog-start-service'),
    })

    const search = () => {
      __getCustInfo();
      __getCustWebsite();
      __getCustList(custData.custId);
    }

    const custSearch = (queryString, cb) => {
      custList({custName: queryString}).then(({data}) => {
        let cbList = [];
        let custKeys = Object.keys(data);
        if (custKeys.length) {
          custKeys.map((custId) =>{
            cbList.push({custId, value:data[custId]})
          })
        }
        cb(cbList)
      })
    }

    const custSelect = (cust) => {
      custData.custId   = cust.custId || '';
      custData.custInfo = cust || {};
      search();
    }

    const custTabSelect = (tab) => {
      if (tab.name != 'first') {
        __getCustTabs(tab.name)
      }
    }

    const startSerivce = (id) => {
      serviceDialog.open({
        id, 
        info: {
          contactUserEmail: custData.info.memberMail,
          contactUserTel: custData.info.memberMobile,
          contactUserName: custData.info.memberNamecn,
          ...custData.custInfo
        },
        canList: custData.canNewList
      });
    }

    const custProductEdit = (item) => {
      serviceDialog.open({
        id: 1, 
        info: {
          contactUserEmail: custData.info.memberMail,
          contactUserTel: custData.info.memberMobile,
          contactUserName: custData.info.memberNamecn,
          productInstaceCode: item.instanceCode,
          ...custData.custInfo
        },
        canList: []
      });
    }

    const toDetail = (row) => {
      root.$router.push({
        path: `/my-services/detail/${row.id}/${row.serviceCode}`
      })
    }

    const __getCustInfo = ()=> {
      return getCustInfo({ custId: custData.custId })
      .then(({data}) => {
        custData.info = data || {};
      })
    }

    const __getCustWebsite = () => {
      return getCustWebsite({ custId: custData.custId })
      .then(({data}) => {
        custData.productList = data || [];
      })
    }

    const __getCustTabs = (productId) => {
      return getCustTabs({custId: custData.custId, productId})
      .then(({data}) => {
        let canArr = [];
        let tabArr = data || [];
        custData.designList = tabArr;
        tabArr.forEach(element => {
          element.isCanBeNewService&&canArr.push(element)
        });
        custData.canNewList = canArr;
      })
    }

    const __getCustList = (custId) => {
      getCustList({custId}).then(({data}) => {
        custData.tabData = data.records || [];
      })
    }

    // 列表展开数据
    const __getOrderService = (serviceOrderId) => {
      getOrderService({serviceOrderId})
      .then(({data}) => {
        console.log("data", data)
        // custData.tabData = data.records || [];
      })
    }    
    
    // __getOrderService(4)

    return {
      ...toRefs(custData),
      form,
      search,
      toDetail,
      custSearch,
      custSelect,
      custTabSelect,
      startSerivce,
      custProductEdit,
      serviceDialog
    }
  },
})
</script>
<style lang="scss" scoped>
  .flow-k {
    background: $sop-color-white;
    border-radius: 6px;
    border: 1px solid #EBEBEB;
  }
  .start-p {
    padding: 10px 20px;
  }
  .cust-flex-row {
    display: flex;
    align-items: center;
  }
  .query-head {
    display: flex;
    align-items: center;
    padding: 20px;
    p {
        padding: 0 20px;
    }
  }
  .query-info {
      padding: 20px;
      .info-cust {
          .info-cust-item {
              font-size: 12px;
              margin-bottom: 20px;
              color: $sop-color-9;
              b {
                  font-size: 14px;
                  color: $sop-color-0;
              }
          }
      }
  }
  .cust-product {
    display: flex;
    overflow-x: auto;
    .cust-product-item {
      background: $sop-color-white;
      border: 1px solid $sop-color-border;
      padding: 20px 20px 0 20px;
      border-radius: 6px;
      width: 220px;
      min-width: 220px;
      margin-right: 30px;
      font-size: 14px;
      position: relative;
      overflow: hidden;
      .cust-item {
        margin-bottom: 15px;
      }
      .item-icon {
        width: 50px !important;
        height: 50px;
        min-width: 50px;
        color: $sop-color-white;
        background: #18B398;
        border-radius: 50%;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconfont {
          font-size: 26px;
        }
      }
      .item-con {
        color: $sop-color-6;
        p {
          margin: 0;
          padding-top: 10px;
          color: $sop-color-9;
        }
      }
      .item-date {
        color: $sop-color-6;
        border-top: 1px solid $sop-color-border;
        padding-top: 15px;
        overflow: hidden;
      }
      &.cust-product-active{
        border-color: $sop-color-theme;
        .cust-product-mark {
          display: block;
        }
      }
      .cust-product-mark {
        display: none;
        position: absolute;
        background: $sop-color-theme;
        color: $sop-color-white;
        width: 55px;
        height: 55px;
        right: -30px;
        bottom: -30px;
        z-index: 1;
        border-radius: 38px;
        padding: 15px 0 0 15px;
        cursor: pointer;
      }
    }
    .cust-design-item {
      background: $sop-color-white;
      border: 1px solid $sop-color-border;
      border-radius: 6px;
      width: 240px;
      min-width: 240px;
      margin-right: 30px;
      font-size: 14px;
      .design-item-title{
        text-indent: 20px;
        border-bottom: 1px solid $sop-color-border;
        line-height: 40px;
      }
      p {
        text-indent: 20px;
      }
    }
  }
</style>
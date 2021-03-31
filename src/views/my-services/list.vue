<template>
  <div class="services_box">
    <s-dialog v-bind="openSearchDialog" @close="openSearchDialog.close" @changeSearch="changeSearch" @changeReset="resetFun" />
    <s-simple-table ref="tableRef" :data="table.data" :cols="table.cols" v-model="table.checked">
      <s-form :model="form" size="small" slot="form">
        <el-row>
          <el-col :span="8">
            <s-form-item label="客户名称" prop="custName">
              <s-input v-model="form.custName" placeholder="请输入" class="w220" clearable></s-input>
            </s-form-item>
          </el-col>
          <el-col :span="8">
            <s-form-item label="服务单号" prop="serviceCode">
              <s-input v-model="form.serviceCode" placeholder="请输入" class="w220" clearable></s-input>
            </s-form-item>
          </el-col>
          <el-col :span="8">
            <s-form-item>
              <s-button type="primary" run="form.search">搜索</s-button>
              <s-button run="form.reset" @click="resetFun">重置</s-button>
              <s-button type="primary" @click="advSearch">高级搜索</s-button>
            </s-form-item>
          </el-col>
        </el-row>
        <s-form-item label="业务类型" prop="businessTypes">
          <ul class="ul_list">
            <li v-for="(item, idx) in options.businessTypes" :key="idx" :class="(check.businessTypes.some(v => v == item.id)) ? 'active': ''" @click="checkList('businessTypes', item.id)">{{item.name}}</li>
          </ul>
        </s-form-item>
        <s-form-item label="生产状态" prop="statuss">
          <ul class="ul_list">
            <li v-for="(item, idx) in options.statuss" :key="idx" :class="(check.statuss.some(v => v == item.id)) ? 'active': ''" @click="checkList('statuss', item.id)">{{item.name}}</li>
          </ul>
        </s-form-item>
      </s-form>
      <!--批量操作按钮-->
      <!-- <div slot="top" class="mb20">
        <el-radio-group v-model="form.status">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="生产中"></el-radio-button>
            <el-radio-button label="已完成"></el-radio-button>
        </el-radio-group>
        <div style="float:right;margin-bottom:15px">
            <el-button type="primary" size="small">更换服务人员</el-button>
            <el-button type="primary" size="small">更换设计师</el-button>
            <el-button type="primary" size="small">更换制作员</el-button>
            <el-button type="primary" size="small">更换助理</el-button>
            <el-button type="primary" size="small">领取</el-button>
        </div>
    </div> -->
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive,ref } from '@vue/composition-api'
import getList from '@/api/1700-get-service-order-sevice-order-info-list'
import getExpandList from '@/api/1829-get-service-order-sevice-order-info-get-service-product-{serviceorderid}'
import useOptions from './utils/query'
import useDialog from '@/hooks/use-dialog'
export default defineComponent({
  setup(props, { root }) {
    const form = reactive({
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
    })


    const check=reactive( {
        statuss: [],
        businessTypes: [],
      })

   const resetFun=()=> {
      // return
      console.log(32321)
      check.statuss = []
      check.businessTypes = []
      Object.keys(form).forEach((v) => {
        form[v] = ''
      })

    }
function checkList(type, id) {
      // console.log(type, id)
      // return
      if (check[type].some((v) => v == id)) {
        check[type].map((c, i) => {
          if (c == id) {
            check[type].splice(i, 1)
          }
        })
      } else {
        check[type].push(id)
      }
      // console.log(check[type], type)
      form[type] = check[type].join(',')
      // console.log(this.form[type], 99999)
    }

    const tableRef=ref(null)

    const changeSearch = function (data) {
      Object.keys(form).forEach((v) => {
        form[v] = data[v] || ''
      })
      check.statuss = form.statuss ? form.statuss.split(',') : []
      check.businessTypes = form.businessTypes ? form.businessTypes.split(',') : []

      tableRef.value.formSearch(data)
      this.$store.commit('table/update')
    }

    const openSearchDialog = useDialog({
      uid: 'search',
      title: '高级搜索',
      //   dynamicTitle: (form) => ('高级搜索1'),
      width: '1000px',
      component: require('./dialog/search'),
    })
    const toDetail = (row) => {
      root.$router.push({
        path: `/my-services/detail/${row.id}/${row.serviceCode}`,
      })
    }
    const expandData = {
      data: [],
      cols: [
        {
          label: '服务产品',
          prop: 'name',
        },
        {
          label: '类型',
          prop: 'type',
        },
        {
          label: '数量',
          prop: 'num',
        },
      ],
    }
    const getExpandListFun = (obj) => {
      return function () {
        return getExpandList(obj)
      }
    }
    const table = reactive({
      checked: [],
      data: getList,
      cols: [
        {
          type: 'checkbox',
          key: 'id',
          width: '40px',
        },
        {
          type: 'expand',
          prop: ({ row }) => (
            <s-simple-table
              uid={row.id}
              page={false}
              border
              data={getExpandListFun({ serviceOrderId: row.id })}
              cols={expandData.cols}
            ></s-simple-table>
          ),
        },
        {
          showOverflowTooltip: true,
          label: '服务单号',
          prop: 'serviceCode',
        },
        {
          label: '客户名称',
          //   prop: 'custName',
          showOverflowTooltip: true,
          width: '160px',
          prop: ({ row }) => {
            let tableData = [
              { label: '负责人姓名', date: row.custLinkManName || '----' },
              { label: '负责人邮箱', date: row.custLinkManMail || '----' },
              { label: '负责人电话', date: row.custLlinkManPhone || '----' },
            ]
            return [
              <el-popover placement="top-start" width="200" trigger="hover">
                <el-table
                  data={tableData}
                  size="small"
                  border
                  show-header={false}
                >
                  <el-table-column property="label" label=""></el-table-column>
                  <el-table-column property="date" label=""></el-table-column>
                </el-table>
                <span slot="reference">{row.custName}</span>
              </el-popover>,
            ]
          },
        },
        {
          label: '产品类型',
          showOverflowTooltip: true,
          prop: 'productTypeName',
        },
        {
          label: '语言',
          showOverflowTooltip: true,
          prop: 'language',
        },
        {
          label: '业务类型',
          showOverflowTooltip: true,
          prop: 'businessTypeName',
        },
        {
          label: '服务人员',
          showOverflowTooltip: true,
          //   prop: 'servicePersonal',
          prop: ({ row }) => {
            let tableData = [
              { label: '设计师', date: row.designerEmpName || '----' },
              { label: '制作员', date: row.makerEmpName || '----' },
              { label: '设计助理', date: row.entryClerkName || '----' },
              { label: '质检员', date: row.qualityInspectorName || '----' },
            ]
            return [
              <el-popover placement="top-start" width="200" trigger="hover">
                <el-table
                  data={tableData}
                  size="small"
                  border
                  show-header={false}
                >
                  <el-table-column property="label" label=""></el-table-column>
                  <el-table-column property="date" label=""></el-table-column>
                </el-table>
                <span slot="reference">{row.servicePersonal || '----'}</span>
              </el-popover>,
            ]
          },
        },
        {
          label: '状态',
          showOverflowTooltip: true,
          width: '120',
          //   prop: 'statusName',
          prop: ({ row }) => {
            return [<el-tag type="success">{row.statusName}</el-tag>]
          },
        },
        {
          label: '服务单创建时间',
          width: 180,
          //   showOverflowTooltip: true,
          //   prop: 'createTime',
          prop: ({ row }) => {
            let tableData = [
              { label: '分派服务单', date: row.assignTime || '----' },
              { label: '设计确认', date: row.demandConfirmTime || '----' },
              { label: '验收网站', date: row.custAcceptTime || '----' },
              { label: '网站发布', date: row.publishTime || '----' },
            ]
            return [
              <el-popover placement="top-start" width="200" trigger="hover">
                <el-table
                  data={tableData}
                  size="small"
                  border
                  show-header={false}
                >
                  <el-table-column
                    property="label"
                    label="节点"
                  ></el-table-column>
                  <el-table-column
                    property="date"
                    label="时间"
                  ></el-table-column>
                </el-table>
                <span slot="reference">{row.createTime}</span>
              </el-popover>,
            ]
          },
        },
        {
          label: '剩余周期',
          showOverflowTooltip: true,
          //   width: 140,
          //   prop: 'wholeMakeSurplusCycle',
          prop: ({ row }) => {
            let render = ''
            if (row.wholeMakeSurplusCycle) {
              render = (
                <el-tag
                  color={
                    row.wholeMakeSurplusCycleColor
                      ? row.wholeMakeSurplusCycleColor
                      : '#18B398'
                  }
                  style="color:#fff"
                >
                  {row.wholeMakeSurplusCycle}
                </el-tag>
              )
            }
            return [render]
          },
        },
        {
          label: '操作',
          prop: ({ row }) => {
            return [
              <s-button
                data-pid="provider"
                type="text"
                onClick={() => toDetail(row)}
              >
                查看详情
              </s-button>,
            ]
          },
        },
      ],
    })

    const advSearch = () => {
      openSearchDialog.open({ data: JSON.parse(JSON.stringify(form)) })
    }

    const options = useOptions()
    console.log(options, 88908)
    return {
      checkList,
      check,
    resetFun,
      tableRef,
      table,
      form,
      options,
      openSearchDialog,
      changeSearch,
      advSearch,
    }
  },
})
</script>
<style lang="scss" scoped>
.ul_list {
  margin: 0;
  padding-left: 83px;
  list-style: none;
  // width:calc(100% - 200px);
  // background: #0f0;
  // float:left;
}
.ul_list::after {
  clear: both;
  content: '';
  display: block;
}
.ul_list > li {
  width: 90px;
  height: 30px;
  line-height: 30px;
  color: #666;
  background: #fff;
  border: 1px solid #e1e1e1;
  text-align: center;
  overflow: hidden;
  float: left;
  margin: 0px 10px 10px 0;
  font-size: 12px;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ul_list > .active {
  background: #18b398 !important;
  border: 1px solid #18b398 !important;
  color: #fff !important;
}
</style>
<style>
.services_box .el-form-item__label {
  float: left;
}
</style>
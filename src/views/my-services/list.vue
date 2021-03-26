<template>
  <div>
    <s-dialog v-bind="openSearchDialog" @close="openSearchDialog.close" 
    @changeSearch="changeSearch"/>
    <s-simple-table :data="table.data" :cols="table.cols" v-model="table.checked">
      <s-form slot="form" :model="form" inline>
        <s-form-item label="客户名称" prop="custName">
          <s-input v-model="form.custName" clearable></s-input>
        </s-form-item>
        <s-form-item label="服务单号" prop="serviceCode">
          <s-input v-model="form.serviceCode" clearable></s-input>
        </s-form-item>
        <s-form-item label="服务单号" prop="businessType">
            <el-radio-group v-model="form.businessType" size="medium">
                <el-radio-button :label="item.id" v-for="(item, idx) in options.businessType" :key="idx">{{item.name}}</el-radio-button>
            </el-radio-group>
        </s-form-item>
        <s-form-item label="生产状态" prop="status">
            <el-radio-group v-model="form.status" size="medium">
                <el-radio-button :label="item.id" v-for="(item, idx) in options.status" :key="idx">{{item.name}}</el-radio-button>
            </el-radio-group>
        </s-form-item>
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
          <s-button type="primary" @click="openSearchDialog.open()">高级查询</s-button>
        </s-form-item>
      </s-form>

    <!--批量操作按钮-->
    <div slot="top" class="mb20">
        <el-radio-group v-model="form.status">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="生产中"></el-radio-button>
            <el-radio-button label="已完成"></el-radio-button>
        </el-radio-group>
        <div style="float:right">
            <el-button type="primary" size="small">更换服务人员</el-button>
            <el-button type="primary" size="small">更换设计师</el-button>
            <el-button type="primary" size="small">更换制作员</el-button>
            <el-button type="primary" size="small">更换助理</el-button>
            <el-button type="primary" size="small">领取</el-button>
        </div>
    </div>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getList from '@/api/1700-get-service-order-sevice-order-info-list'
import getExpandList from '@/api/1829-get-service-order-sevice-order-info-get-service-product-{serviceorderid}'
import useOptions from './utils/query'
import useDialog from '@/hooks/use-dialog'

export default defineComponent({
  methods: {

  },
  setup(props, { root }) {
    const changeSearch = function (data) {
        // console.log(data, 9999)
        // data.status = data.status.join(',')
        // data.productType = data.productType.join(',')
        // data.businessType = data.businessType.join(',')
        root.$store.commit('table/update', data)
        // console.log(data, 999, 8888)
    }
    const openSearchDialog = useDialog({
      uid: 'search',
      title: '高级搜索',
      width: '1000px',
      component: require('./dialog/search'),
    })
    const toDetail = (row) => {
          root.$router.push({
              path: `/my-services/detail/${row.id}/${row.serviceCode}`
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
            }
        ]
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
            <s-simple-table uid={row.id} page={false} border data={getExpandListFun({serviceOrderId: row.id})} cols={expandData.cols} ></s-simple-table>              
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
                    {label: '负责人姓名', date: row.custLinkManName || '----'},
                    {label: '负责人邮箱', date: row.custLinkManMail || '----'},
                    {label: '负责人电话', date: row.custLlinkManPhone || '----'},
                ]
                return [
                    <el-popover
                        placement="top-start"
                        width="200"
                        trigger="hover"
                        >
                        <el-table data={tableData} size="small" border 
                        show-header={false}>
                            <el-table-column property="label" label=""></el-table-column>
                            <el-table-column property="date" label=""></el-table-column>
                        </el-table>
                        <span slot="reference">{row.custName}</span>
                    </el-popover>
                ]
            }
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
                    {label: '设计师', date: row.designerEmpName || '----'},
                    {label: '制作员', date: row.makerEmpName || '----'},
                    {label: '设计助理', date: row.entryClerkName || '----'},
                    {label: '质检员', date: row.qualityInspectorName || '----'},
                ]
                return [
                    <el-popover
                        placement="top-start"
                        width="200"
                        trigger="hover"
                        >
                        <el-table data={tableData} size="small" border 
                        show-header={false}>
                            <el-table-column property="label" label=""></el-table-column>
                            <el-table-column property="date" label=""></el-table-column>
                        </el-table>
                        <span slot="reference">{row.servicePersonal || '----'}</span>
                    </el-popover>
                ]
            }
        },
        {
          label: '状态',
          showOverflowTooltip: true,
          width: '120',
        //   prop: 'statusName',
          prop: ({ row }) => {
              return [
                  <el-tag type="success">{row.statusName}</el-tag>
              ]
          }
        },
        {
          label: '服务单创建时间',
          width: 180,
        //   showOverflowTooltip: true,
        //   prop: 'createTime',
            prop: ({ row }) => {
                let tableData = [
                    {label: '分派服务单', date: row.assignTime || '----'},
                    {label: '设计确认', date: row.demandConfirmTime || '----'},
                    {label: '验收网站', date: row.custAcceptTime || '----'},
                    {label: '网站发布', date: row.orderPushTime || '----'},
                ]
                return [
                    <el-popover
                        placement="top-start"
                        width="200"
                        trigger="hover"
                        >
                        <el-table data={tableData} size="small" border show-header={false}>
                            <el-table-column property="label" label="节点"></el-table-column>
                            <el-table-column property="date" label="时间"></el-table-column>
                        </el-table>
                        <span slot="reference">{row.createTime}</span>
                    </el-popover>
                ]
            }
        },
        {
          label: '剩余周期',
          showOverflowTooltip: true,
        //   width: 140,
        //   prop: 'wholeMakeSurplusCycle',
          prop: ({row}) => {
              let render = ''
              if (row.wholeMakeSurplusCycle) {
                  render = <el-tag  color={row.wholeMakeSurplusCycleColor ? row.wholeMakeSurplusCycleColor : '#18B398'}
                  style="color:#fff" >{row.wholeMakeSurplusCycle}</el-tag>
              }
              return [
                  render
              ]
          }
        },
        {
          label: '操作',
          prop: ({row}) => {
              return [
                <s-button data-pid="provider" type="text" onClick={() => toDetail(row)}>
                    查看详情
                </s-button>
              ]
          },
        },
      ],
    })

    const form = reactive({
      serviceCode: '',
      custName: '',
      businessType: '',
      status: '',
    })
    const options = useOptions()
    return {
      table,
      form,
      options,
      openSearchDialog,
      changeSearch
    }
  },
})
</script>
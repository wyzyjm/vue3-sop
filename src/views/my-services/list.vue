<template>
  <div>
    <s-dialog v-bind="openSearchDialog" @close="openSearchDialog.close" 
    @changeSearch="changeSearch"/>
    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" :model="form" inline>
        <!-- <s-form-item label="客户名称" prop="custName">
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
        </s-form-item> -->
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
          <s-button type="primary" @click="openSearchDialog.open()">高级查询</s-button>
        </s-form-item>
      </s-form>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getList from '@/api/1700-get-service-order-sevice-order-info-list'
// import useOptions from './utils/query'
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
    const table = reactive({
      checked: [],
      data: getList,
      cols: [
        {
          type: 'checkbox',
          key: 'id',
          width: '40px',
        }, 
        // {
        //   type: 'expand',
        //   prop: ({ row }) => (
        //     <s-simple-table uid={row.id} data={table.data} cols={table.cols} />
        //   ),
        // },
        {
          showOverflowTooltip: true,
          label: '服务单号',
          prop: 'serviceCode',
        },
        {
          label: '客户名称',
          prop: 'custName',
          showOverflowTooltip: true,
          width: '160px',
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
          prop: 'servicePersonal',
        },
        {
          label: '状态',
          showOverflowTooltip: true,
          prop: 'statusName',
        },
        {
          label: '服务单创建时间',
          width: 160,
          showOverflowTooltip: true,
          prop: 'createTime',
        },
        {
          label: '剩余周期',
          showOverflowTooltip: true,
          prop: 'wholeMakeSurplusCycle',
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
    // const options = useOptions()
    return {
      table,
      form,
    //   options,
      openSearchDialog,
      changeSearch
    }
  },
})
</script>
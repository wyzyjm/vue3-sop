<template>
  <div>
    <s-simple-table v-model="table.checked" :data="table.data" :cols="table.cols">
      <s-form :model="form" slot="form" inline>
        <s-form-item label="产品名称" prop="name" />
        <s-form-item label="状态" prop="status" component="s-group" :data="options" />
        <s-form-item label="售卖渠道">
          <el-cascader :props="{
            label:'name',
            value:'id',
            emitPath:false
          }" v-model="form.salesChannelId" :show-all-levels="false" :options="moreOptions.salesChannels"></el-cascader>
        </s-form-item>
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div slot="top" class="mb20">
        <el-button type="primary" @click="dialog.open">新增</el-button>
        <el-button type="primary" @click="importDialog.open">导入</el-button>
        <el-button :disabled="table.checked.length===0" type="primary" @click="productionSetDialog.open">生产设置</el-button>
      </div>
    </s-simple-table>
    <s-dialog v-bind="dialog" @close="dialog.close" />
    <s-dialog v-bind="productionSetDialog" @close="productionSetDialog.close" />
    <s-dialog v-bind="importDialog" @close="importDialog.close" />
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1416-get-production-config-product-line-search'
import useDialog from '@/hooks/use-dialog'
import useState from '@/hooks/use-state/disable-state'
import _setState from '@/api/1414-put-production-config-product-line-status'
import useSafeParams from '@/hooks/use-router-util/sale-params'
import useOptions from './hooks/use-options'
import { Message } from 'element-ui'

export default defineComponent({
  setup(props, { root }) {
    const { setState, getStateText, options } = useState(
      {
        message: '停用后将不能正常分单，请确认是否停用？',
      },
      (row) => {
        row.status = 1 ^ row.status
        return _setState(row).then(() => {
          Message({
            type: 'success',
            message: '操作成功！',
          })
          root.$store.commit('table/update')
        })
      }
    )

    const form = reactive({
      name: '',
      code: '',
      status: '',
      salesChannelId: '',
    })

    const dialog = useDialog({
      uid: 'add',
      dynamicTitle: (data) => (data.isEdit ? '编辑产品线' : '新增产品线'),
      width: '500px',
      component: require('./dialog/add'),
    })

    const productionSetDialog = useDialog({
      uid: 'productionSetDialog',
      title: '生产设置',
      width: '800px',
      component: require('./dialog/production-set'),
    })

    const importDialog = useDialog({
      uid: 'importDialog',
      title: '导入数据',
      width: '600px',
      component: require('./dialog/import'),
    })

    const view = (data) => {
      root.$router.push(`./detail/${useSafeParams(data)}`)
    }

    const table = reactive({
      checked: [],
      data: getTableData,
      cols: [
        {
          type: 'checkbox',
          key: 'id',
          width: '40px',
        },
        {
          label: '产品名称',
          prop: 'name',
        },
        {
          label: '产品编码',
          prop: 'code',
        },
        {
          label: '售卖渠道',
          prop: 'salesChannelName',
        },
        {
          label: '业务类型',
          prop: 'businessTypeName',
        },
        {
          label: '状态',
          prop: ({ row }) => getStateText(row.status),
        },
        {
          label: '创建时间',
          prop: 'createTime',
        },
        {
          label: '操作',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() =>
                  productionSetDialog.open({ data: row, isEdit: true })
                }
              >
                生产设置
              </s-button>,
              <s-button type="text" onClick={() => setState(row)}>
                {getStateText(1 ^ row.status)}
              </s-button>,
              <s-button type="text" onClick={() => view(row)}>
                查看
              </s-button>,
            ]
          },
        },
      ],
    })

    const moreOptions = useOptions()
    return {
      table,
      dialog,
      importDialog,
      productionSetDialog,
      options,
      moreOptions,
      form,
    }
  },
})
</script>
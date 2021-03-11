<template>
  <div>
    <s-simple-table v-model="table.checked" :data="table.data" :cols="table.cols">

      <s-form slot="form" inline>
        <s-form-item label="服务产品名称" prop="name" />
        <s-form-item label="服务产品类型" prop="type" component="s-group" :data="moreOptions.type" :props="{label:'name',value:'code'}" />
        <s-form-item label="服务产品编码" prop="code" />
        <s-form-item label="状态" prop="status" component="s-group" :data="options" />
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div slot="top" class="mb20">
        <el-button type="primary" @click="add">新增</el-button>
        <el-button type="primary" @click="importDialog.open">导入映射</el-button>
        <el-button type="primary" :disabled="table.checked.length===0" @click="productionSetDialog.open({data:table.checked})">生产流程</el-button>
      </div>
    </s-simple-table>
    <s-dialog v-bind="productionSetDialog" @close="productionSetDialog.close" />
    <s-dialog v-bind="importDialog" @close="importDialog.close" />
    <s-dialog v-bind="relatedDialog" @close="relatedDialog.close" />
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/1494-get-production-config-service-product-search'
import useDialog from '@/hooks/use-dialog'
import useState from '@/hooks/use-state/shelves-state'
import _setState from '@/api/1492-put-production-config-service-product'
import useOptions from './hooks/use-options'

export default defineComponent({
  setup(props, { root }) {
    const { setState, getStateText, options } = useState(undefined, (row) => {
      row.status = 1 ^ row.status
      return _setState(row).then(() => {
        root.$store.commit('table/update')
      })
    })
    const moreOptions = useOptions()

    const productionSetDialog = useDialog({
      uid: 'productionSetDialog',
      title: '生产流程',
      width: '800px',
      component: require('./dialog/production-set'),
    })

    const relatedDialog = useDialog({
      uid: 'relatedDialog',
      title: '关联映射',
      width: '800px',
      component: require('./dialog/related'),
    })

    const importDialog = useDialog({
      uid: 'importDialog',
      title: '导入数据',
      width: '600px',
      component: require('./dialog/import'),
    })

    const view = (data) => {
      root.$router.push(`./detail/${data.id}`)
    }
    const add = () => {
      root.$router.push(`./add`)
    }
    const edit = (data) => {
      root.$router.push(`./edit/${data.id}`)
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
          label: '服务产品名称',
          showOverflowTooltip: true,
          prop: ({ row }) => (
            <s-button type="text" onClick={() => view(row)}>
              {row.name}
            </s-button>
          ),
        },
        {
          label: '服务产品编码',
          showOverflowTooltip: true,
          prop: 'code',
        },
        {
          label: '服务产品类型',
          showOverflowTooltip: true,
          prop: ({ row }) => {
            console.log(moreOptions.type);
            return <s-text props={{props:{label:'name',value:'code'}}} options={moreOptions.type} content={row.type} />
          },
        },
        {
          label: '状态',
          width: '80px',
          prop: ({ row }) => `已${getStateText(row.status)}`,
        },
        {
          label: '创建时间',
          width: '180px',
          prop: 'createTime',
        },
        {
          label: '操作',
          width: '240px',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() => productionSetDialog.open({ data: [row] })}
              >
                生产流程
              </s-button>,
              <s-button
                type="text"
                onClick={() => relatedDialog.open({ data: row, isEdit: true })}
              >
                关联映射
              </s-button>,
              <s-button type="text" onClick={() => setState(row)}>
                {getStateText(1 ^ row.status)}
              </s-button>,
              <s-button type="text" onClick={() => edit(row)}>
                编辑
              </s-button>,
            ]
          },
        },
      ],
    })

    return {
      add,
      table,
      importDialog,
      relatedDialog,
      productionSetDialog,
      options,
      moreOptions,
    }
  },
})
</script>
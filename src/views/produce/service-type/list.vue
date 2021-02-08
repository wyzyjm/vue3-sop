<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" />
    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="状态名称" prop="name" />
        <s-form-item label="状态" prop="status" component="s-group" :data="options.status" tag="el-radio-group" />
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div slot="top">
        <s-button type="primary" @click="dialog.open">新增</s-button>
      </div>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import setServiceTypeStatus from '@/api/1520-put-service-order-status'
import getTableData from '@/api/1522-get-service-order-status-search'
import useDialog from '@/hooks/use-dialog'
import useOptions from './hooks/use-options'
import { MessageBox } from 'element-ui'

export default defineComponent({
  setup(props, { root }) {
    const setState = async (row) => {
      if (row.status === 0) {
        const isContinue = await MessageBox.confirm(
          '停用后服务生产流程配置将无法选择该业务类型，请确认是否继续停用？',
          '停用',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }
        )

        if (!isContinue) return
      }

      return setServiceTypeStatus(row).then(() => {
        root.$store.commit('table/update')
      })
    }

    const dialog = useDialog({
      uid: 'add-service-type',
      title: '新增业务类型',
      width: '500px',
      component: require('./dialog/add-service-type'),
    })

    const options = useOptions()

    const getLabel = (options, value) => {
      const c = options.find((v) => v.value === value)
      return c && c.label
    }

    const table = reactive({
      data: getTableData,
      cols: [
        {
          showOverflowTooltip: true,
          label: '状态名称',
          prop: 'name',
        },
        {
          label: '状态编码',
          prop: 'code',
        },
        {
          label: '状态',
          prop: 'status',
        },
        {
          label: '描述',
          prop: 'description',
        },
        {
          label: '创建时间',
          prop: 'createTime',
        },
        {
          label: '操作项',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() =>
                  setState({
                    ...row,
                    status: 1 ^ row.status,
                  })
                }
              >
                {getLabel(options.status, 1 ^ row.status)}
              </s-button>,
              <s-button
                type="text"
                onClick={() => dialog.open({ data: row, isEdit: true })}
              >
                编辑
              </s-button>,
            ]
          },
        },
      ],
    })

    return {
      options,
      dialog,
      table,
    }
  },
})
</script>
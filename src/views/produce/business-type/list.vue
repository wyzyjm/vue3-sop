<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" />

    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="业务类型" prop="name" />
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
import getTableData from '@/api/1408-get-business-type-search'
import setBusinessType from '@/api/1406-put-business-type'
import useDialog from '@/hooks/use-dialog'
import useOptions from './hooks/use-options'
import { MessageBox } from 'element-ui'

export default defineComponent({
  setup(props, { root }) {
    const setState = async (row) => {
      if (row.status === 0) {
        const isContinue = await MessageBox.confirm(
          '停用后服务产品入驻将无法选择该业务类型，请确认是否继续停用？',
          '停用',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }
        )

        if (!isContinue) return
      }

      return setBusinessType(row).then(() => {
        root.$store.commit('table/update')
      })
    }

    const dialog = useDialog({
      dynamicTitle: (data) => (data.isEdit ? '编辑业务类型' : '新增业务类型'),
      width: '500px',
      uid: 'add-business-type',
      component: require('./dialog/add-business-type'),
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
          label: '业务名称',
          prop: 'name',
        },
        {
          label: '业务code',
          prop: 'code',
        },
        {
          label: '状态',
          prop: 'status',
        },
        {
          label: '创建时间',
          prop: 'createTime',
        },
        {
          label: '操作项',
          prop: ({ row }) => {
            row.status = 1
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
      dialog,
      table,
      options,
    }
  },
})
</script>
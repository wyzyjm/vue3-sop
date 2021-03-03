<template>
  <div>
    <s-simple-table :data="data" :cols="cols">
      <s-form slot="form" :model="form" inline>
        <s-form-item label="服务流程名称" prop="businessFlowName">
          <s-input v-model="form.businessFlowName"></s-input>
        </s-form-item>
        <s-form-item label="状态">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </s-form-item>
        <s-form-item label="关联工作流" prop="flowWorkDefName">
          <s-input v-model="form.flowWorkDefName"></s-input>
        </s-form-item>

        <s-form-item>
          <s-button type="primary" run="form.search">搜索</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
      <div slot="top" class="mb15">
        <el-button type="primary" @click="addFlow">新增流程</el-button>
        <el-button type="primary" @click="flowCopyDialog.open()">复制流程</el-button>
      </div>
    </s-simple-table>
    <s-dialog v-bind="flowEditDialog" @close="flowEditDialog.close" />
    <s-dialog v-bind="flowCopyDialog" @close="flowCopyDialog.close" />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import useDialog from '@/hooks/use-dialog'
import getTableData from '@/api/1482-get-service-order-sevice-business-flow'
import setFlowStatus from '@/api/1552-post-service-order-sevice-business-flow-{id}-{status}'
export default defineComponent({
  setup(props, { root }) {
    const table = reactive({
      data: getTableData,
      cols: [
        {
          showOverflowTooltip: true,
          label: '服务流程名称',
          prop: 'businessFlowName',
        },
        {
          label: '版本',
          prop: 'version',
          width: '160px',
        },
        {
          label: '关联工作流',
          prop: 'flowWorkDefName',
        },
        {
          label: '状态',
          prop: 'statusName',
        },
        {
          label: '描述',
          prop: 'describe',
        },
        {
          label: '创建时间',
          prop: 'creatreTime',
        },
        {
          label: '操作',
          prop: ({ row }) => {
            return [
              <s-button
                type="text"
                onClick={() => flowEditDialog.open({ data: row })}
              >
                查看
              </s-button>,
              <s-button
                type="text"
                onClick={() => flowEditDialog.open({ data: row, isEdit: true})}
              >
                编辑
              </s-button>,
              <s-button
                type="text"
                onClick={() => setStatus(row)}
              >
                {row.status?'停用':'启用'}
              </s-button>
            ]
          }
        }
      ],
      options: [
        {
          value: 0,
          label: '停用'
        }, {
          value: 1,
          label: '启用'
        }
      ]
    })

    const flowEditDialog = useDialog({
      uid: 'flowEditDialog',
      title: '服务流程',
      width: '600px',
      component: require('./dialog/dialog-edit-flow'),
    })

    const flowCopyDialog = useDialog({
      uid: 'flowCopyDialog',
      title: '复制流程',
      width: '600px',
      component: require('./dialog/dialog-copy-flow'),
    })

    const form = reactive({
      businessFlowName: '',
      status: 1,
      flowWorkDefName: ''
    })

    function addFlow() {
      root.$router.push({
        path: "/produce/add-flow"
      });
    }

    function setStatus(row) {
      setFlowStatus({id: row.id, status: row.status?'2':'1'}).then(() => {
        Message({
          type: 'success',
          message: '操作成功！',
        })
        root.$store.commit('table/update')
      })
    }

    return {
      ...toRefs(table),
      form,
      addFlow,
      flowEditDialog,
      flowCopyDialog
    }
  },
})
</script>
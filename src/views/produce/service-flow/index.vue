<template>
  <div>
    <s-simple-table :data="data" :cols="cols" class="cb-table-style">
      <s-form slot="form" :model="form" inline>
        <s-form-item label="服务流程名称" prop="businessFlowName">
          <s-input v-model="form.businessFlowName"></s-input>
        </s-form-item>
        <s-form-item label="状态">
          <el-select v-model="form.status" clearable placeholder="请选择">
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
import { Message } from 'element-ui'
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
          showOverflowTooltip: true,
          width: '60px',
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
          prop: 'describeInfo',
          showOverflowTooltip: true
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
                {row.status==1?'停用':'启用'}
              </s-button>
            ]
          }
        }
      ],
      options: [
        {
          value: 0,
          label: '未启用'
        }, {
          value: 1,
          label: '启用'
        }, {
          value: 2,
          label: '停用'
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
      status: '',
      flowWorkDefName: ''
    })

    function addFlow() {
      root.$router.push({
        path: "/produce/add-flow"
      });
    }

    function setStatus(row) {
      setFlowStatus({id: row.id, status: row.status==1?'2':'1'}).then(() => {
        Message({
          type: 'success',
          message: row.status!=2?'已停用':'已启用',
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
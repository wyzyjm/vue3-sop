<template>
  <div>
    <div class="ce-flow mb20 flow-k">
      <div class="path-flow">
        <flow-path :data="data" @selectFlow="flowSelect" @addFlow="flowAdd" />
      </div>
      <div class="save-flow">
        <el-button type="primary" @click="saveFlow">保存</el-button>
      </div>
    </div>
    <div class="name-flow mb20 flow-k">
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="row-name">
            <span>环节名称：</span>
            <p><el-input v-model="data[index].businessFlowNodeName" placeholder="请输入环节名称"></el-input></p>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="row-name">
            <span>关联工作流节点：</span>
            <p>
              <el-select v-model="data[index].workFlowNodeIdsArray" multiple>
                <el-option 
                  v-for="item in nodeLists" 
                  :key="item.id" 
                  :label="item.name" 
                  :value="item.id">
                </el-option>
              </el-select>
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="row-name">
            <span>生产周期（天）：</span>
            <p><el-input v-model="data[index].produceCycle" placeholder="请输入生产周期"></el-input></p>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="row-name">
            <span>预警周期（天）：</span>
            <p><el-input v-model="data[index].warningCycle" placeholder="请输入预警周期"></el-input></p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="add-table cb-table-style">
      <div class="mb15">
        <el-button type="primary" @click="dialog.open({ nodeId: currFLow.id})">添加服务单状态</el-button>
      </div>
      <s-table :data="statuList" :cols="tabCols" border v-loading="statuLoading"></s-table>
    </div>
    <s-dialog v-bind="dialog" @close="dialog.close" @update="updateStatus"/>
    <s-dialog v-bind="editButton" @close="editButton.close" class="el-dialog-limit" />
    <s-dialog v-bind="addButton" @close="addButton.close" class="el-dialog-limit" />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Message } from 'element-ui'
import flowpath from "../components/flow-path";
import useDialog from '@/hooks/use-dialog';
import flowNodeInit from '@/api/1562-get-service-order-sevice-business-flow-node-init-{businessflowid}'
import flowSaveall from '@/api/1607-post-service-order-sevice-business-flow-node-saveall-{businessflowid}'
import flowNodeAdd from '@/api/1567-post-service-order-sevice-business-flow-node-add-{businessflowid}'
import nodelist from '@/api/1640-get-service-order-sevice-business-flow-{processdefinitionid}-nodelist'
import statusList from '@/api/1582-get-service-order-sevice-business-flow-node-statusrelation-{nodeid}'
import deleteStatus from '@/api/1577-delete-service-order-sevice-business-flow-node-{nodeid}-{statusrelationid}-statusrelation'
export default defineComponent({
  components: { 
    'flow-path':flowpath
  },
  setup(props, { root }) {
    const flowId = root.$route.query.id;
    const workId = root.$route.query.workId;
    const flowData = reactive({
      index: 0,
      data: [],
      currFLow: {},
      nodeLists: [],
      statuList: [],
      statuLoading: false,
      options: [
        {
          value: 1,
          label: '停用'
        }, {
          value: 2,
          label: '启用'
        }
      ],
      tabCols: [
        {
          showOverflowTooltip: true,
          label: '状态名称',
          prop: 'serviceOrderStatusName',
        },
        // {
        //   label: '状态code',
        //   prop: 'businessNodeCode',
        // },
        {
          label: '顺序',
          prop: 'sortOrder',
        },
        {
          label: '关联业务状态',
          prop: 'businessNodeStatusName',
        },
        {
          label: '添加时间',
          prop: 'createTime',
        },
        {
          label: '操作',
          prop: ({ row }) => {
            row.status = 1
            return [
              <s-button
                type="text"
                onClick={() => dialog.open({ nodeId: flowData.currFLow.id, data: row, isEdit: true })}
              >
                编辑
              </s-button>,
              <s-button
                type="text"
                onClick={() => deleteState(row)}
              >
                删除
              </s-button>,
              <s-button
                type="text"
                onClick={() => editButton.open({ nodeId: flowData.currFLow.id, data: row })}
              >
                编辑按钮
              </s-button>,
              <s-button
                type="text"
                onClick={() => addButton.open({ nodeId: flowData.currFLow.id, data: row })}
              >
                新增按钮
              </s-button>
            ]
          },
        }
      ]
    })

    flowId&&flowNodeInit({businessFlowId: flowId, businessFlowNodeType: '1,2,4'})
    .then((res) => {
      flowData.data = res.data || [];
    })

    // 获取工作流节点
    nodelist({ 'processDefinitionId': workId}).then((res) => { 
      flowData.nodeLists = res.data || []; 
    })

    const dialog = useDialog({
      uid: 'add-flow-state',
      dynamicTitle: (data) =>
      data.isEdit ? '编辑服务单状态' : '新增服务单状态',
      width: '500px',
      component: require('./dialog/dialog-add-flow'),
    })

    const editButton = useDialog({
      uid: 'edit-flow-btn',
      dynamicTitle: () => '编辑按钮',
      width: '800px',
      component: require('./dialog/dialog-edit-btn'),
    })

    const addButton = useDialog({
      uid: 'add-flow-btn',
      dynamicTitle: () => '新增按钮',
      width: '600px',
      component: require('./dialog/dialog-add-btn'),
    })

    function flowSelect(index) {
      flowData.index    = index;
      flowData.currFLow = flowData.data[index] || {};
      __getStatuLists();
    }

    function __getStatuLists() {
      flowData.statuLoading = true;
      statusList({ "nodeId": flowData.currFLow.id })
      .then(({ data }) => {
        flowData.statuLoading = false;
        flowData.statuList = data || [];
      })
    }

    function flowAdd(item, callback) {
      flowNodeAdd({ 
        businessFlowNodeType: 2, 
        businessFlowId: item.businessFlowDefId,
        lastNodeId: item.id, 
        orderNum: item.orderNum
      })
      .then(({ data }) => {
        callback&&callback(item.index||0, data);
      })
    }

    function deleteState(row) {
      deleteStatus({ nodeId: flowData.currFLow.id, statusRelationId: row.id})
      .then(() => {
        __getStatuLists();
        Message({
          type: 'success',
          message: '删除成功！',
        })
      })
    }

    function updateStatus() {
      __getStatuLists();
    }

    function saveFlow () {
      flowSaveall({businessFlowId: flowId, serviceBusinessFlowNodeJsonStr: JSON.stringify(flowData.data)})
      .then(({ code }) => {
        code=='SYS0000'&&Message({
          type: 'success',
          message: '保存成功！',
        })
      })
    }

    return {
      ...toRefs(flowData),
      flowSelect,
      saveFlow,
      flowAdd,
      deleteState,
      updateStatus,
      dialog,
      editButton,
      addButton
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
  .ce-flow {
    .save-flow {
      padding:0 15px 15px 0;
      text-align: right;
    }
    .path-flow {
      width: 100%;
      height: 300px;
      overflow-x: auto;
      margin-bottom: 15px;
    }
  }
  .name-flow {
    padding: 20px;
    .row-name {
      display: flex;
      align-items: center;
    }
  }
</style>
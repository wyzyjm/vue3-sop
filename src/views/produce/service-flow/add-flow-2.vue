<template>
  <div>
    <div class="ce-flow mb20 flow-k">
      <div class="path-flow">
        <flow-path :data="data" @selectFlow="flowSelect"/>
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
            <p><el-input v-model="data[index].workFlowNodeIds" placeholder="请选择节点"></el-input></p>
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
    <div class="add-table">
      <s-simple-table :data="tabData" :cols="tabCols">
        <div slot="top" class="mb20">
          <el-button type="primary" @click="dialog.open">新增</el-button>
        </div>
      </s-simple-table>
    </div>
    <s-dialog v-bind="dialog" @close="dialog.close" />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import flowpath from "../components/flow-path";
import useDialog from '@/hooks/use-dialog';
import flowNodeInit from '@/api/1562-get-service-order-sevice-business-flow-node-init-{businessflowid}'
import flowSaveall from '@/api/1607-post-service-order-sevice-business-flow-node-saveall-{businessflowid}'
export default defineComponent({
  components: { 
    'flow-path':flowpath
  },
  setup(props, { root }) {
    const flowId = root.$route.query.id;
    const flowData = reactive({
      index: 0,
      data: [],
      options: [
        {
          value: 1,
          label: '停用'
        }, {
          value: 2,
          label: '启用'
        }
      ],
      tabData: [{name:'test', code:'业务code'}],
      tabCols: [
        {
          showOverflowTooltip: true,
          label: '状态名称',
          prop: 'name',
        },
        {
          label: '业务code',
          prop: 'code',
        },
        {
          label: '顺序',
          prop: 'sx',
        },
        {
          label: '关联业务状态',
          prop: 'a',
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
                onClick={() => dialog.open({ data: row, isEdit: true })}
              >
                编辑
              </s-button>,
            ]
          },
        }
      ]
    })

    const form = reactive({
      businessflowid: '',
      state: 1,
      relation: ''
    })

    flowId&&flowNodeInit({businessFlowId: flowId, businessFlowNodeType: '1,2,4'})
    .then((res) => {
      flowData.data = res.data || [];
    })

    const dialog = useDialog({
      uid: 'add-flow-state',
      dynamicTitle: (data) =>
      data.isEdit ? '编辑服务单状态' : '新增服务单状态',
      width: '500px',
      component: require('./dialog/dialog-add-flow'),
    })

    function addFlow() {
      root.$router.push({
        path: "/",
        query: {}
      });
    }

    function flowSelect(index) {
      flowData.index = index;
      // console.log("flowSelect", flowData.data[index])
    }

    function saveFlow () {
      flowSaveall({businessFlowId: flowId})
      .then((res) => {
        console.log("save", res)
      })
    }

    return {
      ...toRefs(flowData),
      form,
      dialog,
      addFlow,
      flowSelect,
      saveFlow
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
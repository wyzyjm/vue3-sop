<template>
  <div class="EtIiSG4XoP7h8BwC">
    <s-simple-table :data="table.data" :cols="table.cols">
      <s-form slot="form" inline>
        <s-form-item label="服务单号" prop="serviceOrderCode" />
        <s-form-item>
          <s-button type="primary" run="form.search">查询</s-button>
          <s-button run="form.reset">重置</s-button>
        </s-form-item>
      </s-form>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import getTableData from '@/api/2531-get-service-order-interface-push-sevice-order-fail-ist'

export default defineComponent({
  setup() {
    const table = reactive({
      data: getTableData,
      cols: [
        {
          label: '服务单号',
          width: '180px',
          prop: 'orderCode',
        },
        {
          label: '推送时间',
          width: '180px',
          prop: 'pushTime',
        },
        {
          label: '状态',
          width: '180px',
          prop: 'statusName',
        },
        {
          label: '失败次数',
          width: '180px',
          prop: 'failNum',
        },
        {
          label: '失败原因',
          width: '180px',
          prop: 'failReason',
          showOverflowTooltip: true,
        },
        {
          label: '原始数据',
          width: '180px',
          prop: 'failReason',
          prop: ({row}) => {
              return [
                <el-popover
                    placement="top-start"
                    width="500"
                    trigger="hover"
                    content={row.pushInfoJson}>
                    <span slot="reference">{'查看'}</span>
                </el-popover>
              ]
          }
        },
      ],
    })
    console.log(table, 999)
    return {
      table,
    }
  },
})
</script>
<style lang="scss" >
.EtIiSG4XoP7h8BwC {
  .green {
    color: #0dac5d;
    border-color: #0dac5d;
  }
  .red {
    color: #f04134;
    border-color: #f04134;
    .dot{
        background-color: #f04134;
    }
  }
  .dot,
  .ring {
    display: inline-block;
    vertical-align: middle;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 10px;
    background: #0dac5d;
  }
  .ring {
    background: #fff;
    border: 2px solid;
  }
}
</style>
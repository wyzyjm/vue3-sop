<template>
  <div class="box">
    <s-table :data="table.data" :cols="table.cols" border max-height="400">
        <s-form slot="form" :model="form" inline>
            <s-form-item label="当前服务商组织名称" prop="name">
                <s-input v-model="form.name" clearable></s-input>
            </s-form-item>
            <s-form-item label="合作组织状态" prop="status">
                <el-select v-model="form.status" placeholder="请选择" clearable>
                    <el-option label="启用" :value="1"></el-option>
                    <el-option label="停用" :value="0"></el-option>
                </el-select>
            </s-form-item>
            <s-form-item>
                <div class="query-box">
                    <s-button type="primary" run="form.search">查询</s-button>
                    <s-button run="form.reset">重置</s-button>
                </div>
            </s-form-item>
        </s-form>
    </s-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from "@vue/composition-api";
import getOrgList from '@/api/1690-get-frontapi-service-provider-org-org-partner-page'
// var datas = []
export default defineComponent({
  props: {
    data: {
      type: Array,
    },
  },
  setup(props) {
    const table = reactive({
      data: [],
      cols: [
        {
          showOverflowTooltip: true,
          label: "当前服务商组织",
          prop: "sourceOrgName"
        },
        {
          label: "合作服务商/组织",
          showOverflowTooltip: true,
          prop: "targetCompleteOrgName",
            // prop: ({row}) => {
            //     return `${row.targetOrgName}/${row.targetCompleteOrgName}`
            // }
        },
        {
          label: "合作组织状态",
          showOverflowTooltip: true,
        //   prop: "targetOrgStatus",
          prop: ({row}) => {
              if (row.targetOrgStatus == 1) {
                  return '启用'
              } else {
                  return '停用'
              }
          }
        },
      ],
    });
    const form = reactive({
        name: '',
        status: '',
    });
    getOrgList({providerId: props.data[0].id, pageSize: -1}).then(res => {
        table.data = res.data.records || []
        console.log(res)
    })
    console.log(table, 99999)
    return {
      table,
      form,
    };
  }
});
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import url("../style.scss");
</style>
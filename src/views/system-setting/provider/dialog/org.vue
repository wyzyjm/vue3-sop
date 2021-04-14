<template>
  <div class="box">
    <s-simple-table :data="table.data" :cols="table.cols" border max-height="400">
        <s-form slot="form" :model="form" inline size="small" style="margin-bottom:10px;">
            <s-form-item label="当前服务商组织名称" prop="name">
                <s-input v-model="form.name" clearable></s-input>
            </s-form-item>
            <s-form-item label="合作组织状态" prop="targetOrgStatus">
                <el-select v-model="form.targetOrgStatus" placeholder="请选择" clearable>
                    <el-option label="启用" :value="1"></el-option>
                    <el-option label="停用" :value="0"></el-option>
                </el-select>
            </s-form-item>
            <s-form-item>
                <div class="query-box">
                    <s-button type="primary" run="form.search">查询</s-button>
                    <!-- <s-button run="form.reset">重置</s-button> -->
                </div>
            </s-form-item>
        </s-form>
    </s-simple-table>
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
    const getOrgListFun = () => {
      return function () {
          console.log(form, 999)
        return getOrgList({providerId: props.data[0].id})
      }
    }
    const table = reactive({
      data: getOrgListFun(),
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
        },
        {
          label: "合作组织状态",
          width: '140px',
          showOverflowTooltip: true,
        //   prop: "targetOrgStatus",
          prop: ({row}) => {
              return [
                <el-tag type={row.targetOrgStatus == 1 ? 'success' : 'danger'}>
                {row.targetOrgStatus == 1 ? '启用' : '停用'}</el-tag>
              ]
          }
        },
      ],
    });
    const form = reactive({
        name: '',
        targetOrgStatus: '',
    });

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
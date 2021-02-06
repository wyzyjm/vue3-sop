<template>
  <div class="box">
    <s-simple-table :data="table.data" :cols="table.cols">
      <div slot="top" class="mt40 mb20">
        <el-button type="primary">新增</el-button>
      </div>
        <s-form slot="form" :model="form" inline>
            <s-form-item label="服务商名称" prop="providerName">
            <s-input v-model="form.providerName"></s-input>
            </s-form-item>
            <s-form-item label="服务商类型" prop="category">
            <el-select v-model="form.category" placeholder="请选择">
                <el-option
                v-for="item in table.category"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                ></el-option>
            </el-select>
            </s-form-item>
            <s-form-item label="状态" prop="status">
            <el-select v-model="form.status" placeholder="请选择">
                <el-option
                v-for="item in table.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                ></el-option>
            </el-select>
            </s-form-item>
            <s-form-item label="合作类型" prop="basictype">
            <el-select v-model="form.basictype" placeholder="请选择">
                <el-option
                v-for="item in table.basictype"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                ></el-option>
            </el-select>
            </s-form-item>
            <s-form-item>
                <div class="query-box">
                    <s-button type="primary" run="form.search">查询</s-button>
                    <s-button run="form.reset">重置</s-button>
                </div>
            </s-form-item>
        </s-form>
    </s-simple-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from "@vue/composition-api";
import { getProviderList } from "./service";
import { category, status, basictype } from "./utils/form-query";

export default defineComponent({
  setup() {
    const view = () => {
      return getProviderList().then(response => {
        console.log(111, response);
      });
    };
    const table = reactive({
      data: getProviderList,
      cols: [
        {
          type: "expand",
          prop: ({ row }) => (
            <s-simple-table uid={row.id} data={table.data} cols={table.cols} />
          )
        },
        {
          showOverflowTooltip: true,
          label: "工单名称",
          prop: "groupName"
        },
        {
          label: "生产单ID",
          prop: "orderCode",
          width: "160px"
        },
        {
          label: "客户名称",
          prop: "custName"
        },
        {
          label: "分公司",
          prop: "subCompanyName"
        },
        {
          label: "订单来源",
          prop: "orderSourceName"
        },
        {
          label: "状态",
          prop: "workStatus"
        },
        {
          label: "创建日期",
          prop: "strCreateDate"
        },
        {
          label: "操作",
          prop: () => {
            return [
              <s-button data-pid="user" type="text" onClick={view}>
                查看
              </s-button>
            ];
          }
        }
      ],
      category,
      basictype,
      status
    });
    const form = reactive({
      providerName: "",
      basictype: "",
      status: "",
      category: ""
    });

    return {
      table,
      form
    };
  }
});
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import url("./style.scss");
</style>
<template>
  <div class="box">
    <s-simple-table :data="table.data" :cols="table.cols">
        <s-form slot="form" :model="form" inline>
            <!-- <s-form-item label="售卖渠道" prop="salesChannelId">
                <s-input v-model="form.salesChannelId" clearable></s-input>
            </s-form-item> -->
            <s-form-item label="产品名称" prop="name">
                <s-input v-model="form.name" clearable></s-input>
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
import getProviderScope from '@/api/1416-get-production-config-product-line-search'
export default defineComponent({
  setup() {
    const table = reactive({
      data: getProviderScope,
      cols: [
        {
          showOverflowTooltip: true,
          label: "售卖渠道",
          prop: "salesChannelName"
        },
        {
          label: "产品名称",
          showOverflowTooltip: true,
          prop: "name",
        },
        {
          label: "业务类型",
          showOverflowTooltip: true,
          prop: "businessTypeName",
        },
        {
          label: "入驻时间",
          prop: "createTime",
          showOverflowTooltip: true,
        },

      ],
    });
    const form = reactive({
        name: ''
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
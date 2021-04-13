<template>
  <div class="box">
    <s-table :data="table.data" :cols="table.cols" border max-height="400">
        <s-form slot="form" :model="form" >
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
    </s-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from "@vue/composition-api";
import getProviderScope from '@/api/1416-get-production-config-product-line-search'
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
          label: "售卖渠道",
          prop: "completeSalesChannelName"
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
    getProviderScope({serviceProviderId: props.data[0].id, pageSize: -1}).then(res => {
        table.data = res.data.records || []
        
    })
    console.log(table)
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
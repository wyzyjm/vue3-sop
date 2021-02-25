<template>
  <div>
    <div class="query-head mb20 flow-k">
      <span>客户名称：</span>
      <p>
        <el-input v-model="form.name" placeholder="请输入客户名称"></el-input>
      </p>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="query-info mb20 flow-k">
        <div class="info-cust">
            <el-row class="info-cust-item">
                <b>客户信息</b>
            </el-row>
            <el-row class="info-cust-item" :gutter="20">
                <el-col :span="8">会员帐号：CEO4123421</el-col>
                <el-col :span="8">会员邮箱：123@300.cn</el-col>
                <el-col :span="8">会员联系方式：1234123421</el-col>
            </el-row>
            <el-row class="info-cust-item" :gutter="20">
                <el-col :span="8">客户名称：中企动力科技股份有限公司</el-col>
                <el-col :span="8">保护商务：CE</el-col>
                <el-col :span="8">商务联系方式：13700000000</el-col>
            </el-row>
        </div>

        <el-tabs v-model="activeWeb" type="card">
            <el-tab-pane label="网站产品" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="设计服务" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="运营服务" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="翻译服务" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>

        <el-tabs v-model="activePro" type="card">
            <el-tab-pane label="客户服务单" name="first">客户服务单</el-tab-pane>
            <!-- <el-tab-pane label="客户工单" name="first">客户工单</el-tab-pane> -->
        </el-tabs>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
export default defineComponent({
  setup(props, { root }) {
    let custData = reactive({
        activeWeb: 'first',
        activePro: 'first'
    })

    let form = reactive({
      name: ''
    })

    const search = (form) => {
      console.log("search")
    }

    return {
      ...toRefs(custData),
      form,
      search
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
  .query-head {
    display: flex;
    align-items: center;
    padding: 20px;
    p {
        padding: 0 20px;
    }
  }
  .query-info {
      padding: 20px;
      .info-cust {
          .info-cust-item {
              font-size: 12px;
              margin-bottom: 20px;
              color: $sop-color-9;
              b {
                  font-size: 14px;
                  color: $sop-color-0;
              }
          }
      }
  }
</style>
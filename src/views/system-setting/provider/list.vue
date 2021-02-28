<template>
  <div class="box">
    <s-simple-table :data="table.data" :cols="table.cols">
      <div slot="top" class="mt40 mb20">
        <el-button type="primary" @click="toPath()">新增</el-button>
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
import getProviderList from '@/api/1306-get-frontapi-service-provider-pagelist'
import setStatus from '@/api/1302-post-frontapi-service-provider-change-status'
import { category, status, basictype } from "./utils/form-query";
import { MessageBox } from 'element-ui'
const that = this
export default defineComponent({
  methods: {
      toPath () {
          this.$router.push({
              path: '/system-setting/provider/add'
          })
      },
  },
  setup() {
    const view = () => {
    //     console.log(32789372817978)
    //   return getProviderList().then(response => {
    //       console.log(response)
    //     // console.log(111, response.data.records);
    //   }).catch(err => {
    //       console.log(err)
    //   });
    };
    const setState = (id, status) => {
        console.log(id, status)
        let msg = ''
        let title = ''
        if (status == 1) {
            title = '暂停'
            msg = '暂停后将不能自动分单到该服务商，请确认是否继续？'
        } else if (status == 2) {
            title = '清退'
            msg = '清退后将不能自动分单到该服务商，请确认是否继续？'
        } else if (status == 3) {
            title = '关闭'
            msg = '关闭后将该服务商账号将不能登录系统，请确认是否继续？'
        } else {
            title = '启用'
            msg = '请确认是否启用该服务商？'
        }
        MessageBox.confirm(msg, title, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            return setStatus({id, status}).then(({ msg }) => {
                console.log(msg)
                // root.$store.commit('table/update')
            })
        }).catch(() => {
        
        });
    }
    const toPath = () => {
        console.log(3213213)
        
          that.$router.push({
              path: '/system-setting/provider/add'
          })
    }
    const table = reactive({
      data: getProviderList,
      cols: [
        // {
        //   type: "expand",
        //   prop: ({ row }) => (
        //     <s-simple-table uid={row.id} data={table.data} cols={table.cols} />
        //   )
        // },
        {
          showOverflowTooltip: true,
          label: "服务商名称",
          prop: "basicName"
        },
        {
          label: "服务商类型",
        //   prop: "category",
          width: "160px",
          prop: ( { row } ) => {
              return row.category == 2 ? '企业' : '个人'
          }
        },
        {
          label: "合作类型",
        //   prop: "basicType",
          prop: ( { row } ) => {
              return row.basicType == 2 ? '非自营' : '自营'
          }
        },
        {
          label: "联系人姓名",
          prop: "contactUsername"
        },
        {
          label: "联系人手机",
          prop: "contactPhone"
        },
        {
          label: "联系人邮箱",
          prop: "contactEmail"
        },
        {
          label: "状态",
          prop: "basicStatus"
        },
        {
          label: "操作",
          width: '260px',
          prop: ( { row } ) => {
            return [
              <s-button data-pid="user" type="text" onClick={view}>
                添加组织
              </s-button>,
              <s-button data-pid="user" type="text" onClick={view}>
                添加人员
              </s-button>,
              <s-button data-pid="user" type="text" onClick={() => toPath(row)}>
                编辑
              </s-button>,
            <el-dropdown>
            <span class="el-dropdown-link el-button--text" style="margin-left:10px;cursor:pointer">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" data-pid="user">
                <el-dropdown-item data-pid="user">
                    <div onClick={() => setState(row.id, 1)}>暂停</div>
                </el-dropdown-item>
                <el-dropdown-item>
                    <div onClick={() => setState(row.id, 2)}>清退</div>
                </el-dropdown-item>
                <el-dropdown-item>
                    <div onClick={() => setState(row.id, 3)}>关闭</div>
                </el-dropdown-item>
                <el-dropdown-item>服务范围</el-dropdown-item>
                <el-dropdown-item>服务周期</el-dropdown-item>
                <el-dropdown-item>合作组织</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
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
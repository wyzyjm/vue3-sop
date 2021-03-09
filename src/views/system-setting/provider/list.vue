<template>
  <div class="box">
    <s-dialog v-bind="openDialog" @close="openDialog.close" />
    <s-dialog v-bind="openOrgDialog" @close="openOrgDialog.close" />
    <s-simple-table :data="table.data" :cols="table.cols">
      <div slot="top" class="mt40 mb20">
        <el-button type="primary" @click="toPath()">新增</el-button>
      </div>
        <s-form slot="form" :model="form" inline>
            <s-form-item label="服务商名称" prop="providerName">
            <s-input v-model="form.providerName" clearable></s-input>
            </s-form-item>
            <s-form-item label="服务商类型" prop="category">
            <el-select v-model="form.category" placeholder="请选择" clearable>
                <el-option
                v-for="item in table.category"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                ></el-option>
            </el-select>
            </s-form-item>
            <s-form-item label="状态" prop="status">
            <el-select v-model="form.status" placeholder="请选择" clearable>
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
// import getProviderScope from '@/api/1416-get-production-config-product-line-search'
import { category, status, basictype } from "./utils/form-query";
import { MessageBox } from 'element-ui'
import useDialog from '@/hooks/use-dialog'
export default defineComponent({
  methods: {
      toPath () {
          this.$router.push({
              path: '/system-setting/provider/add'
          })
      },
  },
  setup(props, {root} ) {
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
            return setStatus({id, status}).then(({ msg, status }) => {
                if (status == 200) {
                    root.$message.success(title + '成功')
                } else {
                    root.$message.error(msg)
                }
                root.$store.commit('table/update')
            })
        }).catch(() => {
        
        });
    }
    const openDialog = useDialog({
      uid: 'getProviderScope',
      title: '服务范围',
      width: '800px',
      component: require('./dialog/scope'),
    })

    const openOrgDialog = useDialog({
      uid: 'getOrgList',
      title: '合作组织',
      width: '800px',
      component: require('./dialog/org'),
    })
    
    // () => {
    //     console.log(321)
    //     getProviderScope().then(res => {
    //         console.log(res)
    //     })
    // }
    const toPath = (row) => {
          root.$router.push({
              path: `/system-setting/provider/edit/${row.category ? row.category : 1}/${row.id}`
          })
    }
    const toDetail = (row) => {
          root.$router.push({
              path: `/system-setting/provider/detail/${row.category}/${row.id}`
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
          showOverflowTooltip: true,
        //   prop: "category",
          width: "160px",
          prop: ( { row } ) => {
              return row.category == 2 ? '企业' : '个人'
          }
        },
        {
          label: "合作类型",
          showOverflowTooltip: true,
        //   prop: "basicType",
          prop: ( { row } ) => {
              return row.basicType == 2 ? '非自营' : '自营'
          }
        },
        {
          label: "联系人姓名",
          prop: "contactUsername",
          showOverflowTooltip: true,
        },
        {
          label: "联系人手机",
          prop: "contactPhone",
          showOverflowTooltip: true,
        },
        {
          label: "联系人邮箱",
          prop: "contactEmail",
          showOverflowTooltip: true,
        },
        {
          label: "状态",
          prop: ( { row } ) => {
              if (row.basicStatus == 0) {
                  return '服务中'
              } else if (row.basicStatus == 1) {
                  return '暂停'
              } else if (row.basicStatus == 2) {
                  return '清退中'
              } else if (row.basicStatus == 3) {
                  return '关闭'
              }
          }
        },
        {
          label: "操作",
          width: '190px',
          prop: ( { row } ) => {
            let status = [
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
                        <el-dropdown-item>
                            <div onClick={() => openDialog.open({data: [row]})}>服务范围</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => openOrgDialog.open({data: [row]})}>合作组织</div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                ,
                
                    <el-dropdown>
                    <span class="el-dropdown-link el-button--text" style="margin-left:10px;cursor:pointer">
                        更多<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" data-pid="user">
                        <el-dropdown-item data-pid="user">
                            <div onClick={() => setState(row.id, 0)}>启用</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => setState(row.id, 2)}>清退</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => setState(row.id, 3)}>关闭</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => openDialog.open({data: [row]})}>服务范围</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => openOrgDialog.open({data: [row]})}>合作组织</div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                ,
                
                    <el-dropdown>
                    <span class="el-dropdown-link el-button--text" style="margin-left:10px;cursor:pointer">
                        更多<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" data-pid="user">
                        <el-dropdown-item data-pid="user">
                            <div onClick={() => setState(row.id, 0)}>启用</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => setState(row.id, 3)}>关闭</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => openDialog.open({data: [row]})}>服务范围</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => openOrgDialog.open({data: [row]})}>合作组织</div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                ,
                
                    <el-dropdown>
                    <span class="el-dropdown-link el-button--text" style="margin-left:10px;cursor:pointer">
                        更多<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" data-pid="user">
                        <el-dropdown-item data-pid="user">
                            <div onClick={() => setState(row.id, 0)}>启用</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => openDialog.open({data: [row]})}>服务范围</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div onClick={() => openOrgDialog.open({data: [row]})}>合作组织</div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                
            ]
            return [
              <s-button data-pid="user" type="text" onClick={() => toDetail(row)}>
                查看详情
              </s-button>,
              <s-button data-pid="user" type="text" onClick={() => toPath(row)}>
                编辑
              </s-button>,
              status[row.basicStatus]
            ]          
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
      form,
      openDialog,
      openOrgDialog
    };
  }
});
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import url("./style.scss");
</style>
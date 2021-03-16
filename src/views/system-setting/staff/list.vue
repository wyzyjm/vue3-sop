<template>
  <div>
    <s-simple-table :data="table.data" :cols="table.cols">
      <div slot="top" class="mt40 mb20">
        <el-button type="primary" @click="toPath('/system-setting/staff/add')">新增</el-button>
        <el-button type="primary">批量授权</el-button>
        <el-button >导入</el-button>
      </div>
      <s-form slot="form" :model="form" inline>
        <s-form-item label="员工账号" prop="workMail">
          <s-input v-model="form.workMail" clearable></s-input>
        </s-form-item>
        <s-form-item label="员工姓名" prop="name">
          <s-input v-model="form.name" clearable></s-input>
        </s-form-item>
        <s-form-item label="员工状态" prop="state">
            <el-select v-model="form.state" placeholder="请选择" clearable>
                <el-option :value="0" label="停用"></el-option>
                <el-option :value="1" label="启用"></el-option>
            </el-select>
        </s-form-item>
        <!-- <s-form-item label="授权角色" prop="state">
            <el-select v-model="form.roleId" placeholder="请选择" clearable>
                <el-option :value="0" label="停用"></el-option>
            </el-select>
        </s-form-item> -->
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
import getList from '@/api/1342-get-frontapi-service-provider-employee-list'
import changeSuper from '@/api/1338-get-frontapi-service-provider-employee-change-superman'
import changeStatus from '@/api/1340-get-frontapi-service-provider-employee-change-status'
import getRoleList from '@/api/1366-get-common-service-role-group-list'
export default defineComponent({
  methods: {
      toPath (path) {
          this.$router.push({
              path
          })
      },
      getRoleList () {
          getRoleList().then(res => {
              console.log(res)
          })
      }
  },
  created () {
    //   this.getRoleList()
  },
  setup(props, {root} ) {
    const toPath = (row) => {
          root.$router.push({
              path: `/system-setting/staff/edit/${row.id}`
          })
    }
    const toDetail = (row) => {
          root.$router.push({
              path: `/system-setting/staff/detail/${row.id}`
          })
    }
    const setState = (row) => {
        let status = 0
        if (row.state != 1) {
            status = 1
        } else {
            root.$confirm('停用后该账号将无法正常登陆系统，请确认是否继续停用？', '停用', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    return changeStatus({
                        id: row.id,
                        status,
                    }).then(({ msg, status }) => {
                        if (status == 200) {
                            root.$message.success('已停用')
                        } else {
                            root.$message.error(msg)
                        }
                        root.$store.commit('table/update')
                    })
                }).catch(() => {
                
                });
                return false
        }
      return changeStatus({
          id: row.id,
          status,
      }).then(({ msg, status }) => {
        if (status == 200) {
            root.$message.success('已启用')
        } else {
            root.$message.error(msg)
        }
        root.$store.commit('table/update')
      })
    }
    const table = reactive({
      data: getList,
      cols: [
        {
          showOverflowTooltip: true,
          label: '账号',
        //   prop: 'workMail',
          prop: ({ row }) => {
              return [
                  <el-link onClick={() => toDetail(row)} target="_blank">{row.workMail}</el-link>
              ]
          }
        },
        {
          label: '姓名',
          showOverflowTooltip: true,
          prop: 'employeeName',
          width: '160px',
        },
        {
          label: '所属服务商',
          showOverflowTooltip: true,
          prop: 'sourceName',
        },
        {
          label: '所属组织',
          prop: 'orgName',
          showOverflowTooltip: true,
        },
        {
          label: '角色',
        //   prop: 'position',
        showOverflowTooltip: true,
          prop: ({ row }) => {
              let roleArr = []
              if (!row.roleMap) {
                  return ''
              }
              Object.values(row.roleMap).map(val => {
                  roleArr.push(val)
              })
              return roleArr.join(',')
          }
        },
        {
          label: '状态',
          prop: 'stateName',
          showOverflowTooltip: true,
        },
        {
          label: '超级管理员',
        //   prop: 'isSuper',
        align:'center',
          prop: ({row}) => {
              return [
                <el-switch
                value={row.isSuper ? true : false}
                onChange={(val) => {
                    changeSuper({id: row.id, superman: val ? 1 : 0}).then(res => {
                        if (res.status == 200) {
                            root.$message.success(val ? '已开通' : '已关闭')
                            row.isSuper = val
                            root.$store.commit('table/update')
                        } else {
                            root.$message.success('开通失败')
                        }
                    }).catch(err => {
                        console.log(err, '超级管理员接口失败')
                    })
                }}>
                </el-switch>
              ]              
          }
        },
        {
          label: '操作',
          width: 110,
          prop: ({row}) => {
            return [
              <s-button data-pid="user" type="text" onClick={() => toPath(row)}>
                编辑
              </s-button>,
              <s-button type="text" onClick={() => setState(row)}>
                {row.state != 1 ? '启用' : '停用'}
              </s-button>,
            ]
          },
        },
      ],
    })

    const form = reactive({
      workMail: '',
      name: '',
      state: '',
      roleId: '',
    })

    return {
      table,
      form,
    }
  },
})
</script>
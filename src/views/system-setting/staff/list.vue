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

export default defineComponent({
  methods: {
      toPath (path) {
          this.$router.push({
              path
          })
      },
  },
  setup() {
    const table = reactive({
      data: getList,
      cols: [
        {
          showOverflowTooltip: true,
          label: '账号',
          prop: 'workMail',
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
        },
        {
          label: '角色',
          prop: 'position',
        },
        {
          label: '状态',
          prop: 'stateName',
        },
        // {
        //   label: '操作',
        //   prop: () => {
        //     return [
        //       <s-button data-pid="user" type="text">
        //         查看
        //       </s-button>,
        //     ]
        //   },
        // },
      ],
    })

    const form = reactive({
      workMail: '',
      name: '',
      state: '',
    })

    return {
      table,
      form,
    }
  },
})
</script>
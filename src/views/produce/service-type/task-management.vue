<template>
  <div class="console-box task-manage-box">
    <page-header :title="`${map[orgType]}任务管理`">
      <div slot="right" class="fr" v-if="orgType==='HQ'">
        <el-date-picker size="mini" v-model="month" type="month" placeholder="选择月" value-format="yyyy-MM"></el-date-picker>
        <el-button :disabled="!month" class="ml10" size="mini" type="primary" :loading="loading.is('dispatch')" @click="dispatch">下发任务</el-button>
        <el-button :disabled="!month" class="ml10" size="mini" type="primary" :loading="loading.is('refreshOrg')" @click="refreshOrg">刷新组织</el-button>
        <el-button class="ml10" :disabled="!month" type="primary" size="mini">
          <a class="ml10" :disabled="!month" download :href="exportURL" target="_blank" style="float:none;display:inline;line-height:1;margin:0;color:#fff;">导出</a>
        </el-button>
      </div>
    </page-header>
    <ce-screen-form size="small" :keys="keys" @change="change"></ce-screen-form>
    <div class="mt20">
      <el-button size="small" v-if="orgType==='AREA'||orgType==='SUB'" type="primary" :disabled="submitTaskButtonIsDisabled" @click="submitTask">提交任务</el-button>
      <el-button v-if="orgType!=='SUB'" size="small" type="primary" :disabled="examineButtonIsDisabled" @click="examine">审批</el-button>
    </div>
    <el-table :row-class-name="tableRowClassName" class="mt20" :data="tableData" border v-loading="loading.is('table')">
      <el-table-column label="机构名称">
        <template slot-scope="scope">
          <div :class="'org-type-'+scope.row.orgType">
            <el-button :loading="loading.is(scope.row.id)" icon="el-icon-plus" v-if="scope.row.orgType!=='DEPT'&&!isExpand(scope)" type="text" @click="loadNode(scope)"></el-button>
            <el-button icon="el-icon-minus" v-if="scope.row.orgType!=='DEPT'&&isExpand(scope)" type="text" @click="removeChildNode(scope)"></el-button>
            <el-checkbox v-if="isShowCheckbox(scope)" v-model="checked" :label="scope.row.id">{{scope.row.orgName}}</el-checkbox>
            <span v-else class="ml10">{{scope.row.orgName}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="机构ID" width='100px' prop="orgId"></el-table-column>
      <el-table-column label="商务月" width='100px' prop="month"></el-table-column>
      <el-table-column label="市场分类" prop="marketId">
        <template slot-scope="scope">{{marketCategory[scope.row.marketId]}}</template>
      </el-table-column>
      <el-table-column label="基本任务" width='150px' prop="taskNum">
        <template slot-scope="scope">
          <template v-if="scope.row.isModify">
            <el-input-number v-model="scope.row.num" :controls="false" :min="1"></el-input-number>
            <!-- <el-input type="number" min="1" v-model="scope.row.taskNum"></el-input> -->
          </template>
          <template v-else>
            {{scope.row.taskNum}}
          </template>
        </template>
      </el-table-column>
      <el-table-column label="分司任务汇总" width='150px' prop="subTaskTotal">
        <template slot-scope="scope">
          <span v-if="scope.row.orgType==='DEPT'">--</span>
          <span v-else>{{scope.row.subTaskTotal}}</span>
        </template>
      </el-table-column>
      <el-table-column label="部门任务汇总" width='150px' prop="deptTaskTotal"></el-table-column>
      <el-table-column label="区域分司任务状态" width='130px' prop="areaOrgTaskState">
        <template slot-scope="scope">
          <el-tag size="small" :type="['danger','info','info','danger','danger','success','success'][scope.row.areaOrgTaskState]">{{state.filter(v=>v.value===scope.row.areaOrgTaskState)[0].label}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="部门任务状态" width='130px' prop="deptTaskState">
        <template slot-scope="scope">
          <el-tag size="small" :type="['danger','info','info','danger','danger','success','success'][scope.row.deptTaskState]">{{state.filter(v=>v.value===scope.row.deptTaskState)[0].label}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="110" fixed="right" prop="deptTaskState">
        <template slot-scope="scope">
          <template v-if="scope.row.isModify">
            <el-button type="text" @click="modifySave(scope.row)">保存</el-button>
            <el-button type="text" @click="modifyCancel(scope.row)">取消</el-button>
          </template>
          <template v-else>
            <el-button type="text" @click="modify(scope.row)">修改</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <ce-pagination class="mt20" layout="sizes, prev, next, jumper, ->, slot" @change="change"></ce-pagination>
    <ce-simple-dialog></ce-simple-dialog>
  </div>
</template>
<script>
import Loading from '@ui/utils/loading'
import pageHeader from '@components/page-header'
import formatDate from '@util/format-date'

export default {
  components: {
    pageHeader,
  },
  data() {
    return {
      marketCategory: {
        1: '一类',
        2: '二类',
        3: '三类',
      },
      map: {
        HQ: '总部',
        AREA: '区域',
        SUB: '分司',
      },
      state: [
        {
          label: '未提交',
          value: 0,
        },
        {
          label: '待区域审批 ',
          value: 1,
        },
        {
          label: '待总部审批',
          value: 2,
        },
        {
          label: '区域打回 ',
          value: 3,
        },
        {
          label: '总部打回',
          value: 4,
        },
        {
          label: '区域审批通过',
          value: 5,
        },
        {
          label: '总部审批通过',
          value: 6,
        },
      ],
      month: '',
      totalCount: 0,
      tableData: [],
      checked: [],
      loading: new Loading(),
      cache: {},
      orgType: this.$route.query.orgType || 'HQ',
    }
  },
  computed: {

    // examineButtonIsDisabled() {
    //   if (this.checked.length === 0) {
    //     if (this.orgType === 'HQ' || this.orgType === 'AREA') {
    //       return this.tableData.every(
    //         (v) => this.checked.indexOf(v.orgId) === -1
    //       )
    //     }
    //   }
    // },
    submitTaskButtonIsDisabled() {
      return this.tableData.length === 0
    },
    keys() {
      const keys = ['commercialMonth']
      if (this.orgType === 'HQ') {
        keys.push('taskState')
      }
      return keys.join()
    },
  },
  watch: {
    $route: function () {
      this.$router.go(0)
    },
  },
  methods: {
    tableRowClassName({ row }) {
      return `row_${row.orgType}`
      // if (row.orgType === 'DEPT') return 'blue'
      // if (row.orgType === 'AREA') return 'red'
      // if (row.orgType === 'SUB') return 'green'
    },
    isShowCheckbox({ row }) {
      return (
        (this.orgType === 'HQ' && row.orgType === 'AREA') ||
        (this.orgType === 'SUB' && row.orgType === 'SUB') ||
        (this.orgType === 'AREA' && row.orgType === 'SUB')
      )
    },
    dispatch() {
      this.loading.open('dispatch')
      this.$api('performance.nextOrgTask', {
        month: this.month,
      })
        .then(() => {
          this.loading.close('dispatch')
          this.$store.commit('UPDATE_ALL_TABLE_DATA')
          this.$msgbox({
            type: 'success',
            message: '下发任务成功！',
          })
        })
        .catch(() => {
          this.loading.close('dispatch')
        })
    },
    refreshOrg() {
      this.loading.open('refreshOrg')
      this.$api('performance.nextOrgTask', {
        month: this.month,
        isRefresh: true,
      })
        .then(() => {
          this.loading.close('refreshOrg')
          this.$store.commit('UPDATE_ALL_TABLE_DATA')
          this.$msgbox({
            type: 'success',
            message: '刷新组织成功！',
          })
        })
        .catch(() => {
          this.loading.close('refreshOrg')
        })
    },
    submitTask() {
      this.$store.commit('OPEN_DIALOG', {
        component: require('./dialog/submit-task').default,
        props: {
          data: this.tableData,
        },
      })
    },
    examine() {
      this.$store.commit('OPEN_DIALOG', {
        component: require('./dialog/approve').default,
        props: {
          data: this.tableData.filter((v) => this.checked.indexOf(v.id) !== -1),
        },
      })
    },
    change(params) {
      if (!params.startMonth) {
        params.startMonth = formatDate(new Date(), 'yyyy-MM')
      }

      this.loading.open('table')
      return this.$api('performance.listPage', {
        ...{ orgType: this.orgType },
        ...params,
      }).then((response) => {
        this.tableData = response.list
        this.totalCount = response.totalCount
        this.loading.close('table')
        this.cache = {}
      })
    },
    isExpand({ row, $index }) {
      const next = this.tableData[$index + 1]
      if (!next) return false
      return next.orgParentId === row.orgId
    },
    addChildNode({ row, $index }) {
      this.tableData.splice($index + 1, 0, ...this.cache[row.orgId])
    },
    removeChildNode({ row, $index }) {
      for (var i = $index + 1, l = 0; i < this.tableData.length; i++, l++) {
        if (this.tableData[i].orgType === row.orgType) {
          break
        }
        if (row.orgType === 'SUB' && this.tableData[i].orgType !== 'DEPT') {
          break
        }
      }
      this.tableData.splice($index + 1, l)
    },
    loadNode({ row }) {
      if (Array.isArray(this.cache[row.orgId])) {
        this.addChildNode(...arguments)
        return
      }
      this.loading.open(row.id)
      this.$api('performance.getChildrenOrgTaskData', {
        orgParentId: row.orgId,
        parentMonth: row.month,
      })
        .then((response) => {
          this.loading.close(row.id)
          this.cache[row.orgId] = response.list
          this.addChildNode(...arguments)
        })
        .catch(() => {
          this.loading.close(row.id)
        })
    },
    modify(row) {
      this.$set(row, 'isModify', true)
      this.$set(row, 'num', row.taskNum)
    },
    modifySave(row) {
      this.$api('performance.updateOrgTaskData', {
        id: row.id,
        taskNum: row.num,
      })
        .then(() => {
          this.$message.success('修改成功！')
          this.$set(row, 'taskNum', row.num)
          this.$set(row, 'isModify', false)
          this.$store.commit('UPDATE_ALL_TABLE_DATA')
        })
        .catch(() => {
          this.$message.warning('修改失败！')
          this.$set(row, 'isModify', false)
        })
    },
    modifyCancel(row) {
      this.$set(row, 'isModify', false)
    },
  },
}
</script>
<style>
.el-table th,
.el-table .row_DEPT {
  background-color: oldlace;
}
.el-table th,
.el-table .row_SUB {
  background-color: #f0f9eb;
}
</style>

<style lang="scss" scoped >
.org-type-SUB {
  padding-left: 20px;
}
.org-type-DEPT {
  padding-left: 60px;
}
.task-manage-box .el-table td .el-button.el-button--text {
  padding: 0;
}
</style>



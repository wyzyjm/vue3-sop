<template>
  <div>
    <s-dialog v-bind="dialog" @close="dialog.close" @updateTable="handleSearch(form)" />
    <s-dialog v-bind="dialog2" @close="dialog2.close" @updateTable="handleSearch(form)" />
    <s-form slot="form" :model="form" @search="handleSearch" inline>
      <s-form-item label="服务商名称" prop="providerId">
        <el-select v-model="form.providerId" filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="search.remoteMethod" :loading="search.loading">
          <el-option v-for="item in search.options" :key="item.id" :label="item.basicName" :value="item.id">
          </el-option>
        </el-select>
      </s-form-item>
      <s-form-item>
        <s-button type="primary" run="form.search">查询</s-button>
        <s-button run="form.reset">重置</s-button>
      </s-form-item>
    </s-form>
    <el-table :data="table.data" row-key="id" border default-expand-all>
      <el-table-column prop="orgName" label="组织名称" sortable width="180">
      </el-table-column>
      <el-table-column prop="orgId" label="组织编码" sortable width="180">
      </el-table-column>
      <el-table-column prop="status" width="140px" label="状态">
        <template slot-scope="scope">
          {{getStateText(scope.row.status)}}
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注">
      </el-table-column>
      <el-table-column label="操作" width="280px">
        <template slot-scope="scope">
          <s-button type="text" @click="setState(scope.row)">{{getStateText(1^scope.row.status)}}</s-button>
          <s-button type="text" @click="edit(scope.row)">编辑</s-button>
          <s-button type="text" @click="addChild(scope.row)">添加子节点</s-button>
          <s-button type="text" @click="setCooperation(scope.row)">合作组织</s-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import _search from '@/api/1660-get-frontapi-service-provider-list-by-name'
import _getTableData from '@/api/1320-get-frontapi-service-provider-org-get-by-providerid'
import useDialog from '@/hooks/use-dialog'
import useState from '@/hooks/use-state/disable-state'
import { Message } from 'element-ui'
import _setState from '@/api/1318-get-frontapi-service-provider-org-change-status'
import Sortable from 'sortablejs'

export default defineComponent({
  setup(props, { root }) {
    const form = reactive({
      providerId: '',
    })

    const { setState, getStateText, options } = useState(
      {
        message: '请确认是否继续停用？',
      },
      (row) => {
        return _setState({ id: row.id, status: 1 ^ row.status }).then(() => {
          Message({
            type: 'success',
            message: '操作成功！',
          })
          handleSearch(form)
        })
      }
    )
    const dialog = useDialog({
      uid: 'add',
      title: '添加子节点',
      width: '500px',
      component: require('./dialog/add'),
    })
    const dialog2 = useDialog({
      uid: 'set',
      title: '设置合作组织',
      width: '500px',
      component: require('./dialog/set'),
    })

    const search = reactive({
      options: [],
      value: '',
      list: [],
      remoteMethod(query) {
        if (query !== '') {
          search.loading = true
          setTimeout(() => {
            search.loading = false

            _search({ name: query }).then((response) => {
              search.options = response.data
            })
          }, 200)
        } else {
          search.options = []
        }
      },
    })

    const table = reactive({
      data: [],
    })

    const handleSearch = (form) => {
      form.providerId = 83
      _getTableData(form).then((response) => {
        // filterEmptyArray([response.data])
        table.data = [response.data]
        root.$nextTick(() => {
          const tableEl = document.querySelector(
            '.el-table__body-wrapper tbody'
          )
          Sortable.create(tableEl, {
            onEnd() {
              console.log(arguments)
              console.log(table.data)
              // const targetRow = self.tableData.splice(oldIndex, 1)[0]
              // self.tableData.splice(newIndex, 0, targetRow)
            },
          })
        })
      })
    }

    const setCooperation = (row) => {
      dialog2.open({ data: row })
    }
    const addChild = (row) => {
      dialog.open({ data: row })
    }

    const edit = (row) => {
      dialog.open({ data: row, isEdit: true })
    }

    return {
      options,
      dialog,
      dialog2,
      handleSearch,
      search,
      form,
      table,
      setCooperation,
      addChild,
      edit,
      getStateText,
      setState,
    }
  },
})
</script>
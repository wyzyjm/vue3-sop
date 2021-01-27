<template>
  <div>
    <slot name="form"></slot>
    <slot name="top"></slot>
    <Table border v-bind="$attrs" v-on="$listeners" v-loading="tableIsLoading" :uid="uid" :data="tableData">
      <slot></slot>
    </Table>
    <slot name="bottom"></slot>
    <div v-if="page !== false" class="ce-pagination">
      <slot name="page"></slot>
      <Page :page-size="params.pagination.pageSize" layout="prev, pager, next, jumper,sizes,total" :current-page="params.pagination.currentPage" @current-change="currentChange" @size-change="sizeChange" @pageInit="pageInit" :page-sizes="[10, 20, 50, 100]" :uid="uid" :total="total" v-bind="page===true?{}:page" v-if="page !== false" ref="page"></Page>
    </div>
  </div>
</template>
<script>
import Table from './table'
import Page from './pagination'
import tryGetOnlyArray from '../utils/data-patch-v1/try-get-only-array'
import tryGetPaginationParams from '../utils/data-patch-v1/try-get-pagination-params'
import { mapState } from 'vuex'
import { timestamp, uid, event, params } from '../store'

export default {
  watch: {
    sTimestamp() {
      if (
        this.sUID === this.uid ||
        (this.sUID === 'all' && this.sEvent === 'update')
      ) {
        this.change()
      }
    },
  },
  provide() {
    return {
      TABLE_PROVIDE: this,
    }
  },
  components: { Table, Page },
  computed: {
    ...mapState({
      sTimestamp: (state) => state.table[timestamp],
      sUID: (state) => state.table[uid],
      sEvent: (state) => state.table[event],
      sParams: (state) => state.table[params],
    }),
  },
  props: {
    uid: {
      default: 0,
    },
    data: {
      required: true,
    },
    init: {
      default: true,
    },
    page: {
      type: [Object, Boolean],
      default: true,
    },
    props: {
      default() {
        return {
          data: 'data',
          total: 'total',
        }
      },
    },
  },
  data() {
    return {
      timer: null,
      params: {
        form: {},
        pagination: {
          pageSize: 10,
          currentPage: 1,
        },
      },
      tableData: [],
      tableIsLoading: false,
      total: undefined,
    }
  },
  methods: {
    setTableData(response) {
      const data = response ? response.data || response : []
      this.tableIsLoading = false
      let tableData = data[this.props.data]
      let total = data[this.props.total]
      if (!Array.isArray(tableData)) {
        tableData = tryGetOnlyArray(data).data
      }
      if (typeof total !== 'number') {
        total = tryGetPaginationParams(data).total
      }
      this.tableData = tableData
      this.total = total
    },
    parseData(params) {
      if (typeof this.data === 'string') {
        this.tableIsLoading = true
        return this.$api(this.data, params).then(
          (response) => {
            this.setTableData(response)
          },
          () => {
            this.tableIsLoading = false
          }
        )
      } else if (typeof this.data === 'function') {
        this.tableIsLoading = true
        return this.data(params).then(
          (response) => {
            this.setTableData(response)
          },
          () => {
            this.tableIsLoading = false
          }
        )
      }
    },
    change() {
      if (Array.isArray(this.data)) {
        this.tableData = this.data
      } else {
        return this.parseData({
          ...this.params.form,
          ...this.params.pagination,
          ...this.sParams,
        })
      }
    },
    // 供查询表单调用
    formSearch(params) {
      this.params.form = params
      if (this.page !== false) {
        // 如果存在分页组件，在查询条件变更的情况下，改变分页到第一页，并触发查询事件
        return this.$refs.page.$children
          .find((v) => v.$listeners['current-change'])
          .$emit('current-change', 1)
      } else {
        return this.change()
      }
    },
    // 供查询表单调用
    formReset(params) {
      this.params.form = params
    },
    // 供查询表单调用
    formInit(params) {
      console.log('formInit', params)
      this.params.form = params
    },
    pageInit(params) {
      console.log('pageInit', params)
      this.params.pagination = { ...this.params.pagination, ...params }
    },
    sizeChange(pageSize) {
      this.params.pagination.pageSize = pageSize
      this.change()
    },
    currentChange(currentPage) {
      this.params.pagination.currentPage = currentPage
      this.change()
    },
  },
  created() {
    if (this.init) {
      setTimeout(() => {
        console.log('tableInit')
        this.change()
      })
    }
  },
}
</script>
<style>
.ce-pagination {
  padding: 20px 0;
  overflow: hidden;
}
.ce-pagination .el-pagination {
  float: right;
}
</style>
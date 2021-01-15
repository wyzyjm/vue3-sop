import Form from './components/form'
import Table from './components/table'
import Pagination from './components/pagination'
import Button from './components/form/button'
import Panel from './components/panel'
import Upload from './components/form/upload'
import Text from './components/form/text'
import Group from './components/form/group'
import Tabs from './components/tabs'
import Dialog from './components/dialog'
import SimpleTable from './components/simple-table'
import { TabPane, Input, FormItem } from 'element-ui'

const components = {
  Form,
  FormItem,
  Table,
  Pagination,
  Button,
  Panel,
  Tabs,
  Upload,
  Text,
  Dialog,
  SimpleTable,
  Group,
  TabPane,
  Input,
}

const install = (Vue) => {
  Object.keys(components).forEach(name => {
    const component = components[name]
    Vue.component(
      's' + name,
      component
    )
  })
}



export default {
  install
}

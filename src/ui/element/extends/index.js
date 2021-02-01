import Form from './components/form'
import Table from './components/table'
import Pagination from './components/pagination'
import Button from './components/form/button'
import Panel from './components/panel'
import Upload from './components/form/upload'
import Text from './components/form/text'
import Tabs from './components/tabs'
import Dialog from './components/dialog'
import SimpleTable from './components/simple-table'
import FormItem from './components/form/item'
import { TabPane, Input } from 'element-ui'

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

import { MessageBox } from 'element-ui'
import { reactive } from '@vue/composition-api'

export default (opt = {}, callback) => {
  const message = opt.message || '确定要停用吗?'
  const title = opt.title || '停用'
  const options = opt.options || [{
    label: '启用',
    value: 1
  }, {
    label: '停用',
    value: 0
  }]

  const getStateText = (status) => {
    
    const c = options.find((v) => v.value === status)
    return c && c.label
  }


  const setState = async (row) => {
    try {
      const isContinue = await MessageBox.confirm(
        message,
        title,
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )

      if (isContinue) {
        return callback(row)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    options: reactive(options),
    setState,
    getStateText
  }
}


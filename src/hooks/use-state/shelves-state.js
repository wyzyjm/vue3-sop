import { reactive } from '@vue/composition-api'

export default (opt = {}, callback) => {
  const options = opt.options || [{
    label: '上架',
    value: 1
  }, {
    label: '下架',
    value: 0
  }]

  const getStateText = (status) => {
    const c = options.find((v) => v.value === status)
    return c && c.label
  }


  const setState = async (row) => {
    return callback(row)
  }
  return {
    options: reactive(options),
    setState,
    getStateText
  }
}


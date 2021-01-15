const config = require('./config')
const { baseURL, version } = config
module.exports =({ project_id, _id, title }) => {
    const url = `${baseURL}/project/${project_id}/interface/api/${_id}`
    return `
/**
 * 文档地址：${url}
 * 生成日期：${new Date()}
 * 生成工具版本：${version}
 * 接口名称：${title}
 */
`
}

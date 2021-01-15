const config = require('./config')
const util = require('./util')
const getResBody = require('./res-body')
const getReqQuery = require('./req-query')
const getReqParams = require('./req-params')
const getReqBodyOther = require('./req-body-other')
const writeFile = require('./file')

const { baseURL, token, version } = config
const { toCamel, fetch } = util


const getApiDetail = (id) => fetch(`${baseURL}/api/interface/get?token=${token}&id=${id}`)

const getBaseInfo = ({ project_id, _id, title }) => {
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


const getRequestFunction = ({ path, method }, arg) => {
    const request = `import request from '../src/plugins/request'`
    const Params = `interface Params extends ${['ReqQuery', 'ReqParams', 'ReqBody'].filter(v => arg[v])} {}`
    const ParamsKey = 'POST,PUT,PATCH'.indexOf(method) === -1 ? 'params' : 'data'
    return (
        `${Params}\n\n${request}\nexport default (params: Params)=> { 
    return request({
        url:'${path}',
        method:'${method}',
        ${ParamsKey}:params
    })
}`
    )

}



getApiDetail(526).then(response => {
    const { data, errcode, errmsg } = response.data
    if (errcode) return
    const baseInfo = getBaseInfo(data)
    const resBody = getResBody(data)
    const reqQuery = getReqQuery(data)
    const reqParams = getReqParams(data)
    const reqBodyOther = getReqBodyOther(data)
    console.log(1551, data)
    const requestFunction = getRequestFunction(data, {
        ResBody: resBody,
        ReqQuery: reqQuery,
        ReqParams: reqParams,
        ReqBody: reqBodyOther
    })

    let fileData = ''

    fileData += baseInfo || ''
    fileData += '\n\n'
    fileData += resBody || ''
    fileData += '\n\n'
    fileData += reqQuery || ''
    fileData += '\n\n'
    fileData += reqParams || ''
    fileData += '\n\n'
    fileData += reqBodyOther || ''
    fileData += '\n\n'
    fileData += requestFunction || ''


    writeFile('../testFile.ts', fileData)

})



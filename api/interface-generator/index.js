const config = require('./config')
const util = require('./util')
const getResBody = require('./res-body')
const getReqQuery = require('./req-query')
const getReqParams = require('./req-params')
const getReqBodyOther = require('./req-body-other')

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
 * /
`
}


const getRequestFunction = (...arg) => {
    const Params = `interface Params extends ${['reqQuery', 'reqParams', 'reqBodyOther'].filter(v => [arg[v]])} {}`
    return (
        `export default (params: Params):resBody=> { 
    return request(params)
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
    const requestFunction = getRequestFunction({
        resBody,
        reqQuery,
        reqParams,
        reqBodyOther
    })

    console.log(baseInfo)
    console.log(resBody)
    console.log(reqQuery)
    console.log(reqParams)
    console.log(reqBodyOther)
    console.log(requestFunction)

})



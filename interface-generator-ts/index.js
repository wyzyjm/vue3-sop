const config = require('./config')
const getBaseInfo = require('./base-info')
const getResBody = require('./res-body')
const getReqQuery = require('./req-query')
const getReqParams = require('./req-params')
const getReqBodyOther = require('./req-body-other')
const getRequestFunction = require('./request-function')
const writeFile = require('./file')

const { baseURL, project } = config
const fetch = require('axios')


const getProjectInfo = (token) => fetch(`${baseURL}/api/project/get?token=${token}`)
const getApiDetail = (token, id) => fetch(`${baseURL}/api/interface/get?token=${token}&id=${id}`)
const getAllApi = (token, id) => fetch(`${baseURL}/api/interface/list?token=${token}&project_id=${id}&limit=1000`)


const createInterface = (token, id, projectInfo) => {
    getApiDetail(token, id).then(response => {
        const { data, errcode } = response.data
        if (errcode) return
        const baseInfo = getBaseInfo(data)
        const resBody = getResBody(data)
        const reqQuery = getReqQuery(data)
        const reqParams = getReqParams(data)
        const reqBodyOther = getReqBodyOther(data)
        const requestFunction = getRequestFunction(data, {
            ResBody: resBody,
            ReqQuery: reqQuery,
            ReqParams: reqParams,
            ReqBody: reqBodyOther
        }, projectInfo)

        let fileData = ''

        fileData += baseInfo || ''
        fileData += resBody || ''
        fileData += reqQuery || ''
        fileData += reqParams || ''
        fileData += reqBodyOther || ''
        fileData += requestFunction || ''
        writeFile(`../src/api/${id}-${data.method.toLocaleLowerCase()}${data.path.toLocaleLowerCase().replace(/\//g, '-')}.ts`, fileData)
    }).catch((err) => {
        console.log(`文档${id}遇到问题，无法自动生成`)
        console.log(err)
    })
}

const createInterfaceByProject = (token, id) => {
    Promise.all([getProjectInfo(token), getAllApi(token, id)]).then(response => {
        const { data, errcode } = response[1].data
        if (errcode) return
        data.list.forEach(v => {
            createInterface(token, v._id, response[0].data.data)
        })
    })
}


Object.keys(project).forEach(v => {
    createInterfaceByProject(project[v], v)
})


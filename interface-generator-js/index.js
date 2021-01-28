const config = require('./config')
const getBaseInfo = require('./base-info')
const getResBody = require('./res-body')
const getReqQuery = require('./req-query')
const getReqParams = require('./req-params')
const getReqBodyOther = require('./req-body-other')
const getRequestFunction = require('./request-function')
const writeFile = require('./file')

const { baseURL, token } = config
const fetch = require('axios')


const getApiDetail = (id) => fetch(`${baseURL}/api/interface/get?token=${token}&id=${id}`)
const getAllApi = (id) => fetch(`${baseURL}/api/interface/list?token=${token}&catid=${id}&limit=1000`)


const createInterface = (id) => {
    getApiDetail(id).then(response => {
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
        })

        let fileData = ''

        fileData += baseInfo || ''
        fileData += resBody || ''
        fileData += reqQuery || ''
        fileData += reqParams || ''
        fileData += reqBodyOther || ''
        fileData += requestFunction || ''
        writeFile(`../src/api/${id}-${data.method.toLocaleLowerCase()}${data.path.toLocaleLowerCase().replace(/\//g, '-')}.ts`, fileData)
    })

}

const createInterfaceByProject = (id) => {
    getAllApi(id).then(response => {
        const { data, errcode } = response.data
        if (errcode) return
        data.list.forEach(v => {
            createInterface(v._id)
        })
    })
}



const { argv } = process


if (argv.includes('project')) {
    createInterfaceByProject(argv[argv.length - 1])
} else {
    createInterface(argv[argv.length - 1])
}

// node index.js 460  or node index.js project 59
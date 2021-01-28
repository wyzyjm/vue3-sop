module.exports = ({ path, method }, arg) => {
    const request = `import request from '../plugins/axios/index.js'`
    const paramsExtends = ['ReqQuery', 'ReqParams', 'ReqBody'].filter(v => arg[v])
    const Params = paramsExtends.length ? `interface _Params extends ${paramsExtends} {}` : `interface _Params {}`

    const ParamsKey = 'POST,PUT,PATCH'.indexOf(method) === -1 ? 'params' : 'data'
    return (
        `${Params}\n\n${request}\nexport default (params: _Params)=> { 
    return request({
        url:'${path}',
        method:'${method}',
        ${ParamsKey}:params
    })
}`
    )

}

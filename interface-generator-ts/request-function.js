module.exports = ({ path, method, reqBodyIsArray }, arg) => {
    const request = `import request from '../plugins/axios/index.js'`
    const paramsExtends = ['ReqQuery', 'ReqParams', 'ReqBody'].filter(v => arg[v])
    const Params = paramsExtends.length ? `interface _Params extends ${paramsExtends} {}` : `interface _Params {}`




    path = /{([^}]+)}/.test(path) ? `'${path}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    })`: `'${path}'`

    const ParamsKey = 'POST,PUT,PATCH'.indexOf(method) === -1 ? 'params' : 'data'
    return (
        `${Params}\n\n${request}\nexport default (params: ${reqBodyIsArray ? '_Params[]' : '_Params'})=> { 
    return request({
        url:${path},
        method:'${method}',
        ${ParamsKey}:params
    })
}`
    )

}

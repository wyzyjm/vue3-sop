module.exports = ({ path, method }, arg) => {
    const request = `import request from '../plugins/request'`
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

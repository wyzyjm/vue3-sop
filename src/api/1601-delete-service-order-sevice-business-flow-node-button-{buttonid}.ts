
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1601
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：删除按钮
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
}

export interface ReqParams {
  buttonId:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice-business-flow/node/button/{buttonId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'DELETE',
        params:params
    })
}
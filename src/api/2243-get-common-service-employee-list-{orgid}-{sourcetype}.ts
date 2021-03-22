
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2243
 * 生成日期：Mon Mar 22 2021 14:40:30 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据组织ID加类型查询人员
 * 创建人：肖晓华
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqParams {
  orgId:string         
  sourceType:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/employee/list/{orgId}/{sourceType}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1426
 * 生成日期：Mon Mar 08 2021 10:15:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：功能授权-回显查询
 * 创建人：肖晓华
 */
export interface ResBody {
  code:string      
  data:any[]       
  msg:string       
  status:number    
}

export interface ReqParams {
  roleId:string    
}

export interface ReqBody {
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params[])=> { 
    return request({
        url:'/role/resource/list/{roleId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1]  
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}
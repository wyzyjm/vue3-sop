
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1474
 * 生成日期：Sun Feb 07 2021 10:34:35 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：删除客户呈现阶段
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqParams {
  stageId:string    
}

export interface ReqBody {
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config/stage/{stageId}'.replace(/{([^}]+)}/g, (r, $1) => {
        return params[$1] || ''
    }),
        method:'DELETE',
        params:params
    })
}
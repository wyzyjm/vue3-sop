
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1470
 * 生成日期：Tue Mar 02 2021 15:45:33 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：启用、禁用客户呈现配置
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqParams {
  id:string        /**客户呈现配置id*/
  status:string    /**1：启用，-1：禁用*/
}

export interface ReqBody {
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/{id}/{status}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}
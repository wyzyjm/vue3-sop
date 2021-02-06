
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1450
 * 生成日期：Sat Feb 06 2021 15:26:33 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：校验客户呈现服务单名称编码是否唯一
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqQuery {
  code:string    /**服务单名称编码*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config/checkCode',
        method:'GET',
        params:params
    })
}
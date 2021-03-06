
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1326
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：获取合作组织id及除了此服务商的所有服务商的组织树
 * 创建人：付兵浩
 */
export interface Data {
  partnerIdList:any[]         /**合作组织id*/
  providerOrgDTOList:any[]    /**非当前服务商的组织树*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  providerId:string    /**服务商id*/
  id:string            /**组织id*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-org/get-org-partner',
        method:'GET',
        params:params
    })
}
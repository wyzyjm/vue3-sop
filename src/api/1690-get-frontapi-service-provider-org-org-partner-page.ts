
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1690
 * 生成日期：Mon Mar 08 2021 09:00:55 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：合作组织列表
 * 创建人：付兵浩
 */
export interface Data {
  records:any[]          
  total:number           /**总条数*/
  size:number            /**每页大小*/
  current:number         /**当前页码*/
  orders:any[]           
  searchCount:boolean    
  pages:number           
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  providerId:string    /**服务商id*/
  name?:string         /**组织名称*/
  合作组织状态?:string       /**1:启用，0：停用*/
  pageNum:string       
  pageSize:string      
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-org/org-partner-page',
        method:'GET',
        params:params
    })
}
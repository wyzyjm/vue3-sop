
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1320
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据服务商id获取组织树
 * 创建人：付兵浩
 */
export interface Data {
  id:number            /**组织id*/
  orgId:string         /**组织code*/
  orgName:string       /**组织名称*/
  status:null          /**组织状态1启用0禁用*/
  remark:string        /**备注*/
  parentId:string      /**父级code*/
  sourceType:number    
  sourceId:number      /**服务商id*/
  children:any[]       /**子节点列表*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  providerId:string    /**服务商id*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-org/get-by-providerid',
        method:'GET',
        params:params
    })
}
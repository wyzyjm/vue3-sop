
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1871
 * 生成日期：Mon Mar 15 2021 13:25:55 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据当前登录人获取自己组织和合作组织列表
 * 创建人：付兵浩
 */
export interface SourceDto {
  id:number              /**组织唯一标识*/
  orgId:string           /**组织编号*/
  orgName:string         /**组织名称*/
  providerId:number      /**服务商id*/
  providerName:string    /**服务商名称*/
}

export interface Data {
  sourceDto:SourceDto    
  partnerList:any[]      /**合作组织集合*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-org/get-partner-list-currentuser',
        method:'GET',
        params:params
    })
}
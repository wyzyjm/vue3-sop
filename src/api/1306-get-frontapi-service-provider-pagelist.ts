
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1306
 * 生成日期：Mon Mar 01 2021 15:39:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务商列表
 * 创建人：付兵浩
 */
export interface Data {
  current:number         /**当前页码*/
  orders:any[]           
  pages:number           /**总页数*/
  records:any[]          
  searchCount:boolean    
  size:number            /**每页大小*/
  total:number           /**总条数*/
}

export interface ResBody {
  code:string      
  data:Data        
  msg:string       
  status:number    
}

export interface ReqQuery {
  providerName?:string    /**服务商名称*/
  category?:string        /**服务商类型 1:个人，2：企业*/
  status?:string          /**服务商状态 0:服务中，1:暂停，2：清退，3：关闭*/
  basictype?:string       /**合作类型 1、自营，2、非自营*/
  pageNum:string          
  pageSize:string         
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider/pagelist',
        method:'GET',
        params:params
    })
}
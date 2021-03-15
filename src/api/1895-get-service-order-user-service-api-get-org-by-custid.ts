
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1895
 * 生成日期：Mon Mar 15 2021 13:25:55 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：发起网站修改时的获取团队列表
 * 创建人：付兵浩
 */
export interface Data {
  orgId:string           /**组织id*/
  orgName:string         /**服务组织名称*/
  providerId:number      /**服务商id*/
  providerName:string    /**服务商名称*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  custId:string    /**客户id*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/user-service-api/get-org-by-custid',
        method:'GET',
        params:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2543
 * 生成日期：Wed Apr 07 2021 10:52:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：查询方案信息
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  demandContent:string            /**需求说明*/
  annexList:any[]                 
  annexFileName:string            /**附件名称*/
  annexFileShowUrl:string         /**附件地址*/
  uploadTime:string               /**上传时间*/
  serviceMainInstanceCode:null    /**服务专挑*/
  orderConsumeInfo:any[]          
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  orderCode:string    /**服务单号*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/programme',
        method:'GET',
        params:params
    })
}
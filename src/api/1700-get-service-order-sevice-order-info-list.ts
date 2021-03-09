
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1700
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：我的服务-列表查询
 * 创建人：肖晓华
 */
export interface Data {
  current:number         
  orders:any[]           
  pages:number           
  records:any[]          
  searchCount:boolean    
  size:number            
  total:number           
}

export interface ResBody {
  code:string      
  data:Data        
  msg:string       
  status:number    
}

export interface ReqQuery {
  custName:string                /**客户名称*/
  serviceCode:string             /**服务单*/
  businessType:string            /**业务类型*/
  status:string                  /**服务单状态*/
  productInstanceCode:string     /**产品实例code*/
  contractTextCode:string        /**合同文本号*/
  productDomain:string           /** 产品标识*/
  saleChannel:string             /**售卖渠道*/
  designerEmpId:string           /**设计师员工id*/
  makerEmpId:string              /**制作员id*/
  entryClerkId:string            /**录入员id*/
  designerMakerEntryId:string    /**设计师员工/制作员/录入员id*/
  createTimeStart:string         /**服务单生成时间开始*/
  publishTimeStart:string        /**服务单发布时间开始*/
  createTimeEnd:string           /**服务单生成时间结束*/
  publishTimeEnd:string          /**服务单发布时间结束*/
  productType:string             /**产品类型*/
  publishTimeAscSort:string      /**创建时间升序排序*/
  cycleAscSort:string            /**周期升序排序*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info/list',
        method:'GET',
        params:params
    })
}
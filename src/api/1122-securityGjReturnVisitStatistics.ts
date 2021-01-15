
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1122
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：回访统计-潘昭
 */
export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface TotalReturnVisitTask {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface NewAllocation {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface Event {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface ProductExpire {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface ProductDelivery {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface ProductDeliveryNeedConfirm {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface ProductionExceptionDomain {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface ProductionExceptionRegistration {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface CustRoutineReturnBack {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface ManagerAllocation {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface FinishedNotify {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface BatchIssuedTask {
  title:string         
  children:Children    
}

export interface Children {
  totalGen:string                 
  totalCmp:string                 
  totalCmpPercent:string          
  totalOnTimeCmp:string           
  totalOnTimeCmpPercent:string    
}

export interface PortalProWeeksFlowUp {
  title:string         
  children:Children    
}

export interface TableHead {
  name:string                                                        
  totalReturnVisitTask:TotalReturnVisitTask                          
  newAllocation:NewAllocation                                        
  event:Event                                                        
  productExpire:ProductExpire                                        
  productDelivery:ProductDelivery                                    
  productDeliveryNeedConfirm:ProductDeliveryNeedConfirm              
  productionExceptionDomain:ProductionExceptionDomain                
  productionExceptionRegistration:ProductionExceptionRegistration    
  custRoutineReturnBack:CustRoutineReturnBack                        
  managerAllocation:ManagerAllocation                                
  finishedNotify:FinishedNotify                                      
  batchIssuedTask:BatchIssuedTask                                    
  portalProWeeksFlowUp:PortalProWeeksFlowUp                          
}

export interface Data {
  tableHead:TableHead    
  list:array             
}

export interface ResBody {
  status:number    //状态码，成功返回101
  msg:string       //返回信息
  data:Data        //返回结果
}

export interface ReqQuery {
  granularity:string        //颗粒度 bySub：分公司维度；byGjId:管家维度
  areaId:string             //区域ID
  subCompanyId:string       //分公司ID
  beginCreateTime:string    //开始时间
  endCreateTime:string      //结束时间
  pageSize:string           //每页大小
  pageNo:string             //当前页码
  oldF:string               //传1是查询旧统计，不传或其他是查询新统计
  taskAutoTypes:string      //任务类型，逗号拼接
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/gj/returnVisitStatistics',
        method:'GET',
        params:params
    })
}
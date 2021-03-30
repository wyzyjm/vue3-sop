
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2405
 * 生成日期：Tue Mar 30 2021 09:57:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务详情-更新es
 * 创建人：杨一点
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:null        
}

export interface ReqParams {
  serviceOrderId:string    /**服务详情id*/
}

export interface ReqBody {
  serviceCode?:string                
  channelSource?:null                
  orderFrom?:null                    
  saleChannel?:null                  
  custName?:string                   
  custId?:string                     
  memberCode?:null                   
  productType?:number                
  productTypeName?:null              
  businessType?:null                 
  businessTypeName?:null             
  language?:null                     
  status?:number                     
  statusName?:string                 
  createTime?:string                 
  enterTime?:null                    
  orderPushTime?:null                
  productVersion?:null               
  productInstanceCode?:string        
  productDomain?:null                
  saleAreaId?:null                   
  saleSubId?:null                    
  saleDeptId?:null                   
  assignServicerId?:null             
  designerEmpId?:null                
  designerServiceId?:null            
  desigberAreaId?:null               
  designerSubId?:null                
  designerDeptId?:null               
  makerEmpId?:null                   
  makerServiceId?:null               
  makerAreaId?:null                  
  makerSubId?:null                   
  makerDeptId?:null                  
  entryClerkId?:null                 
  entryAreaId?:null                  
  entrySubId?:null                   
  entryDeptId?:null                  
  businessBillCode?:null             
  contractTextCode?:string           
  saleOrderCode?:null                
  finishTime?:null                   
  publishTime?:null                  
  wholeMakeCycle?:null               
  isSame?:null                       
  qualityInspectorId?:null           
  wholeMakeSurplusCycle?:null        
  currentBusinessNodeInstId?:null    
  currentBusinessNodeStatus?:null    
  designType?:null                   
  groupId?:null                      
  groupCode?:null                    
  specialFlag?:null                  
  servicePersonal?:null              
  newData?:boolean                   
  assignTime?:null                   
  demandConfirmTime?:null            
  custAcceptTime?:null               
  custLinkManName?:null              
  custLlinkManPhone?:null            
  custLinkManMail?:null              
  buttonList?:null                   
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info/{serviceOrderId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'PUT',
        data:params
    })
}
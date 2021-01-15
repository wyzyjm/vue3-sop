
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/648
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-个人精查客户（总部、区总、总、经、商）-王志军
 */
export interface NewCustomerCommonInfoVo {
  custId:string                    
  entId:null                       
  custName:string                  
  custNature:null                  
  custCreatDate:null               
  industry:null                    
  custLegalReparesentative:null    
  custRegisterMoney:string         
  custAddress:string               
  addressDetail:string             
  homepage:null                    
  chinaZ:null                      
  areaCode:string                  
  source:null                      
}

export interface SalerCustProtectVo {
  id:string                      
  custId:string                  
  custName:string                
  custType:number                
  intentionalityType:null        
  salerId:string                 
  bussdeptId:string              
  subcompanyId:string            
  areaId:string                  
  markId:string                  
  protectTime:number             
  exceedTime:number              
  isVisitState:null              
  isVisitStateStr:null           
  custSource:number              
  dataState:number               
  lastVisitTime:null             
  lastVisitTimeStr:null          
  visitExceedTime:null           
  absoluteProtectTime:null       
  createBy:string                
  createTime:number              
  updateBy:string                
  updateTime:number              
  busiOppoCode:null              
  industryZhongqi:null           
  salerName:string               
  deptName:string                
  subName:string                 
  visitStatus:null               
  visitStatusStr:null            
  surplusTime:null               
  surplusTimeRedOrNot:boolean    
  label:null                     
  exceedTimeStr:null             
  custTypeStr:null               
  guanJiaManagerName:null        
  guanJiaName:null               
  sjIntentInfoVo:null            
  custSourceStr:null             
  collectReason:null             
  protectReason:null             
  salesStage:null                
  salesStageStr:null             
  clueVisitStage:null            
  clueVisitStageStr:null         
  absoluteProtectTimeStr:null    
  visitTime:null                 
  visitTimeStr:null              
  setupStr:null                  
  isSj:number                    
  sjSource:null                  
  expectDealAmount:null          
  expectDealAmountStr:null       
  isStress:null                  
  addStressTime:null             
  forecastState:null             
  isForecastLabel:null           
  sjSourceLabel:null             
}

export interface ExactCustomerVo {
  custId:string                                      //客户ID
  market:string                                      //市场名称
  salerName:string                                   //商务名称
  deptName:string                                    //部门名称
  stage:string                                       //客户阶段
  explain:null                                       //说明
  canClue:number                                     //是否可转线索
  canCust:number                                     //是否可转客户，
客户池转客户 ：http://10.12.52.224:3000/project/59/interface/api/652
线索转客户：http://10.12.52.224:3000/project/59/interface/api/650
  custState:number                                   //客户状态（2是保护客户，3和4是成交客户）
  newCustomerCommonInfoVo:NewCustomerCommonInfoVo    
  salerCustProtectVo:SalerCustProtectVo              
  gjCustProtectVo:null                               
  smaConvertLogVoList:null                           
  canViewProtect:boolean                             
  canViewConvert:boolean                             
  typeOfTurnCust:number                              //1是线索转客户，2是客户池转客户
  cmWillAssignCustVo:null                            
  willAssignRole:number                              
  majorCanAssign:boolean                             
  managerId:null                                     
  majorId:null                                       
  mine:boolean                                       
}

export interface Data {
  exactCustomerVo:ExactCustomerVo    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/customer/newcustomerdetail/queryPersonalCust',
        method:'GET',
        params:params
    })
}
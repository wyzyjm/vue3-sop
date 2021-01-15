
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/682
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-云线索详情-（商）-王志军
 */
export interface FileList {
  fileId:string      
  fileName:string    
  url:string         
}

export interface ClueVo {
  clueCode:string               //线索单号
  clueStateLabel:string         //线索类型，直接显示
  custBudget:string             //客户预算
  custBusiEmail:string          //客户业务员邮箱
  custBusiName:string           //客户业务员名称
  custBusiPhone:string          //客户业务员手机号
  custId:string                 //客户ID
  custName:string               //客户名称
  id:string                     //线索ID
  salerArea:string              //商务区域
  salerAreaId:string            //商务区域ID
  salerDept:string              //商务部门
  salerDeptId:string            //商务部门ID
  salerEmail:string             //商务邮箱
  salerId:string                //商务ID
  salerName:string              //商务名称
  salerPhone:string             //商务手机号
  salerSub:string               //商务分司
  salerSubId:string             //商务分司ID
  sourceSystem:string           //系统标志
  clueState:string              //线索状态
  serviceProviderName:string    //预设服务商
  custRequirement:string        //客户需求
  fileList:FileList             
}

export interface Data {
  clueVo:ClueVo    
}

export interface ResBody {
  status:number    //101是成功，其他都是失败
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  exception:string        
  requestParams:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/sjcust/sjCloudDetail',
        method:'GET',
        params:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/656
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-区总调拨-查询可调拨客户（区）-王志军
 */
export interface CustomerVo {
  custId:string                 //客户ID
  custName:string               //客户名称
  salerId:string                //商务ID
  protectType:string            //保护类型
  salerName:string              //商务名称
  position:string               //商务职级
  areaName:string               //区域名称
  subcompanyId:string           //分司ID
  subcompanyName:string         //分司名称
  deptId:string                 //部门ID
  deptName:string               //部门名称
  custTypeValue:string          //客户类型
  custTypeLable:string          //客户类型 中文
  oldSalerId:string             //原商务ID
  oldDeptId:string              //原部门ID
  guanJiaName:string            //管家名称
  absoluteProtectTime:string    //绝对保护时间
}

export interface Data {
  customerVo:CustomerVo    
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
        url:'/entwxapi/assginMarket/getCanAssgin',
        method:'GET',
        params:params
    })
}
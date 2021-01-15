
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/546
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：跟进中线索-列表（区总、总监、经理）-王金峰
 */
export interface Data {
  totalCount:number     
  pageSize:number       
  list:array            
  currentPage:number    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            //登录人Id
  requestParams:string    //currentPage:当前页   pageSize：每页条数  subId：分司id  deptId：部门id  salerId：商务id   clueMission：任务  salerClueFrom：来源
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/cluecustomerapp/getClueCustomerPageUnderSaler',
        method:'GET',
        params:params
    })
}
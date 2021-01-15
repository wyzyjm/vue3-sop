
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/788
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：待分配线索列表（总监、经理）（商务跟进中线索也是此接口）-王金峰
 */
export interface Data {
  totalCount:number     //总条数
  pageSize:number       
  list:array            
  currentPage:number    //当前页码
}

export interface ResBody {
  status:number    //状态码  101代表成功
  msg:string       //提示信息
  data:Data        
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //currentPage:当前页码  
pageSize：每页条数
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/cluecustomerapp/getClueCustomerPage',
        method:'GET',
        params:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1028
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-合同申领-申领明细-肖瑞海
 */
export interface Data {
  listDetail:array    //申领明细列表
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  requestParams:string    
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractReqest/findRequestDetail',
        method:'GET',
        params:params
    })
}
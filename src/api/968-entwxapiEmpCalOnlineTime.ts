
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/968
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：记录在线时长
 */
export interface ResBody {
  status:number    
  msg:string       
  data:null        
}

export interface ReqQuery {
  empId:string            //员工id
  requestParams:string    //endPoint：端类型（1PC;2APP;3企业微信）
  exception:?string       
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/emp/calOnlineTime',
        method:'GET',
        params:params
    })
}
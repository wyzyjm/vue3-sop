
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/754
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：跟进中线索-经理分配线索给商务-王金峰
 */
export interface Data {
  message:string    //成功时用于前端展示的消息，如（0个客户分配失败，1个客户分配成功！", "data": { "mess0个客户分配失败，1个客户分配成功！）
}

export interface ResBody {
  status:number    //状态码 101表示成功
  msg:string       //提示消息
  data:Data        
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //custId：客户id
salerId:商务id
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/cluecustomerapp/managerAssignClueCustomer',
        method:'GET',
        params:params
    })
}
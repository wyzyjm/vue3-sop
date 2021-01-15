
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/752
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：跟进中线索-总监分配线索给部门、商务-王金峰
 */
export interface Data {
  failNum:number    //失败个数
  sucNum:number     //成功个数
}

export interface ResBody {
  status:number    //状态码  101表示成功
  msg:string       //提示消息
  data:Data        
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //custId:客户id（多个用逗号拼接）
deptId：部门id
salerId：商务id
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/cluecustomerapp/majorAssignClueCustomer',
        method:'GET',
        params:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1036
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：总监调整跟进中线索客户
 */
export interface Data {
  failNum:number    //调整失败数量
  sucNum:number     //调整成功数量
}

export interface ResBody {
  status:number    //状态码
  msg:string       //提示信息
  data:Data        
}

export interface ReqQuery {
  deptId:string     //部门id
  custIds:string    //custId（多个用逗号拼接）
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/cluecustomer/majorAdjustClueCustomer',
        method:'GET',
        params:params
    })
}
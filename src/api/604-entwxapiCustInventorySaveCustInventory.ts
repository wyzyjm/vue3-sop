
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/604
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-客户盘点添加-王金峰
 */
export interface ResBody {
  status:string    //状态码  101为成功
  msg:string       //提示消息
  data:string      
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //date：商务月（yyyy-MM）
newCustReserve：新客户储备金额
oldCustReserve：老客户储备金额
taskNumMonth：月任务
reserveRatio：储备比
newCustReserveJson：新客户储备详情
oldCustReserveJson：老客户储备详情
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/custInventory/saveCustInventory',
        method:'GET',
        params:params
    })
}
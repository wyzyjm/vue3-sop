
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/602
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-客户盘点编辑跳转-王金峰
 */
export interface Data {
  oldCustReserve:array    // 老客户储备详情集合
  newCustReserve:array    //新客户储备详情集合
}

export interface ResBody {
  status:number    //状态码    101代表成功
  msg:string       //消息
  data:Data        //结果集
}

export interface ReqQuery {
  empId:string              //登录人id
  custInventoryId:string    //客户盘点主键id
  exception:string          
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/custInventory/getCustInventory/0',
        method:'GET',
        params:params
    })
}
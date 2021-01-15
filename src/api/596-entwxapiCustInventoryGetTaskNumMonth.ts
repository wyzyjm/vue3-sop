
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/596
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-客户盘点添加编辑页面的本月任务-王金峰
 */
export interface Data {
  taskNumMonth:number    //本月任务
}

export interface ResBody {
  status:number    //状态码  101表示成功
  msg:string       //返回的消息
  data:Data        //结果集
}

export interface ReqQuery {
  empId:string        //登录人id
  exception:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/custInventory/getTaskNumMonth',
        method:'GET',
        params:params
    })
}
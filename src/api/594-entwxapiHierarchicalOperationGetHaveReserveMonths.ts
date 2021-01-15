
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/594
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-获取已设置储备任务的商务月-王金峰
 */
export interface Data {
  list:array           
  salerMonth:string    //当前商务月
}

export interface ResBody {
  status:number    //状态码   101为成功
  msg:null         
  data:Data        
}

export interface ReqQuery {
  empId:string        //登录人id
  exception:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/hierarchicalOperation/getHaveReserveMonths',
        method:'GET',
        params:params
    })
}
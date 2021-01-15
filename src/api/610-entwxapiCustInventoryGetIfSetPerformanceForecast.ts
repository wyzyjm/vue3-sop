
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/610
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-获取某商务月是否进行业绩预测-王金峰
 */
export interface Data {
  ifSet:string    // 0是未设置 1是设置
}

export interface ResBody {
  status:string    //状态码    101为成功
  msg:string       //提示消息
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
        url:'/entwxapi/custInventory/getIfSetPerformanceForecast',
        method:'GET',
        params:params
    })
}
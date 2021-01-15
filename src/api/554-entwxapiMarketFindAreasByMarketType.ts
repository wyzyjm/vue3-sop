
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/554
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：线索池-筛选项（根据市场类型、市code获取区县集合）-王金峰
 */
export interface Data {
  list:array    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //marketType：市场类型     cityCode：市编码
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/market/findAreasByMarketType',
        method:'GET',
        params:params
    })
}
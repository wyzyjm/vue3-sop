
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/548
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：线索池-筛选项（获取市场类型）-王金峰
 */
export interface Data {
  list:array    
}

export interface ResBody {
  status:number    //状态码 101为成功
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string        //登录人id
  exception:string    //浏览器测试环境跳过鉴权
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/market/marketType',
        method:'GET',
        params:params
    })
}
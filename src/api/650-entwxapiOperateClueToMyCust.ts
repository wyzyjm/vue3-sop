
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/650
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-精查客户-线索转客户（商）-王志军
 */
export interface Data {
}

export interface ResBody {
  status:number    //101表示成功，其他是失败
  msg:string       //线索转客户成功
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/operate/clueToMyCust',
        method:'GET',
        params:params
    })
}
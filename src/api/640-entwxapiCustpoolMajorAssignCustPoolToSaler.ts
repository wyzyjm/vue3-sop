
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/640
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-客户池-分配到商务（总）-王志军
 */
export interface ResBody {
  status:number    //101表示成功
  msg:string       //直接显示
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //custIds说明：客户ID，逗号分隔
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/custpool/majorAssignCustPoolToSaler',
        method:'GET',
        params:params
    })
}
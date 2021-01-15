
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/464
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：客户池经理捞取客户
 */
export interface ReqQuery {
  empId:string            
  requestParams:string    //isToMyself传1表示 加入意向判断
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/mobileapi/custpool/managerAssignCustPoolToSaler',
        method:'GET',
        params:params
    })
}
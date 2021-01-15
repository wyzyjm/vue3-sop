
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/530
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-待分客户分配（总、经）-王志军
 */
export interface Data {
  sucNum:string    //分配成功数
  faiNum:string    //分配失败数
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //custIds说明：客户ID的逗号分隔
assignToDeptId说明：要分配的部门
assignToSalerId说明：要分配的商务
isToMyself说明：经理角色分配给自己时传1，其他情况不需要传
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/operate/assignCust',
        method:'GET',
        params:params
    })
}
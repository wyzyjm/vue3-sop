
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/498
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-待分配客户数量（总、经）-王志军
 */
export interface Data {
  1:number    //商机客户待分数
  2:number    //线索客户待分数
  3:number    //收藏客户待分数
  4:number    //未成交客户待分数
  5:number    //成交客户待分数
}

export interface ResBody {
  status:number    //101表示成功
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string    //当前登录人ID
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/assign/findWillAssignCount',
        method:'GET',
        params:params
    })
}
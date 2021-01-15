
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/454
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：客户池-未成交客户-经理捞取客户池客户
 */
export interface Data {
  faiNum:number    //失败数量
  sucNum:number    //成功数量
}

export interface ResBody {
  status:number    //状态
  msg:string       //返回信息
  data:Data        
}

export interface ReqQuery {
  toSalerId:?string    
  custIds:string       //客户id逗号分隔
  isToMyself:string    //1 表示 加入意向判断
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/custpool/managerAssignCustPoolToSaler',
        method:'GET',
        params:params
    })
}
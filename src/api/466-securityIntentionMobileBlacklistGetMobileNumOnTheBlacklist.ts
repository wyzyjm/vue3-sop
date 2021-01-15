
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/466
 * 生成日期：Fri Jan 15 2021 10:59:05 GMT+0800 (China Standard Time)
 * 生成工具版本：node-v0.1
 * 接口名称：意向系统-判断手机是否在黑名单
 */


export interface Data {
  result:string    //结果
}

export interface ResBody {
  status:number    //接口请求成功返回101
  msg:string       //消息描述
  data:Data        //返回结果对象
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //isToMyself传1表示 加入意向判断
}

export interface ReqQuery {
  mobile:string    //手机号
}





interface Params extends ReqQuery {}

import request from '../src/plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/intentionMobileBlacklist/getMobileNumOnTheBlacklist',
        method:'GET',
        params:params
    })
}
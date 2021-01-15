
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/630
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：获取企业微信签名接口（供前端使用）-王金峰
 */
export interface Data {
  timestamp:string    //时间戳
  nonceStr:string     //随机串
  signature:string    //签名
}

export interface ResBody {
  status:string    //101代表成功
  msg:string       //提示信息
  data:Data        
}

export interface ReqQuery {
  urlPath:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/commonentwx/getSignature',
        method:'GET',
        params:params
    })
}
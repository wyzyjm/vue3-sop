
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/492
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：获取当前用户身份--营销平台后台使用-付兵浩
 */
export interface ResBody {
  status:number    //101
  code:string      //SYS0000
  msg:string       
  data:string      //字符串，里面存储的是userid
}

export interface ReqQuery {
  code:string    //通过成员授权获取到的code
}

export interface ReqParams {
  companyId:string    //企业id
  appId:string        //应用id
}

interface Params extends ReqQuery,ReqParams {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/backApi/api-enterprise-wx//current-user/{companyId}/{appId}',
        method:'GET',
        params:params
    })
}
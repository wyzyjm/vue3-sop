
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/494
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：获取JSAPiTicket-营销平台后台使用-付兵浩
 */
export interface ResBody {
  status:number    //101
  code:string      //SYS0000
  msg:string       
  data:string      //ticket值
}

export interface ReqParams {
  companyId:string    //企业ID
  appId:string        //AgentId
}

interface Params extends ReqParams {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/backApi/api-enterprise-wx/js-ticket/{companyId}/{appId}',
        method:'GET',
        params:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/956
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：删除电销员工白名单-王志军
 */
export interface ResBody {
}

export interface ReqQuery {
  id:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/telClue/deleteById',
        method:'GET',
        params:params
    })
}
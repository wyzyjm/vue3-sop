
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/952
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：分页获取电销员工白名单列表-王志军
 */
export interface ResBody {
}

export interface ReqQuery {
  currentPage:string    
  pageSize:string       
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/telClue/getWhiteListEmpPage',
        method:'GET',
        params:params
    })
}
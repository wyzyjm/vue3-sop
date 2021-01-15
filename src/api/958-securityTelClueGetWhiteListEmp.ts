
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/958
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：获取电销员工白名单列表-王志军
 */
export interface ResBody {
}

interface Params extends  {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/telClue/getWhiteListEmp',
        method:'GET',
        params:params
    })
}
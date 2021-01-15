
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1134
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：协同工具-搜客宝-获取-郭强
 */
export interface ResBody {
}

interface Params extends  {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/skbuser/catchSkbUser',
        method:'GET',
        params:params
    })
}
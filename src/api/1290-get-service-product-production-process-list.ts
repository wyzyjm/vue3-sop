
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1290
 * 生成日期：Tue Feb 02 2021 14:19:29 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：列表
 */
export interface ResBody {
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-product/production-process/list',
        method:'GET',
        params:params
    })
}
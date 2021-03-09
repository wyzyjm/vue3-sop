
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1710
 * 生成日期：Tue Mar 09 2021 13:47:48 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务详情-客户信息
 * 创建人：肖晓华
 */
interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice/order/info',
        method:'GET',
        params:params
    })
}
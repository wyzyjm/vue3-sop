
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1630
 * 生成日期：Wed Mar 03 2021 10:10:01 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加预制属性
 * 创建人：杨一点
 */
interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/service-product/property/prepared',
        method:'GET',
        params:params
    })
}
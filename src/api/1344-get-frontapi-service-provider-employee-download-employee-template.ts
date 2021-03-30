
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1344
 * 生成日期：Tue Mar 30 2021 09:57:21 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：下载人员导入模板
 * 创建人：付兵浩
 */
export interface ResBody {
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-employee/download-employee-template',
        method:'GET',
        params:params
    })
}
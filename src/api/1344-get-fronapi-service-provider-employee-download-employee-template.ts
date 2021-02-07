
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1344
 * 生成日期：Sun Feb 07 2021 15:27:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：下载人员导入模板
 */
interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/fronApi/service-provider-employee/download-employee-template',
        method:'GET',
        params:params
    })
}
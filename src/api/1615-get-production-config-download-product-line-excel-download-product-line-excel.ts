
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1615
 * 生成日期：Tue Mar 02 2021 15:45:33 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：下载产品线管理导入模版excel
 * 创建人：杨一点
 */
interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/download/product-line/excel/download/product-line/excel',
        method:'GET',
        params:params
    })
}
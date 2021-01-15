
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/462
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：营销管理-客户池-未成交客户
 */
interface Params extends  {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/mobileapi/custpool/getCustpoolListPage',
        method:'GET',
        params:params
    })
}
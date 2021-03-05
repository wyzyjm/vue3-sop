
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1670
 * 生成日期：Wed Mar 03 2021 17:41:54 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：获取所有业务流程列表
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:any[]       
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice-business-flow/all-list',
        method:'GET',
        params:params
    })
}
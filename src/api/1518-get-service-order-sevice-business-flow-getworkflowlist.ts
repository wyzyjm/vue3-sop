
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1518
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：获取工作流定义列表
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
        url:'/service-order/sevice-business-flow/getWorkFlowList',
        method:'GET',
        params:params
    })
}
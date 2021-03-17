
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2009
 * 生成日期：Wed Mar 17 2021 09:27:47 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据产品线id查询列表
 * 创建人：杨一点
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  productLineId:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/product-line/production-setting/product-line/list',
        method:'GET',
        params:params
    })
}
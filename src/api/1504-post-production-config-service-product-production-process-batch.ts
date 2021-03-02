
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1504
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：批量添加
 * 创建人：杨一点
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:null        
}

export interface ReqBody {
  serviceProductId?:number        
  productionProcessList?:any[]    
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/service-product/production-process/batch',
        method:'POST',
        data:params
    })
}
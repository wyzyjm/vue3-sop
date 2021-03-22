
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2237
 * 生成日期：Mon Mar 22 2021 14:34:40 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：导出
 * 创建人：付兵浩
 */
export interface ResBody {
  status:number    
  code:string      /**SYS000表示正常，其它表示异常*/
  msg:string       
  data:string      /**url，文件下载路径*/
}

export interface ReqBody {
  orgId?:any[]           /**选中的组织id集合，默认为null*/
  serviceCode?:string    /**服务单code*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/web-case/export',
        method:'POST',
        data:params
    })
}
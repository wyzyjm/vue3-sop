
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1781
 * 生成日期：Thu Mar 11 2021 13:17:11 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：批量推荐或者取消推荐
 * 创建人：付兵浩
 */
export interface ResBody {
  status:number    
  code:string      /**SYS000表示请求正常，其他表示异常*/
  msg:string       
  data:boolean     /**true表示成功，false表示失败*/
}

export interface ReqParams {
  isRecommand:string    /**0：取消推荐，1：推荐*/
}

export interface ReqBody {
  idList?:any[]    
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/web-case/operation-batch/{isRecommand}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1811
 * 生成日期：Wed Mar 10 2021 17:24:03 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务详情-服务内容
 * 创建人：肖晓华
 */
export interface Data {
  contractTextCode:string       /**文本序号*/
  productDomain:string          /**产品标识*/
  productInstanceCode:string    /**产品实例号*/
  serviceAnnexList:any[]        /**附件信息*/
  serviceProductList:any[]      /**服务产品*/
}

export interface ResBody {
  code:string      
  data:Data        
  msg:string       
  status:number    
}

export interface ReqParams {
  serviceOrderId:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info/get/service/sontent/{serviceOrderId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}
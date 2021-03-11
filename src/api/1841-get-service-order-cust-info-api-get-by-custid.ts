
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1841
 * 生成日期：Wed Mar 10 2021 17:24:03 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：查询客户信息
 * 创建人：付兵浩
 */
export interface Data {
  cusId:string           /**客户id*/
  memberCode:string      /**会员账号*/
  memberMail:null        /**会员邮箱*/
  memberMobile:string    /**会员联系方式*/
  custName:string        /**客户名称*/
  salerId:string         
  salerName:string       /**保护商务*/
  salerMobile:string     /**商务联系方式*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  custId:string    /**客户id*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-info-api/get-by-custid',
        method:'GET',
        params:params
    })
}
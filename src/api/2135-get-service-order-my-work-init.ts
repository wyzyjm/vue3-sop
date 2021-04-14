
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2135
 * 生成日期：Fri Mar 19 2021 09:32:45 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：本月生产概况
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  totalNum4Month:number    /**本月新单数据*/
  noAssignNum:number       /**未派单*/
  producingNum:number      /**生产中数量*/
  overtimeNum:number       /**已超期数量*/
}

export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:Data        
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/my-work/init',
        method:'GET',
        params:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2309
 * 生成日期：Tue Mar 23 2021 16:19:25 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：获取设计师信息接口
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  employeeId:string      /**员工id*/
  employeeName:string    /**员工姓名*/
  workMail:string        /**邮箱*/
  officePhone:string     /**办公电话*/
  mobile:string          /**手机*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  orderCode:string    /**服务单号*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/designer',
        method:'GET',
        params:params
    })
}
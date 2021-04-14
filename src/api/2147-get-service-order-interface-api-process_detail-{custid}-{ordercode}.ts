
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2147
 * 生成日期：Fri Mar 19 2021 11:01:11 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务单进度详情
 * 创建人：wuzongle@300.cn
 */
export interface DesignerInfo {
  employeeId:string      /**员工id*/
  employeeName:string    /**员工姓名*/
  workMail:string        /**邮箱*/
  officePhone:string     /**办公电话*/
  mobile:string          /**手机号码*/
}

export interface Data {
  orderId:number                /**服务单id*/
  orderCode:string              /**服务单号*/
  custId:string                 /**客户id*/
  custName:null                 /**客户名称*/
  productId:number              /**产品类型*/
  productName:string            /**产品名称（服务名称）*/
  productDomain:string          /**产品域名*/
  productInstanceCode:string    /**产品实例code*/
  createTime:string             /**服务单创建时间*/
  updateTime:null               /**服务单更新时间*/
  currentProgress:string        /**服务进度*/
  designerInfo:DesignerInfo     /**设计师信息*/
  tel400Num:string              /**400电话*/
  showStageDTOList:any[]        
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqParams {
  custId:string       /**客户id*/
  orderCode:string    /**服务单号*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/process_detail/{custId}/{orderCode}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}
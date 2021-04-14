
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1739
 * 生成日期：Tue Mar 09 2021 16:29:45 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：网站列表
 * 创建人：付兵浩
 */
export interface Data {
  totalSize:number        /**当月发布网站数*/
  standardSize:number     /**当月达标网站数*/
  percent:number          /**当月质检达标率*/
  recommendNums:number    /**当月推荐网站数量*/
  remainderNums:number    /**剩余可推荐*/
  total:number            /**网站列表总条数*/
  pageNum:number          /**页码*/
  pageSize:number         /**每页条数*/
  records:any[]           
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqBody {
  orgId?:any[]           /**组织id集合*/
  type?:string           /**选择的id类型，DEPT为部门，SUB为分司，AREA为区域*/
  serviceCode?:string    /**服务单*/
  pageNum?:string        /**页码*/
  pageSize?:string       /**每页条数*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/web-case/statistics',
        method:'POST',
        data:params
    })
}
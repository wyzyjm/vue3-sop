
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1462
 * 生成日期：Mon Mar 08 2021 10:22:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：通过id查询客户呈现配置
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  id:number                        /**主键id*/
  flowShowName:string              /**流程名称*/
  flowShowCode:string              /**名称编码*/
  businessFlowDefId:number         /**业务流程定义id*/
  businessFlowDefName:string       /**业务流程定义名称*/
  businessFlowDefVersion:string    /**业务流程定义版本*/
  version:string                   /**版本*/
  status:number                    /**状态*/
  statusName:string                /**状态名称*/
  createTime:string                /**创建时间*/
  createBy:string                  /**创建人*/
  createrName:string               /**创建人姓名*/
  updateTime:string                /**更新时间*/
  updateBy:string                  /**更新人*/
  updaterName:string               /**更新人姓名*/
}

export interface ResBody {
  code:string      
  status:number    
  data:Data        
}

export interface ReqParams {
  id:string    /**客户呈现配置id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/{id}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}
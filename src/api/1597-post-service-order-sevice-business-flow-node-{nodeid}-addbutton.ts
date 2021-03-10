
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1597
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加按钮
 * 创建人：wuzongle@300.cn
 */
export interface Data {
}

export interface ResBody {
  code:string      
  status:string    
  msg:string       
  data:Data        
}

export interface ReqParams {
  nodeId:string    /**业务节点id*/
}

export interface ReqBody {
  serviceStatusRelationId:number    /**服务单状态id*/
  serviceOrderStatus:number         /**服务单状态*/
  buttonCode:string                 /**按钮code*/
  buttonName:string                 /**按钮名称*/
  useScence:number                  /**是否对外可见*/
  orderNum:number                   /**序号*/
  buttonAuthority:number            /**是否仅当前操作人可见*/
  bindForms:string                  /**绑定表单*/
  eventAction:string                /**工作事件*/
  actionResult:string               /**动作结果*/
  executorType:number               /**处理人类型*/
  executor:string                   /**处理人*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice-business-flow/node/{nodeId}/addbutton'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}
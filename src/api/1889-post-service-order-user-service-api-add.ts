
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1889
 * 生成日期：Mon Mar 15 2021 13:25:55 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加发起服务
 * 创建人：付兵浩
 */
export interface ResBody {
}

export interface ReqBody {
  contactUserEmail?:string      /**联系人邮箱*/
  contactUserName?:string       /**联系人*/
  contactUserTel?:string        /**联系方式*/
  contentList?:any[]            /**服务内容列表*/
  custId?:string                /**客户id*/
  productInstaceCode?:string    /**产品实例code*/
  serviceDesc?:string           /**描述*/
  serviceTeamId?:string         /**如果为网站服务，则必有团队id*/
  serviceType?:number           /**服务类型，1：网站产品；107：设计服务，169：运营服务，68：翻译服务*/
  uploadId?:number              /**上传文件id*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/user-service-api/add',
        method:'POST',
        data:params
    })
}
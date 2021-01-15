
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/556
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：线索池-筛选项（运营推荐）-王金峰
 */
export interface Data {
  items:array    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            //员工id
  requestParams:string    //type必须为D_OPERATIONALRECOMMENDATIOL
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/items/getDictionaryItems',
        method:'GET',
        params:params
    })
}
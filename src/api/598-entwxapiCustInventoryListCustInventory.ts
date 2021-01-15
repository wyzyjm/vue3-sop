
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/598
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-客户盘点列表查询-王金峰
 */
export interface Data {
  totalCount:number     //数据总条数
  pageSize:number       //每页条数
  list:array            
  currentPage:number    //当前页码
}

export interface ResBody {
  status:number    //状态码    101代表成功
  msg:string       //返回的消息
  data:Data        //结果集
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/custInventory/listCustInventory',
        method:'GET',
        params:params
    })
}
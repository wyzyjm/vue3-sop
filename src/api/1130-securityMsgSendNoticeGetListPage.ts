
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1130
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：协同工具-消息提醒-列表-王志军
 */
export interface Data {
  totalCount:number     
  pageSize:number       
  list:array            
  currentPage:number    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  currentPage:string        
  pageSize:string           
  sendResult:?string        //1是成功，0是失败  int类型的
  beginCreateTime:string    //数据同步开始日期
  endCreateTime:string      //数据同步结束日期
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/msgSendNotice/getListPage',
        method:'GET',
        params:params
    })
}
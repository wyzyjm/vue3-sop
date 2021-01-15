
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1128
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：协同工具-搜客宝-校验列表-郭强
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
  skbUserMobile:?string    
  status:?string           //0失败；1成功
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/skbuser/findSkbUserListPage',
        method:'GET',
        params:params
    })
}
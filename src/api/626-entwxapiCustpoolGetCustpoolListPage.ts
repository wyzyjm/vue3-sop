
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/626
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-客户池列表（总、经）-王志军
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
  empId:string            
  requestParams:string    //marketType说明：市场类型，通过entwx/market/marketType接口获取

industryClassBig和industryClassSmall说明：字典值为D_INDUSTRY_BIGDATA
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/custpool/getCustpoolListPage',
        method:'GET',
        params:params
    })
}
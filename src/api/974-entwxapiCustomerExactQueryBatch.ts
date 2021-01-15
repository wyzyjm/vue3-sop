
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/974
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：批量精查-王志军
 */
export interface Data {
  failCount:number              
  count:number                  // 返回条数
  nearbyCustomerVoList:array    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //custNameAndDistances为客户名称和距离，格式：客户名称1-距离,客户名称2-距离

state为状态，1:公海 2:我的客户

orderBy为排序方式
instanceAsc:距离由近到原，instanceDesc:距离由远到近，lastFollowAsc:上次跟进时间由近到远，lastFollowDesc:上次跟进时间由远到近，剩余保护时间由近到远，protectTimeDesc:剩余保护时间由远到近

baiduCustAddr 客户在百度的地址

businessScope 经营
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/customer/exactQueryBatch',
        method:'GET',
        params:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1126
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：协同工具-搜客宝-获取搜客宝线索列表-王志军
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
  custName:string           //客户名称 
  assignState:string        //是否分配成功，0是失败，1是成功，不传为全部
  beginCreateTime:string    //数据同步开始日期
  endCreateTime:string      //数据同步结束日期
  beginVisitTime:string     //跟进时间开始日期
  endVisitTime:string       //跟进时间结束日期
  isNewCust:string          //是否新增客户，0是否，1是是，不传为全部
  isMyProtect:string        //是否我本人客户，0是非本人，1是本人，不传为全部
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/skbclue/getSkbClueListPage',
        method:'GET',
        params:params
    })
}

/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/670
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-云线索添加-（商）-王志军
 */
export interface Data {
  pageNum:string     
  pageSize:string    
  total:string       
}

export interface List {
  createTime:string        //提交日期
  assignTime:string        //受理日期
  assignUserId:string      
  assignUserName:string    
  clueCode:string          //线索单号
  clueState:string         //1是未受理，其他是已受理
  clueStateLabel:string    //线索状态中文
  custBudget:string        //客户预算
  custBusiEmail:string     
  custBusiName:string      
  custBusiPhone:string     
  custId:string            
  custName:string          //客户名称
  salerArea:string         //区域
  salerAreaId:string       
}

export interface ResBody {
  status:number    //101是调拨成功，其他都是失败
  msg:string       
  data:Data        
  list:List        
}

export interface ReqQuery {
  empId:string            
  exception:string        
  requestParams:string    //sourceSystem说明：1"营销平台手机端",2,"营销平台PC端"3,"云市场运营平台"4,"服务商后台"5,"其他"6,"企业微信"


fileList说明：文件列表字段，子字段有fileId、fileName、url
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/sjcust/addsjCloudCustomerMade',
        method:'GET',
        params:params
    })
}
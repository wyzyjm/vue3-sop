
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1030
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-申请记录-肖瑞海
 */
export interface Params {
  contractTypeCode:null    
  contractNameCode:null    
  createDate:null          
  contractCode:null        
}

export interface Data {
  pageSize:number       //页的尺寸
  currentPage:number    //当前页
  totalPages:number     //总页数
  totalCount:number     
  tableSuffix:null      
  list:array            
  params:Params         
  count:boolean         
}

export interface Data {
  data:Data    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  requestParams:string    //menuType的值
UNAUDITED_MANAGER(1, "管理员未审核"),UNAUDITED_SALE(2, "调拨未审核") ,AUDITED_MANAGER(3, "管理员已审核"), AUDITED_SALE(4, "调拨已审核"),
    OWN_LIST(5,"所有审核记录"),AUDITED_DESTROY(6,"销毁待审核"),SUB_ALLOT_AUDIT(7,"分司调拨待审核"),SUB_ALLOT(8,"分司调拨待调出"),SUB_ALLOT_CONFIRM(9,"分司调拨待调入"),SUB_ALLOT_COMPLETED(10,"分司调拨已完成"),SUB_ALLOT_ALL(11,"所有分司调拨审核记录")
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractOper/findList',
        method:'GET',
        params:params
    })
}
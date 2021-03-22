
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2189
<<<<<<< HEAD
 * 生成日期：Mon Mar 22 2021 14:34:40 GMT+0800 (GMT+08:00)
=======
 * 生成日期：Mon Mar 22 2021 10:23:18 GMT+0800 (中国标准时间)
>>>>>>> fe494b8c104a6c9cf4ae0ba8b2ea68ec0c498fbb
 * 生成工具版本：ts-v0.0.2
 * 接口名称：网站列表
 * 创建人：付兵浩
 */
export interface Data {
  records:any[]          
  total:number           /**总条数*/
  size:number            /**每页大小*/
  current:number         /**当前页码*/
  orders:any[]           
  searchCount:boolean    
  pages:number           /**总页数*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqBody {
  pageSize?:number       /**每页大小*/
  pageNum?:number        /**页码*/
  orgId?:any[]           /**选中的组织id集合*/
  serviceCode?:string    /**服务单code*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/web-case/pagelist',
        method:'POST',
        data:params
    })
}
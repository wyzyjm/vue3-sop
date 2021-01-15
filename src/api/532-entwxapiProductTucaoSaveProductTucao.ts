
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/532
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：产品吐槽-保存产品吐槽-潘昭
 */
export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
}

export interface RequestParams {
  productCategory:string        //产品类别CODE
  productCategoryName:string    //产品类别名称
  content:string                //吐槽内容
  accessoriesIds:string         //附件ID，用逗号拼接
}

export interface ReqBody {
  empId:string                   //登录员工的ID
  requestParams:RequestParams    //传参的对象，没有则{}
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/productTucao/saveProductTucao',
        method:'POST',
        data:params
    })
}
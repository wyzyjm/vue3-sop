
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1817
 * 生成日期：Wed Mar 10 2021 17:24:03 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务详情-服务团队
 * 创建人：肖晓华
 */
export interface Data {
  butlerMail:string                     /**管家邮箱*/
  butlerName:string                     /**管家姓名*/
  butlerPhone:string                    /**管家联系方式*/
  desigberAreaName:string               /**设计区域*/
  designerDeptName:string               /**设计部门*/
  designerEmpName:string                /**设计师姓名*/
  designerPhone:string                  /**设计师联系方式*/
  designerServiceName:string            /**设计服务商*/
  designerSubName:string                /**设计分司*/
  entryAreaName:string                  /**设计助理区域*/
  entryDeptName:string                  /**设计助理部门*/
  entryEmpName:string                   /**设计助理名称*/
  entryPhone:string                     /**设计助理联系方式*/
  entryServiceName:string               /**设计服务商*/
  entrySubName:string                   /**设计分司*/
  liabilityAreaName:string              /**担责区域*/
  liabilityDeptName:string              /**担责部门*/
  liabilityServiceName:string           /**担责服务商*/
  liabilitySubName:string               /**担责分司*/
  makerAreaName:string                  /**制作员区域*/
  makerDeptName:string                  /**制作员部门*/
  makerEmpName:string                   /**制作员姓名*/
  makerPhone:string                     /**制作员联系方式*/
  makerServiceName:string               /**制作员服务商*/
  makerSubName:string                   /**制作员分司*/
  qualityInspectorName:string           /**质检员姓名*/
  qualityInspectorOrgFullName:string    /**质检员组织全路径名称*/
  qualityInspectorPhone:string          /**质检员联系方式*/
}

export interface ResBody {
  code:string      
  data:Data        
  msg:string       
  status:number    
}

export interface ReqParams {
  serviceOrderId:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info/get/service/team/{serviceOrderId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}
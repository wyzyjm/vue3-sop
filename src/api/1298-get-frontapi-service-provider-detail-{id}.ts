
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1298
 * 生成日期：Tue Mar 16 2021 14:43:23 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：查看服务商详细
 * 创建人：付兵浩
 */
export interface ResBody {
  basicName:string                 /**公司名称*/
  simpleName:string                /**公司简称*/
  basicDescribe:string             /**公司简介*/
  majorBusiness:string             /**主营业务*/
  businessDescribe:string          /**业务介绍*/
  address:string                   /**详细地址*/
  companySize:string               /**公司规模*/
  companyUrl:string                /**官网地址*/
  provinceId:number                /**省份id*/
  provinceName:string              /**省份名称*/
  cityId:number                    /**城市id*/
  cityName:string                  /**城市名称*/
  distinctId:number                /**地区id*/
  distinctName:string              /**地区名称*/
  foundTime:string                 /**成立时间*/
  registeredCapital:number         /**注册资本*/
  ratepayingNumber:string          /**纳税人识别号*/
  businessLicenseUrl:string        /**营业执照url*/
  businessLicenceNumber:string     /**营业执照注册号*/
  registrationUrl:string           /**税务登记证url*/
  registrationNumber:string        /**税务登记证编号*/
  idcardFrontUrl:string            /**证件正面url*/
  idcardBackUrl:string             /**证件反面url*/
  contactUsername:string           /**联系人姓名*/
  contactSex:boolean               /**联系人性别，0：男，1：女*/
  contactPhone:string              /**联系人手机号*/
  contactEmail:string              /**联系人邮箱*/
  legalPerson:string               /**法人*/
  legalCredentialsType:number      /**法人证件类型 1:身份证,2:临时身份证,3:护照,4:港澳台身份证/5:外国护照6:户口卡7:军人身份证8:警察身份证*/
  legalCredentialsNumber:string    /**法人证件编码*/
  category:number                  /**1:个人，2：企业*/
  basicType:number                 /**1、自营，2、非自营*/
  contactTel:string                /**联系人电话*/
  serviceStoptimeStr:string        /**服务到期时间*/
  creatorId:string                 /**创建人id*/
  creatorName:string               /**创建人姓名*/
  createTimeStr:string             /**创建时间*/
  basicStatus:string               /**0:服务中，1:暂停，2：清退，3：关闭*/
}

export interface ReqParams {
  id:string    /**服务商id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider/detail/{id}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}
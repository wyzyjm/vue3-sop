/* eslint-disable no-useless-escape,no-control-regex */
export default {
  /**
   * Email
   * @type RegExp
   */
  Email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  /**
   * Url
   * @type RegExp
   */
  Url: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
  /**
   * 中文
   * @type RegExp
   */
  Chinese: /[\u4e00-\u9fa5]/,
  /**
   * 双字节
   * @type RegExp
   */
  DoubleByte: /[^\x00-\xff]/,
  /**
   * 负整数
   * @type RegExp
   */
  NegativeInt: /^-[0-9]*[1-9][0-9]*$/,
  /**
   * 非负整数
   * @type RegExp
   */
  NotNegativeInt: /^d+$/,
  /**
   * 正整数
   * @type RegExp
   */
  PositiveInt: /^[0-9]*[1-9][0-9]*$/,
  /**
   * 非正整数
   * @type RegExp
   */
  NotPositiveInt: /^((-d+)|(0+))$/,
  /**
   * 整数
   * @type RegExp
   */
  Int: /^-?d+$/,
  /**
   * 非负浮点
   * @type RegExp
   */
  NotNegativeFloat: /^d+(.d+)?$/,
  /**
   * 正浮点
   * @type RegExp
   */
  PositiveFloat: /^((0-9)+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)$/,
  /**
   * 非正浮点
   * @type RegExp
   */
  NotPositiveFloat: /^((-d+.d+)?)|(0+(.0+)?)$/,
  /**
   * 负浮点数
   * @type RegExp
   */
  /**
   * 正两位小数
   * @type {RegExp}
   */
  PosFixedTwoFloat: /^\d{0,8}\.{0,1}(\d{1,2})?$/,
  NegativeFloat: /^(-(((0-9)+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,
  /**
   * 英文字母
   * @type RegExp
   */
  English: /^[A-Za-z]+$/,
  /**
   * 英文大写字母
   * @type RegExp
   */
  EnglishUpper: /^[A-Z]+$/,
  /**
   * 英文小写字母
   * @type RegExp
   */
  EnglishLower: /^[a-z]+$/,
  /**
   * 英文字母+数字组合
   * @type RegExp
   */
  EnglishOrNumber: /^[A-Za-z0-9]+$/,
  /**
   * 英文字母+数字+下划线组合
   * @type RegExp
   */
  EnglishOrNumberOrUnderline: /^w+$/,
  /**
   * html
   * @type RegExp
   */
  Html: /<(.*)>.*<\/\1>|<(.*) \/>/,
  /**
   * 国内电话号码
   * @type RegExp
   */
  ChinaTel: /\d{3}-\d{8}|\d{4}-\d{7}/,
  /**
   * 国内邮编
   * @type RegExp
   */
  ChinaPostCode: /[0-9]\d{5}(?!\d)/,
  /**
   * 国内身份证号
   * @type RegExp
   */
  ChinaIDCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  /**
   * 人类年龄(0~120)
   * @type RegExp
   */
  HumanAge: /^(([0-9])|([1-9][0-9])|(1[0-1][0-9])|(120))$/,
  /**
   * 不包含特殊字符
   * @type RegExp
   */
  userNameN: /^[A-Za-z0-9\u2E80-\u9FFF_()（）\\[\\]+$/,
  /**
   * 手机或电话
   * @type RegExp
   */
  mobileortel: /^[1][0-9]{10}$|^([0-9]{3,4}-)?[0-9]{7,8}$/,
  /**
   * 验证区号+座机（03168888996 或010-87996352）
   * @type RegExp
   */
  bankId: /^\d{1,32}$/, // 银行卡号
  // 密码长度8-32个字符，允许输入大小写英文字母、数、"@"、"."、"_"或"-"
  pwd: /^[\@A-Za-z0-9\@\.\_\-]{8,32}$/,
  // 账号长度4-12个字符，允许输入英文字母、数字及符号"_"
  companyName: /[\u4e00-\u9fa5\（\）]/, // 公司名称
  userCodes: /^[\@A-Za-z0-9\_]{4,12}$/,
  // 长度不超过18个中文字符，支持中文、英文、数字及符号“-”
  roleName: /^[\@A-Za-z0-9\u4e00-\u9fa5\-]{1,18}$/,
  mobile: /^1\d{10}$/, //验证手机号
}

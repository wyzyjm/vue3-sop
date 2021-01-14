module.exports = function (data) {
    const { title } = data
    var text = `
    /**
     * 文档地址：
     * 生成日期：${new Date()}
     * 生成工具版本：v0.0.1
     * 接口名称：${title}
     * 请求参数：
     */`

    return text
}

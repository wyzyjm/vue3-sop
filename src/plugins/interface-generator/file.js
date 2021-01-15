const fs = require('fs')
const path = require('path')


module.exports = (filePath, data) => {
    let file = path.resolve(__dirname, filePath)
    fs.access(file, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(file, data, { encoding: 'utf8' }, err => { })
            console.log('文件创建成功！', filePath)
        } else {
            console.log('文件已存在！', filePath)
        }
    })
}
const fs = require('fs')
const path = require('path')

module.exports = (filePath, data) => {
    let file = path.resolve(__dirname, filePath)
    fs.writeFile(file, data, { encoding: 'utf8' }, err => { })
}
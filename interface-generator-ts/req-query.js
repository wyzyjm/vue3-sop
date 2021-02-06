let interfaceList = []
const fillMargin = (len) => Array(len).fill(' ').join('')

const createInterfaceItem = (str, required) => `${str}${required ? '' : '?'}:string`
const createInterfaceItemDescription = (str) => str ? `/**${str}*/` : ''

const createInterface = (arr, key) => {
    const items = arr.map(v => {
        return [createInterfaceItem(v.name, v.required === '1'), createInterfaceItemDescription(v.desc)]
    })
    const max = Math.max.apply(null, items.map(v => v[0].length)) + 4
    let str = `export interface ${key} {`
    str += '\n'
    items.forEach(v => {
        const fill = fillMargin(max - v[0].length)
        str += fillMargin(2)
        str += v.join(fill)
        str += '\n'
    })
    str += '}'
    return str
}


module.exports = function (data) {
    const { req_query } = data
    if (req_query.length === 0) return null

    interfaceList = []

    interfaceList.push(createInterface(req_query, 'ReqQuery'))
    return interfaceList.join('\n\n') + '\n\n'
}


let interfaceList = []

const firstUpperCase = ([first, ...rest]) => first.toUpperCase() + rest.join('')
const fillMargin = (len) => Array(len).fill(' ').join('')
const createInterfaceItem = (key, val, required) => {
    if (val.properties) {
        const type = firstUpperCase(key)
        interfaceList.push(createInterface(val, type))
        return `${key}:${required ? '' : '?'}${type}`
    } else {
        return `${key}:${required ? '' : '?'}${val.type}`
    }
}

const createInterfaceItemDescription = (str) => str ? `/**${str}*/` : ''

const createInterface = (obj, key) => {
    const { properties } = obj
    const items = Object.keys(properties).map(v => {
        return [createInterfaceItem(v, properties[v], true), createInterfaceItemDescription(properties[v].description)]
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
    const { res_body } = data
    if (!res_body) return null
    interfaceList.push(createInterface(JSON.parse(res_body), 'ResBody'))
    interfaceList = []
    return interfaceList.join('\n\n')+'\n\n'
}


let interfaceList = []

const firstUpperCase = ([first, ...rest]) => first.toUpperCase() + rest.join('')
const fillMargin = (len) => Array(len).fill(' ').join('')
const getType = (type) => {
    if (type === 'array') {
        return 'any[]'
    }
    if (type === 'integer') {
        return 'number'
    }
    return type
}
const createInterfaceItem = (key, val, required) => {
    if (val.properties) {
        const type = firstUpperCase(key)
        interfaceList.push(createInterface(val, type))
        return `${key}${required ? '' : '?'}:${type}`
    } else {
        return `${key}${required ? '' : '?'}:${getType(val.type)}`
    }
}

const createInterfaceItemDescription = (str) => str ? `/**${str}*/` : ''

const createInterface = (obj, key) => {
    let { properties, required } = obj.type === 'array' ? obj.items : obj
    required = required || []
    const items = Object.keys(properties).map(v => {
        return [createInterfaceItem(v, properties[v], required.includes(v)), createInterfaceItemDescription(properties[v].description)]
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

module.exports = (() => {
    return function (data) {
        const { req_body_other } = data
        if (!req_body_other) return null
        interfaceList = []
        const t = JSON.parse(req_body_other)
        debugger
        if (t.type === 'array') {
            data.reqBodyIsArray = true
        }
        interfaceList.push(createInterface(t, 'ReqBody'))

        return interfaceList.join('\n\n') + '\n\n'
    }

})()


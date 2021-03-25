import Store from '@/store'


export const getBtnResource = (list = Store.state.resource.list, resource = []) => {
    list.forEach(v => {
        if (v.resourceType === 3) {
            resource.push(v)
        }
        if (v.children && v.children.length) {
            getBtnResource(v.children, resource)
        }
    })
    return resource
}


export const getResourceObject = (key) => {
    const btns = getBtnResource()
    if (!btns) return
    return btns.find(v => v.resourceCode === key)
}

export const hasPermissions = (key) => {
    return !!getResourceObject(key)
}
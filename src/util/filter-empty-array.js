export default function filterEmptyArray(arr) {
    if (!Array.isArray(arr)) return
    arr.forEach(function (v) {
        if (Array.isArray(v.children) && v.children.length !== 0) {
            filterEmptyArray(v.children)
        } else {
            v.children = undefined
        }
    })
}
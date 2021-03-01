import getSalesChannels from '@/api/1424-get-production-config-sales-channel-treelist'

import { reactive } from '@vue/composition-api'

function filterEmptyArray(arr) {
    if (!Array.isArray(arr)) return
    arr.forEach(function (v) {
        if (v.children.length === 0) {
            v.children = null
        } else {
            filterEmptyArray(v.children)
        }
    })
}

export default () => {
    if (getSalesChannels.options) {
        return getSalesChannels.options
    }
    const options = reactive({
        salesChannels: [],
    })

    Promise.all([getSalesChannels()]).then((response) => {
        filterEmptyArray(response[0].data)
        options.salesChannels = response[0].data
        getSalesChannels.options = options
    })


    return options
}
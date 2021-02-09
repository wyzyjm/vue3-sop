import { reactive } from '@vue/composition-api'

export default () => {
    return reactive({
        status: [{
            label: '启用',
            value: 1
        }, {
            label: '停用',
            value: 0
        }]
    })
}
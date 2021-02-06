import { reactive } from '@vue/composition-api'
import store from '@/store'
export default (options) => {
    const dialog = reactive({
        ...{
            uid: 0,
            title: '标题',
            width: '600px',
            open(data) {
                store.commit('dialog/open', { ...data, _uid: dialog.uid })
            },
            close() {
                store.commit('dialog/close', { _uid: dialog.uid })
            },
        }, ...options
    })
    return dialog
}
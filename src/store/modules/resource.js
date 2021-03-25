const state = {
    list: []
}

const mutations = {
    set(state, resource) {
        state.list = resource
    }
}

export default {
    namespaced: true,
    state,
    mutations
}

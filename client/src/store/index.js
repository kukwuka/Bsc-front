import { createStore } from 'vuex'

export default createStore({
    state: {
        backendURL: 'http://91.134.171.38',
        Authorized: false,
        token: ''
    },
    mutations: {
        set_token(state, payload) {
            state.token = payload
        },
        set_Authorized(state) {
            state.Authorized = true
        }
    },
    actions: {},
    getters: {
        get_server_URL(state) {
            return state.backendURL;
        },
        get_Authorized(state) {
            return state.Authorized
        },
        get_token(state) {
            return state.token
        }
    },
})

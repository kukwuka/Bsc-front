import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        backendURL: 'http://91.134.171.38/api',
        backendlogin: 'http://91.134.171.38',
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
        get_server_URL_login(state) {
            return state.backendlogin;
        },
        get_Authorized(state) {
            return state.Authorized
        },
        get_token(state) {
            return state.token
        }
    },
})

import Vue from 'vue';
import Vuex from 'vuex';
import authen from '../components/modules/authentication/store'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules:{
        authen
    }
    // strict: process.env.NODE_ENV !== 'production'
});
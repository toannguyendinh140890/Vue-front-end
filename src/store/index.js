import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modules = {
    global
};

export default new Vuex.Store({
    modules,
    strict: process.env.NODE_ENV !== 'production'
});
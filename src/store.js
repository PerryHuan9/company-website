import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const LANGUAGE = 'language';


export default new Vuex.Store({
    state: {
        isChinese: true,

    },
    mutations: {
        [LANGUAGE](state,bool){
            state.isChinese=bool;
        }
    },
    actions: {}
})

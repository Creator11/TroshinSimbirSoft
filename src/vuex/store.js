import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios, store);

let store = new Vuex.Store({
    state: {
        info: []
    },
    mutations: {
        SET_INFO_TO_STATE: (state, info) => {
            state.info = info;
        }
    },
    actions: {
        GET_INFO_FROM_API({
            commit
        }) {
            return axios('https://api.openweathermap.org/data/2.5/weather?q=Samara,ru&appid=ba8737105ae1272445ea7e91a5ad4c00', {
                    method: "GET"
                })
                .then((info) => {
                    commit('SET_INFO_TO_STATE', info.data);
                    return info;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        }
    },
    getters: {
        INFO(state) {
            return state.info;
        }
    }
});

export default store;
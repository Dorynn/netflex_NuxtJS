import Vue from 'vue';
import Vuex from 'vuex';
import films from './modules/films';
import auth from './modules/authentication';

Vue.use(Vuex);

export default() => new Vuex.Store( {
    modules:{
        films:films,
        auth: auth
    },
    state:{
        isReload:false,
    },
    getters:{
      isReload: (state) => state.isReload,
    },
    mutations:{
        SET_RELOAD(state, data){
            state.isReload = data;
            window.localStorage.setItem('isReload',data)
        },

    }
})
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
    },
    getters:{

    },
    mutations:{

    }
})
const auth = {
    state: {
        token:null,
    },
    getters: {
      token: (state) => state.token,

    },
    mutations: {
      SET_TOKEN(state, data) {
        state.token = data;
      },

    },
    actions: {
    //   async getNowPlayingFilms({ commit }) {
    //     try {
    //       const response = await this.$axios.get(`/movie/now_playing?api_key=${process.env.moviedbApiKey}`);
    //       commit("SET_NOW_PLAYING_FILMS", response.data.results);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },
  }
  }
  
  export default auth;
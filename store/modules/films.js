import axios from "axios";
const films = {
  state: {
    films: [],
    upcomingFilms: [],
    topFilms: [],
    popularFilms: [],
    detailFilm:[],
    nowPlayingFilms:[],
    recommendFilms:[],
    actors:[],
    currentPage:1,
  },
  getters: {
    upcomingFilms: (state) => state.upcomingFilms,
    topFilms: (state) => state.topFilms,
    popularFilms: (state) => state.popularFilms,
    films: (state) => state.films,
    detailFilm: (state) => state.detailFilm,
    nowPlayingFilms: (state) => state.nowPlayingFilms,
    actors: (state) => state.actors,
    recommendFilms:(state) => state.recommendFilms,
  },
  mutations: {
    SET_FILMS(state, data) {
      state.films = [...state.films,...data];
      // console.log('state= ', state)
      // console.log('data', data)
    },
    SET_UPCOMING_FILMS(state, data) {
      state.upcomingFilms = data;
    },
    SET_TOP_FILMS(state, data) {
      state.topFilms = data;
    },
    SET_POPULAR_FILMS(state, data) {
      state.popularFilms = data;
    },
    SET_DETAIL_FILM(state, data){
      state.detailFilm = data
    },
    SET_NOW_PLAYING_FILMS(state, data) {
      state.nowPlayingFilms = data
    },
    SET_RECOMMEND_FILMS(state, data) {
      state.recommendFilms= data
    }, 
    SET_ACTORS(state, data) {
      state.actors = data
    },
    SET_CURRENT_PAGE(state, data){
      state.currentPage = data
    }
  },
  actions: {
    async getNowPlayingFilms({ commit }) {
      try {
        const response = await this.$axios.get("/movie/now_playing");
        commit("SET_NOW_PLAYING_FILMS", response.data.results);
        // console.log("res", response.data.results);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    },

    async getUpcomingFilms({ commit }) {
      const response = await this.$axios.get(
        "/movie/upcoming"
      );
      commit("SET_UPCOMING_FILMS", response.data.results);
      commit("SET_FILMS", response.data.results);
    },

    async getTopFilms({ commit }) {
      const response = await this.$axios.get(
        "/movie/top_rated"
      );
      commit("SET_TOP_FILMS", response.data.results);
      commit("SET_FILMS", response.data.results);

    },

    async getPopularFilms({ commit }, cur) {
      const response = await this.$axios.get(
        `/movie/popular?page=${cur}`
      );
      commit('SET_POPULAR_FILMS', response.data.results)
      // console.log(response.data.results);
      commit("SET_FILMS", response.data.results);

    },

    async getDetailFilm({commit}, id){
      const response = await this.$axios.get(`/movie/${id}?append_to_response=videos`)
      commit('SET_DETAIL_FILM', response.data);
      // console.log('detail film',response.data)
    },

    async getFilms({commit, state}){
      const data = [...state.upcomingFilms, ...state.topFilms, ...state.popularFilms];
      commit('SET_FILMS', data)
    },
    async getRecommendFilms({commit}, id){
      const response = await this.$axios.get(`/movie/${id}/similar`)
      commit('SET_RECOMMEND_FILMS', response.data.results)
      // console.log('recommend',response.data.results)
    },
    async getActors({commit}, id){
      const response = await this.$axios.get(`/movie/${id}/casts`)
      commit('SET_ACTORS', response.data.cast)
    }
}
}

export default films;
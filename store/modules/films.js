import axios from 'axios'
const films = {
    state: {
        films: []
    },
    getters: {
        films: state => state.films
    },
    mutations: {
        SET_FILMS(state, data){
            state.films = data
        }

    },
    actions: {
        async getFilms({commit}){
            try{
                const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
                commit('SET_FILMS', response.data.results)
                console.log('res',response.data.results)
            }catch(error){
                console.log(error)
            }
        }


    }
}

export default films;
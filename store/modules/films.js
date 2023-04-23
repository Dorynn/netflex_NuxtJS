import axios from 'axios'
const films = {
    state: {
        films: [
            // {
            //     id: "1",
            //     url: require(`~/assets/images/cuando-sea-joven.jpg`),
            //     title: 'Cuando Sea Joven',
            //     brief: '70-year-old Malena gets a second chance at life when she magically turns into her 22-year-old self. Now, posing as "Maria" to hide her true identity, she becomes the lead singer of her grandson\'s band and tries to recover her dream of singing, which she had to give up at some point.'

            // },
            // {
            //     id: "2",
            //     url: require(`~/assets/images/the-godfather-part2.jpg`),
            //     title: 'The Godfather Part II',
            //     brief: 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.'
            // },
            // {
            //     id: "3",
            //     url: require(`~/assets/images/spirited-away.jpg`),
            //     title: 'Spirited Away',
            //     brief: 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.'
            // },
            // {
            //     id: "4",
            //     url: require(`~/assets/images/cuando-sea-joven.jpg`),
            //     title: 'Cuando Sea Joven',
            //     brief: '70-year-old Malena gets a second chance at life when she magically turns into her 22-year-old self. Now, posing as "Maria" to hide her true identity, she becomes the lead singer of her grandson\'s band and tries to recover her dream of singing, which she had to give up at some point.'

            // },
            // {
            //     id: "5",
            //     url: require(`~/assets/images/the-godfather-part2.jpg`),
            //     title: 'The Godfather Part II',
            //     brief: 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.'
            // },
            // {
            //     id: "6",
            //     url: require(`~/assets/images/spirited-away.jpg`),
            //     title: 'Spirited Away',
            //     brief: 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.'
            // },
        ]
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
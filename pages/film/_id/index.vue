<template>
    <div id="filmIntrodutionPage">
      <b-container class="mb-5">
        <b-row>
          <b-col cols="12" lg="3" md="3" sm="12" xs="12" >
            <img
              :src="detailFilm.poster_path?`https://image.tmdb.org/t/p/w500/${detailFilm.poster_path}`:require('~/assets/images/error.jpg')"
              width="100%"
              height="auto"
              alt=""
              ref="poster"
            />
          </b-col>
          <b-col cols="12" lg="6" md="6" sm="12" xs="12" class="briefFilm">
            <h2 class="font-weight-bold">{{ detailFilm.title }}</h2>
            <div class="my-3">
              <span>Genres:</span>
              <b-badge pill variant="primary" v-for="item in detailFilm.genres" :key="item.id" class="mr-1">{{ item.name }}</b-badge>
            </div>
  
            <p>Release date: {{ detailFilm.release_date }}</p>
            <p>Runtime: {{detailFilm.runtime}} minutes</p>
            <p>
              {{detailFilm.overview}}
            </p>
            <b-form-rating
              id="rating-inline"
              inline
              :value="detailFilm.vote_average"
              stars="10"
              size="lg"
              readonly
            ></b-form-rating>
            <p>
              &#40;{{detailFilm.vote_average}}<font-awesome-icon
                :icon="['fas', 'star']"
                style="color: var(--star-second); font-size: 20px"
              />/{{ detailFilm.vote_count }} votes&#41;
            </p>
            <ButtonSuccess :currentId="$route.params.id"/>
            <ButtonDanger :currentId="$route.params.id"/>
          </b-col>
          <b-col cols="3" lg="3" md="3">
            <RecommendedList :currentId="$route.params.id"/>
          </b-col>
        </b-row>
      </b-container>
      <MainActorList :filmtype="'Main Actors'" :currentId="this.$route.params.id"/>
      <FilmListStyle1 :filmtype="'Films Top'" :filmList="topFilms"/>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import ButtonSuccess from "~/components/common/Button/ButtonSuccess";
  import ButtonDanger from "~/components/common/Button/ButtonDanger";
  import FilmListStyle1 from "~/components/FilmListStyle1";
  import RecommendedList from "~/components/RecommendedList"
  import Title from '~/components/common/Title';
  import MainActorList from '~/components/MainActorList'
  export default {
    async asyncData(context){
    // console.log('context: ', context)
    await context.store.dispatch('getDetailFilm',context.route.params.id);
    await context.store.dispatch('getRecommendFilms', context.params.id)
    await context.store.dispatch('getActors',context.params.id);
    await context.store.dispatch('getTopFilms');
  },
    data(){
      return{
        link:"null"
      }
    },
    loading:false,
    components: {
      ButtonDanger,
      ButtonSuccess,
      FilmListStyle1,
      RecommendedList,
      Title,
      MainActorList
    },
    computed: {
      ...mapGetters(["films",'detailFilm', 'topFilms', 'actors']),
      currentIndex (){
        return this.films.findIndex((item)=>{
               return item.id == this.$route.params.id})
      } 
    },
    methods:{
        ...mapActions(['getFilms', 'getDetailFilm', 'getActors', 'getRecommendFilms', 'getTopFilms']),
    }

  };
  </script>
  
  <style lang="scss">
  #filmIntrodutionPage {
    margin-top: 70px;
    .badge {
      min-width: 80px;
      height: 24px;
      padding: 6px 10px;
      text-align: left;
    }
    .b-rating {
      border: none;
      background-color: transparent;
      color: var(--star-primary);
      padding: 0;
      height: fit-content;
    }
    .buttonSuccess {
      margin-right: 26px;
    }
    .actorList {
      img {
        width: 100%;
        height: 200px;
        border-radius: 15px;
        margin-bottom: 20px;
      }
    }
  }
  // @media screen and (max-width: 959px) {
  //   #recommendedFilm, #mainActorList, #footerDefault{
  //     display: none;
  //   }
  //   .container{
  //     max-width: 900px;
  //   }
  // }
  // @media (min-width: 768px){
  // }
  </style>
  
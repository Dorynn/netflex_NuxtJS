<template>
    <div id="filmIntrodutionPage" v-if="films.length">
      <b-container class="mb-5">
        <b-row>
          <b-col cols="4" lg="3" md="3" sm="12" xs="12" >
            <img
              :src="`https://image.tmdb.org/t/p/w500/${films[currentIndex].poster_path}`"
              width="100%"
              height="auto"
              alt=""
            />
          </b-col>
          <b-col cols="5" lg="6" md="6" sm="12" xs="12" class="briefFilm">
            <h2 class="font-weight-bold">{{ films[currentIndex].title }}</h2>
            <div class="my-3">
              <span>Genres:</span>
              <b-badge pill variant="primary">Animation</b-badge>
              <b-badge pill variant="primary">Family</b-badge>
              <b-badge pill variant="primary">Fantasy</b-badge>
            </div>
  
            <p>Release date: {{ films[currentIndex].release_date }}</p>
            <p>Runtime: 125 minutes</p>
            <p>
              {{films[currentIndex].overview}}
            </p>
            <b-form-rating
              id="rating-inline"
              inline
              :value="films[currentIndex].vote_average"
              stars="10"
              size="lg"
              readonly
            ></b-form-rating>
            <p>
              &#40;{{films[currentIndex].vote_average}}<font-awesome-icon
                :icon="['fas', 'star']"
                style="color: var(--star-second); font-size: 20px"
              />/{{ films[currentIndex].vote_count }} votes&#41;
            </p>
            <ButtonSuccess :currentId="$route.params.id"/>
            <ButtonDanger :currentId="$route.params.id"/>
          </b-col>
          <b-col cols="3" lg="3" md="3">
            <RecommendedList/>
          </b-col>
        </b-row>
      </b-container>
      <MainActorList/>
      <FilmListStyle1 :filmtype="'Films Top'" />
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import ButtonSuccess from "~/components/common/Button/ButtonSuccess";
  import ButtonDanger from "~/components/common/Button/ButtonDanger";
  import FilmListStyle1 from "~/components/FilmList/FilmListStyle1";
  import RecommendedList from "~/components/FilmList/RecommendedList"
  import Title from '~/components/common/Title';
  import MainActorList from '~/components/FilmList/MainActorList'
  export default {
    components: {
      ButtonDanger,
      ButtonSuccess,
      FilmListStyle1,
      RecommendedList,
      Title,
      MainActorList
    },
    computed: {
      ...mapGetters(["films"]),
      currentIndex (){
        return this.films.findIndex((item)=>{
               return item.id == this.$route.params.id})
      } 
    },
    methods:{
        ...mapActions(['getFilms']),
    },
    created(){
        this.getFilms();
    },
  };
  </script>
  
  <style lang="scss">
  #filmIntrodutionPage {
    margin-top: 70px;
    .badge {
      width: 80px;
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
  @media screen and (max-width: 959px) {
    #recommendedFilm, #mainActorList, #footerDefault{
      display: none;
    }
    .container{
      max-width: 900px;
    }
  }
  // @media (min-width: 768px){
  // }
  </style>
  
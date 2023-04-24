<template>
    <div id="filmIntrodutionPage" v-if="films.length">
      <div class="container mb-5">
        <div class="row">
          <div class="col-3" style="width: 420px; height: 630px">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${films[currentIndex].poster_path}`"
              width="100%"
              height="auto"
              alt=""
            />
          </div>
          <div class="col-6 briefFilm">
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
          </div>
          <div class="col-3">
            <RecommendedList/>
          </div>
        </div>
      </div>
  
      <div class="container">
        <Title :filmtype ="'Main Actor'"/>
        <div class="row actorList">
          <div class="actorCard col-2" v-for="i in 6" :key="i">
            <img src="~/assets/images/user.jpg" alt="" style="object-fit: cover;"/>
            <p class="m-0 text-center">Rumi Hiiragi</p>
            <strong>Chihiro Ogino / Sen (voice)</strong>
          </div>
        </div>
      </div>
  
      <FilmListStyle1 :filmtype="'Films Top'" />
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import ButtonSuccess from "~/components/common/Button/ButtonSuccess";
  import ButtonDanger from "~/components/common/Button/ButtonDanger";
  import FilmListStyle1 from "~/components/FilmList/FilmListStyle1";
  import RecommendedList from "~/components/FilmList/RecommendedList"
  import Title from '~/components/common/Title'
  export default {
    components: {
      ButtonDanger,
      ButtonSuccess,
      FilmListStyle1,
      RecommendedList,
      Title
    },
    data(){
        return{
            
        }
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
        goToWatch(){
            console.log('okee')
        }
    },

    watch:{

    },
    created(){
        this.getFilms();
    },
    mounted(){
    },
    updated(){
        // console.log('updated', this.$route.params.id, this.currentIndex)
    }
  };
  </script>
  
  <style lang="scss" scoped>
  #filmIntrodutionPage {
    margin-top: 80px;
  
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
  </style>
  
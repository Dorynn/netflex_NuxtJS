<template>
  <div class="homePage">
    <SlideShow/>
    <FilmListStyle1 :filmtype="'Films Up Comming'" :filmList="upcomingFilms"/>
    <FilmListStyle1 :filmtype="'Films Top'" :filmList="topFilms"/>
    <FilmListStyle2 :filmtype="'Films Popular'" :filmList="popularFilms"/>
  </div>
</template>

<script scroped>
import { mapActions, mapGetters } from "vuex";
import FilmListStyle1 from "~/components/FilmListStyle1"
import FilmListStyle2 from "~/components/FilmListStyle2"
export default {
  name: 'IndexPage',
  components:{
    FilmListStyle1, FilmListStyle2
  },
  async asyncData(context){
    await context.store.dispatch('getUpcomingFilms');
    await context.store.dispatch('getTopFilms')
  },
  loading: false,
  data(){
    return{
    }
  },
  computed:{
    ...mapGetters(['topFilms', 'upcomingFilms', 'popularFilms', 'currentPage']),
    
  },
  methods:{
    ...mapActions(['getTopFilms', 'getPopularFilms', 'getUpcomingFilms', 'getDetailFilm', 'getNowPlayingFilms'])
  },
  created(){
    this.getTopFilms();
    this.getPopularFilms();
    this.getUpcomingFilms();
    this.getNowPlayingFilms();
  }
}
</script>

<style>
  .homePage{
    margin-top: 55px;
  }
</style>
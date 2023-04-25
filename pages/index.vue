<template>
  <div class="homePage">
    <SlideShow/>
    <FilmListStyle1 :filmtype="'Films Up Comming'"/>
    <FilmListStyle1 :filmtype="'Films Top'"/>
    <FilmListStyle2 :filmtype="'Films Popular'"/>
  </div>
</template>

<script scroped>
import { mapActions } from "vuex";
import FilmListStyle1 from "../components/FilmList/FilmListStyle1"
import FilmListStyle2 from "../components/FilmList/FilmListStyle2"
export default {
  name: 'IndexPage',
  components:{
    FilmListStyle1, FilmListStyle2
  },
  data(){
    return{
    }
  },
  methods:{
    ...mapActions(['getFilms'])
  },
  created(){
    this.getFilms();
  }
}
</script>

<style>
  .homePage{
    margin-top: 55px;
  }
</style>
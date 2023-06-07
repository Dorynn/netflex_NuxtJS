<template>
  <div id="watchPage" style="margin-top: 80px" v-if="films.length">
    <b-container>
      <b-row>
        <b-col cols="12" xs="12" lg="8" md="8" sm="12">
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="`https://www.youtube.com/embed/${detailFilm.videos.results[0].key}?rel=0`"
            allowfullscreen
          ></b-embed>
          <h2 class="my-3">{{ detailFilm.title }}</h2>
          <div class="mb-4">
            <span
              style="background-color: #1773e3;border-radius: 4px;padding: 3px 8px;margin-right: 4px;"
              ><small class="mr-2">Facebook</small
              ><font-awesome-icon :icon="['fab', 'facebook']" size="lg"
            /></span>
            <span
              style="background-color: #bb3380;border-radius: 4px;padding: 3px 8px;margin-right: 4px;"
              ><small class="mr-2">Instagram</small
              ><font-awesome-icon :icon="['fab', 'instagram']" size="lg"
            /></span>
            <span
              style="background-color: #1c9cea;border-radius: 4px;padding: 3px 8px;margin-right: 4px;"
              ><small class="mr-2">Twitter</small
              ><font-awesome-icon :icon="['fab', 'twitter']" size="lg"
            /></span>
          </div>
          <h5 class="text-orange font-weight-bold">Vote Rate:</h5>
          <b-row align-h="between">
            <b-col cols="auto">
              <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
                length="10"
                size="18"
              ></v-rating>
            </b-col>
            <b-col cols="auto">
              <a href="#" class="badge badge-primary"
                ><font-awesome-icon :icon="['fas', 'thumbs-up']" />Follow 1</a
              >
              <a href="#" class="badge badge-primary">Share</a>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <RecommendedList />
        </b-col>
      </b-row>
    </b-container>
    <FilmListStyle1 :filmtype="'Films Top'" :filmList="topFilms"/>
    <FilmListStyle1 :filmtype="'Now Playing'" :filmList="nowPlayingFilms" />
  </div>
</template>

<script>
import RecommendedList from "~/components/RecommendedList";
import FilmListStyle1 from "~/components/FilmListStyle1";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    RecommendedList,
    FilmListStyle1,
  },
  async asyncData(context){
    await context.store.dispatch('getRecommendFilms',context.params.id)
    await context.store.dispatch('getNowPlayingFilms')
    // return {watchingFilm: res.results}
  },
  data() {
    return {
      rating: null,
    };
  },
  computed: {
    ...mapGetters(["films", 'detailFilm', 'topFilms', 'nowPlayingFilms']),
    currentIndex (){
        return this.films.findIndex((item)=>{
               return item.id == this.$route.params.id})
      }
  },
  methods: {
    ...mapActions(["getFilms", 'getDetailFilm', 'getNowPlayingFilms', 'getTopFilms', 'getRecommendFilms']),
  },
  created() {
    // this.getFilms();
    this.getDetailFilm(this.$route.params.id);
    this.getTopFilms();
    this.getNowPlayingFilms();
    // console.log("created", this.topFilms);
  },

  mounted() {
    // console.log("mounted", this.topFilms);

  }
};
</script>

<style lang="scss">
#watchPage{
  .v-rating {
    .v-icon {
      padding: 0;
      color: grey;
    }
  }
}

</style>

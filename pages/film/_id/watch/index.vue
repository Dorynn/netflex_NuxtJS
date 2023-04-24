<template>
  <div style="margin-top: 55px" v-if="films.length">
    <div class="container">
      <b-row>
        <b-col cols="8">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            allowfullscreen
          ></b-embed>
          <h2>{{ films[currentIndex].title }} hello</h2>
          <div class="mb-2">
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
          <h5>Vote Rate:</h5>
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
    </div>
    <FilmListStyle1 :filmtype="'Films Top'" />
    <FilmListStyle1 :filmtype="'Now Playing'" />
  </div>
</template>

<script>
import RecommendedList from "~/components/FilmList/RecommendedList";
import FilmListStyle1 from "~/components/FilmList/FilmListStyle1";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    RecommendedList,
    FilmListStyle1,
  },
  data() {
    return {
      rating: null,
    };
  },
  computed: {
    ...mapGetters(["films"]),
    currentIndex (){
        return this.films.findIndex((item)=>{
               return item.id == this.$route.params.id})
      }
  },
  methods: {
    ...mapActions(["getFilms"]),
  },
  created() {
    this.getFilms();
    console.log("created", this.$route.params.id);
  },
  updated() {},
};
</script>

<style lang="scss">
.v-rating {
  .v-icon {
    padding: 0;
    color: grey;
  }
}
</style>

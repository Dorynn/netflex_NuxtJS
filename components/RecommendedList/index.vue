<template>
  <div id="recommendedFilm">
    <h3>Recommended</h3>
    <div class="film mb-3" style="min-height: 50px; display: flex; width: 40px" v-for="item in recommendFilms.slice(0,10)" :key="item.id">
      <img
        :src="item.poster_path?`https://image.tmdb.org/t/p/w500${item.poster_path}`:require('~/assets/images/error.jpg')"
        alt=""
        width="100%"
        style="object-fit: cover;"
      />
      <div class="ml-3">
        <small class="m-0 font-weight-bold filmTitle" @click="goToFilm(item.id)" :id="item.id">{{ item.title }}</small>
        <br />
        <b-form-rating
          id="rating-inline"
          inline
          :value="item.vote_average"
          stars="10"
          readonly
        ></b-form-rating>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props:{
    currentId:String,
  },
  data(){
    return{
      id: null
    }
  },
  computed:{
    ...mapGetters(['recommendFilms'])
  },
  methods:{
    goToFilm(id){
      this.id = id
      this.$router.push(`/film/${this.id}`)
    },
  },
};
</script>

<style lang="scss" scoped>
#recommendedFilm {
  .film {
    .b-rating {
      border: none;
      background-color: transparent;
      color: var(--star-primary);
      padding: 0;
      height: fit-content;
      font-size: 12px;
    }
  }
}
</style>

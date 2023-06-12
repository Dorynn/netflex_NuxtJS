<template>
  <div class="container" style="margin-top: 100px">
    <h1>
      <span class="text-orange">Kết quả tìm kiếm cho: </span>
      <span>{{ $route.query.query }}</span>
    </h1>
    <v-divider class="theme--dark mt-1 mb-5"></v-divider>
    <b-row align-h="end">
      <b-col
        cols="6"
        xs="6"
        sm="6"
        md="3"
        lg="3"
        xl="3"
        v-for="film in searchingFilms"
        :key="film.id"
      >
        <Card
          :id="film.id"
          :src="
            film.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${film.backdrop_path}`
              : null
          "
          :title="film.title"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FilmListStyle2 from "~/components/FilmListStyle2";
import Card from "~/components/common/card";
export default {
  // async asyncData(context){
  //   const response = await context.$axios.$get(`/search/movie?query=${context.route.query.query}`)
  //   console.log(context)
  //   console.log(response)
  //   return{searchingFilms: response.results}
  // },
  data() {
    return {
      searchingFilms: [],
    };
  },
  async fetch() {
    const response = await this.$axios.$get(
      `/search/movie?api_key=${process.env.moviedbApiKey}&query=${this.$route.query.query}`
    );
    this.searchingFilms = response.results;
  },
  components: {
    FilmListStyle2,
    Card,
  },
  computed: {
    res() {
      return this.$route.query.query;
    },
  },
  watch: {
    res() {
      console.log("change");
      this.$fetch();
    },
  },
  created() {
    // console.log(this.$route.query.query)
    console.log(this.res);
  },
};
</script>

<style lang="scss">
// .cardImage {
//   position: relative;
//   height: fit-content;
//   .buttonCircle {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -100%);
//   }
//   img {
//     width: 100%;
//     height: auto;
//     // min-height: 150px;
//     // max-height: 250px;
//     border-radius: 15px;
//     cursor: pointer;
//   }
//   .filmTitle {
//     transition: 0.5s;
//     cursor: pointer;
//     &:hover {
//       color: var(--hover-color);
//     }
//   }
// }
</style>

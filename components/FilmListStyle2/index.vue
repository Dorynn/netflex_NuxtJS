<template>
  <FilmList :filmtype="filmtype" :filmList="filmList">
    <b-row align-h="end">
      <b-col
        cols="6"
        xs="6"
        sm="6"
        md="3"
        lg="3"
        xl="3"
        v-for="film in movies"
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
    <b-pagination
      v-model="curP"
      :total-rows="rows"
      :per-page="perPage"
      limit="5"
      first-number
      last-number
    ></b-pagination>
  </FilmList>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
import FilmList from "~/components/FilmList";
import Card from "~/components/common/Card";
export default {
  data() {
    return {
      // currentPage: 1,
      curP: 1,
      perPage: 20,
      rows: 600,
      movies: [],
    };
  },
  async fetch() {
    await this.$axios
      .$get(
        `/movie/popular?api_key=${process.env.moviedbApiKey}&page=${this.curP}`
      )
      .then((response) => {
        this.movies = response.results;
        // console.log(response, this.movies)
      });
  },
  props: {
    filmtype: String,
    filmList: Array,
  },
  watch: {
    curP() {
      window.localStorage.setItem("currentPage", this.curP);
      this.$fetch();
    },
  },
  components: {
    Card,
    FilmList,
  },
  computed: {
    ...mapGetters(["popularFilms", "currentPage", "isReload"]),
    ...mapState(["currentPage"]),
  },
  methods: {
    ...mapActions(["getPopularFilms"]),
    ...mapMutations(["SET_CURRENT_PAGE", "SET_RELOAD"]),
  },
  mounted() {
    window.addEventListener("beforeunload", () => {
      this.SET_RELOAD(true);
    });
    this.SET_RELOAD(window.localStorage.getItem('isReload'));
    this.SET_CURRENT_PAGE(window.localStorage.getItem('currentPage'));
    if (window.localStorage.getItem('isReload')) {
      this.curP = window.localStorage.getItem('currentPage');
    }
  },
};
</script>

<style lang="scss">
.container {
  margin-top: 40px;
  .b-pagination {
    margin-top: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    li.page-item.active {
      background-color: var(--pagination-button-active);
      border: none;
      outline: none;
    }
    li.page-item {
      margin: 0 10px;
      border-radius: 4px;
      overflow: hidden;
      width: 34px;
      height: 34px;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      background-color: var(--pagination-button);
      button {
        width: 34px;
        height: 34px;
        border: none;
        color: #fff;
        background-color: transparent;
        padding: 2px 10px;
      }
      .page-link {
        background-color: transparent;
        border: none;
        margin: 0;
      }
    }
  }
}
</style>

<template>
  <div class="container">
    <Title :filmtype="filmtype" />
    <b-row align-h="end">
      <b-col
        cols="6"
        sm="6"
        md="3"
        lg="3"
        xl="3"
        v-for="film in films"
        :key="film.id"
      >
        <Card
          :id="film.id"
          :src="`https://image.tmdb.org/t/p/w500${film.backdrop_path}`"
          :title="film.title"
        />
      </b-col>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      limit="5"
      first-number
      last-number
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonCircle from "../../common/Button/ButtonCircle";
import Title from "~/components/common/Title";
import Card from "~/components/common/Card";
export default {
  data() {
    return {
      currentPage: 1,
      rows: 90,
      perPage: 3,
    };
  },
  props: {
    filmtype: String,
  },
  components: {
    ButtonCircle,
    Title,
    Card,
  },
  computed: {
    ...mapGetters(["films"]),
  },
};
</script>

<style lang="scss">
.container {
  margin-top: 40px;
  .b-pagination {
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

<template>
  <FilmList :filmtype="filmtype" :film="filmList">
    <swiper
      :slides-per-view="4"
      :space-between="30"
      :loop="false"
      :navigation="true"
      :breakpoints="breakPoints"
    >
      <swiper-slide v-for="film in filmList" :key="film.id" >
        <Card
          :id="film.id"
          :title="film.title"
          :src="film.backdrop_path?`https://image.tmdb.org/t/p/w500${film.backdrop_path}`:null"
        />
      </swiper-slide>
    </swiper>
  </FilmList>
</template>

<script>
import Card from '~/components/common/Card';
import FilmList from "~/components/FilmList";
import {mapGetters } from "vuex";
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
// Import Swiper styles
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);
export default {
  data() {
    return {
      breakPoints: {
        1024: { slidesPerView: 4, spaceBetween: 30 },

        320: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    };
  },
  props: {
    filmtype: String,
    filmList: Array,
  },
  components: {
    Card,
    Swiper,
    SwiperSlide,
    FilmList
  },
  computed: {
  },
};
</script>


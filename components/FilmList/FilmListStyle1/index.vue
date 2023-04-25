<template>
  <b-container class="mt-3" v-if="films.length>1">
    <Title :filmtype="filmtype" />
    <swiper
      :slides-per-view="4"
      :space-between="30"
      :loop="true"
      :navigation="true"
      :breakpoints="breakPoints"
    >
      <swiper-slide v-for="film in films" :key="film.id" >
        <Card
          :id="film.id"
          :title="film.title"
          :src="`https://image.tmdb.org/t/p/w500${film.backdrop_path}`"
        />
      </swiper-slide>
    </swiper>
  </b-container>
</template>

<script>
import Title from "~/components/common/Title";
import Card from '~/components/common/Card'
import {mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "vueperslides/dist/vueperslides.css";
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
  },
  components: {
    VueperSlide,
    VueperSlides,
    Title,
    Card,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(["films"]),
  },
};
</script>

<style lang="scss">
.container {
  margin-top: 40px;
}
</style>

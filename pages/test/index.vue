<template>
  <div v-if="films.length>1">
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{ test_2: true }"
      >
        <div>{{ 29 + n }}</div>
        <img
          :src="getImageUrl(29 + n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        />
      </swiper-slide>
    </swiper>

    <swiper
      :slides-per-view="4"
      :space-between="30"
      loop
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{ test_2: true }"
      >
        <div>{{ 34 + n }}</div>
        <img
          :src="getImageUrl(34 + n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        />
      </swiper-slide>
    </swiper>

    <h2>pagination - navigation</h2>
    <swiper
      :slides-per-view="4"
      :space-between="30"
      :loop="false"
      :pagination="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="mb-5"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{ test_2: true }"
      >
        <div>{{ 34 + n }}</div>
        <img
          :src="getImageUrl(34 + n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        />
      </swiper-slide>
    </swiper>
    <ForgotPassword/>

    <!-- <FilmList :filmtype="'Top Film'">
      <swiper
        :slides-per-view="4"
        :space-between="30"
        :loop="false"
        :navigation="true"
        @slideChange="onSlideChange"
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
    </FilmList> -->
  </div>
</template>

<script>
import Card from "~/components/common/Card";
import FilmList from "~/components/FilmList";
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import ForgotPassword from "~/components/common/Modal/ForgotPassword"
// Import Swiper styles
import "swiper/swiper-bundle.css";
import { mapActions, mapGetters } from "vuex";
SwiperCore.use([Navigation, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    Card,
    FilmList,
    ForgotPassword
  },
  data(){
    return{
      breakPoints: {
        1024: { slidesPerView: 4, spaceBetween: 30 },
        320: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    }
  },
  computed: {
    ...mapGetters(["films"]),
  },
  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`;
    },
    onSwiper(swiper) {
      // console.log(swiper);
    },
    onSlideChange() {
      // console.log("slide change");
    },
    ...mapActions(["getFilms"]),
  },
  created() {
    this.getFilms();
  },
};
</script>

<style lang="scss" scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto,
.mx-auto {
  margin-left: auto;
}
.mr-auto,
.mx-auto {
  margin-right: auto;
}
</style>

<template>
  <div class="container" v-if="films.length>1">
    <Title :filmtype="filmtype" />
    <div class="wapper"></div>
    <swiper
      :slides-per-view="4"
      :space-between="30"
      :loop="false"
      :navigation="true"
      @slideChange="onSlideChange"
      :breakpoints="breakPoints"
    >
      <swiper-slide v-for="film in films" :key="film.id" class="cardImage">
        <div
          @mouseover="showButtonCircle(film.id)"
          @mouseleave="hideButtonCircle()"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500${film.backdrop_path}`"
            alt=""
          />

          <ButtonCircle v-show="currentId === film.id" :currentId="currentId" />
        </div>
        <p
          class="my-3 font-weight-bold text-center filmTitle"
          @click="goToFilm(film.id)"
        >
          {{ film.title }}
        </p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ButtonCircle from "../../common/Button/ButtonCircle";
import { VueperSlides, VueperSlide } from "vueperslides";
import Title from "~/components/common/Title";
import "vueperslides/dist/vueperslides.css";
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
// Import Swiper styles
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);
export default {
  data() {
    return {
      currentId: null,
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
    ButtonCircle,
    VueperSlide,
    VueperSlides,
    Title,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(["films"]),
  },
  watch: {},

  methods: {
    ...mapActions(["getFilms"]),
    showButtonCircle(id) {
      this.currentId = id;
    },
    hideButtonCircle() {
      this.currentId = null;
    },
    goToFilm(id) {
      this.$router.push(`/film/${id}`);
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
    goToWatch(id){
      console.log('clickkk')
    }
  },

  created() {
    this.getFilms();
    console.log(this);
  },
  mounted() {
  },
};
</script>

<style lang="scss">
.container {
  margin-top: 40px;
  .cardImage {
    position: relative;
    height: fit-content;
    .buttonCircle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
      cursor: pointer;
    }
    .filmTitle {
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        color: var(--hover-color);
      }
    }
  }
}

@media screen and (min-width: 1024px) {
}
</style>

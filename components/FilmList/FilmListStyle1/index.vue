<template>
  <div class="container mt-5">
    <h1 style="font-size: 60px; font-weight: 600; margin: 0 0px 8px">
      {{ filmtype }}
    </h1>
    <hr style="background-color: #333333; margin: 12px 0 40px" />
    <div class="wapper">
    </div>
    <VueperSlides
      class="no-shadow"
      :arrows-outside="false"
      :visible-slides="4"
      :bullets="false"
      :gap="2"
      :breakpoints="breakPoints"
      :touchable="false"
    >
      <vueper-slide v-for="film in films" :key="film.id" class="cardImage">
        <template #content>
          <div
            @mouseover="showButtonCircle(film.id)"
            @mouseleave="hideButtonCircle()"
          >
            <img :src="`https://image.tmdb.org/t/p/w500${film.backdrop_path}`" alt="" />

            <ButtonCircle
              v-show="currentId === film.id"
            />
          </div>
          <p class="my-3 font-weight-bold text-center filmTitle">
            {{ film.title }}
          </p>
        </template>
      </vueper-slide>
    </VueperSlides>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ButtonCircle from "../../common/Button/ButtonCircle";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  data() {
    return {
      currentId: null,
      breakPoints:{ 1024: { visibleSlides: 2, slideMulitiple: 2 }, 320:{
        visibleSlides: 4, slideMulitiple: 4
      } }
    };
  },
  props: {
    filmtype: String,
  },
  components: {
    ButtonCircle,
    VueperSlide,
    VueperSlides,
  },
  computed: {
    ...mapGetters(["films"]),
  },
  watch: {
  },

  methods: {
    ...mapActions(['getFilms']),
    showButtonCircle(id) {
      this.currentId = id;
    },
    hideButtonCircle() {
      this.currentId = null;
    },
  },

  created() {
    this.getFilms();
    console.log(this)
  },
};
</script>

<style lang="scss">
  // .vueperslides__parallax-wrapper {
  //   padding-bottom: 20%;
  //   background-color: green;
  // }
.container {
  // padding: 12px;
  // width: 90%;
  // margin: auto;
  .vueperslides {
    height: 230px;
    .vueperslides__inner{
    }
  }

  .vueperslides__arrow {
    top: 50%;
    transform: translateY(-200%);
  }
  // .vueperslides__arrow--prev {
  //   position: absolute;
  //   left: 0px;
  // }
  // .vueperslides__arrow--next {
  //   position: absolute;
  //   right: 0;
  // }
  // .wapper {
  //   display: flex;
  //   overflow-x: hidden;
  //   margin-top: 100px;
  //   height: fit-content;
  // }
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
      // min-height: 150px;
      // max-height: 250px;
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

@media screen and (min-width: 1024px){
  
}
</style>

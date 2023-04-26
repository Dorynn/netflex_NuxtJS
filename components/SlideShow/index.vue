<template>
  <div id="slideShow" 
  >
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      v-b-hover="showControlSliderIcons"

      
      >
      <b-carousel-slide v-for="item in films" :key="item.id">
        <template #img>
          <img
            class="d-block w-100"
            width="100vw"
            height="700px"
            :src="`https://image.tmdb.org/t/p/original${item.backdrop_path}`"
            alt="image slot"
            style="object-fit: cover;"
          />
        </template>
        <div class="contentSlider container text-left">
          <h1 class="font-weight-bold text-wrap" style="font-size: 48px;" ref="filmSlider">{{ item.title }}</h1>
          <p class="mb-4 overview">{{ item.overview }}</p>
          <ButtonSucess :currentId="item.id" />
          <ButtonDanger :currentId="item.id"/>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import ButtonSucess from '../common/Button/ButtonSuccess'
import ButtonDanger from '../common/Button/ButtonDanger'
import { mapGetters } from 'vuex';
export default {
  components:{
    ButtonSucess, ButtonDanger
  },
  data() {
    return {
      slide: 0,
    };
  },
  watch:{
  },
  computed:{
    ...mapGetters(['films'])
  },
  methods: {
    showControlSliderIcons(isHovered){
      const nextIcon=document.querySelector('.carousel-control-next')
      const prevIcon=document.querySelector('.carousel-control-prev')
      // console.log('whatt...', nextIcon)
      if(isHovered){
        nextIcon.style.right = '15px'
        prevIcon.style.left = '15px'
      }else{
        nextIcon.style.right = '-40px'
        prevIcon.style.left = '-40px'

      }
    },
  },
};
</script>

<style lang="scss">
  #slideShow{
    overflow: hidden;
    margin-bottom: 35px;
    .carousel-caption{
      top: 50%;
      transform: translateY(-50%);
      height: fit-content;
      left: 100px;
      .contentSlider{
        .overview{
          width: 816px;
          
        }
        .buttonSuccess{
          margin-right: 15px;
        }
      }
    }
    .carousel-control-next,.carousel-control-prev{
      background-color: #3d3c3c98;
      height: 36px;
      width: 36px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 100px;
      transition: 0.1s;
      &:hover{
        background-color: #3d3c3c98; ;
      }
    }
    .carousel-control-next{
      right: -40px;
    }
    .carousel-control-prev{
      left: -40px;
    }
  }

  @media  screen and (max-width: 960px) {

  }
</style>

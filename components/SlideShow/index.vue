<template>
  <div class="slideShow" 
  >
  <!-- @mouseover="showControlSliderIcons()"
  @mouseleave="hideControlSliderIcons()" -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      background="#ababab"
      img-width="1024"
      img-height="700"
      style="text-shadow: 1px 1px 2px #333"
      v-b-hover="showControlSliderIcons"
      
      >
      <b-carousel-slide v-for="item in films" :key="item.id">
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="700"
            :src="item.url"
            alt="image slot"
          />
        </template>
        <div class="contentSlider text-left">
          <h1 class="font-weight-bold" style="font-size: 48px;" ref="filmSlider">{{ item.title }}</h1>
          <p class="mb-4">{{ item.brief }}</p>
          <ButtonSucess/>
          <ButtonDanger/>
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
      console.log('whatt...', nextIcon)
      if(isHovered){
        nextIcon.style.right = '15px'
        prevIcon.style.left = '15px'
      }else{
        nextIcon.style.right = '-40px'
        prevIcon.style.left = '-40px'

      }
    },
  },

  created(){
    console.log('created')
  },
  beforeMount(){
    console.log('mount')
  },
  mounted(){
    console.log('mounted', this.$refs.filmSlider)

  },
  beforeUpdate(){
    console.log('before update')
  },
  updated(){
    console.log('updated')
  },
  beforeDestroy(){
    console.log('before destroy')
  },
  destroyed(){
    console.log('destroyed')
  }
};
</script>

<style lang="scss">
  .slideShow{
    overflow: hidden;
    .carousel-caption{
      top: 50%;
      transform: translateY(-50%);
      height: fit-content;
      left: 100px;
      .contentSlider{
        width: 637px;
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
</style>

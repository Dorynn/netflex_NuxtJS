<template>
  <div class="slideShow" 
       @mouseover="showControlSliderIcons()"
       @mouseleave="hideControlSliderIcons()"
  >
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      :controls="isShowControlSliderIcon"
      background="#ababab"
      img-width="1024"
      img-height="700"
      style="text-shadow: 1px 1px 2px #333"
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
          <h1 class="font-weight-bold" style="font-size: 48px;">{{ item.title }}</h1>
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
      // sliding: null,
      isShowControlSliderIcon: false,
    };
  },
  watch:{
    isShowControlSliderIcon(){
      console.log(this.isShowControlSliderIcon)
    }
  },
  computed:{
    ...mapGetters(['films'])
  },
  methods: {
    showControlSliderIcons(){
      console.log('whatt...')
      this.isShowControlSliderIcon = true;
    },
    hideControlSliderIcons(){
      this.isShowControlSliderIcon = false;
    }
  },

  created(){
    console.log('created', this.isShowControlSliderIcon)
  },
  beforeMount(){
    console.log('mount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('before update', this.isShowControlSliderIcon)
  },
  updated(){
    console.log('updated', this.isShowControlSliderIcon)
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
  @keyframes control-next-icon-in {
    0%{ right: -10px;}
    100%{right: 15px;}
  }
  @keyframes control-next-icon-out {
    0%{ right: 15px;}
    100%{right: -10px;}
  }
  @keyframes control-prev-icon-in {
    0%{ left: -10px;}
    100%{left: 15px;}
  }
  @keyframes control-prev-icon-out {
    100%{left: 15px;}
    0%{ left: -10px;}
  }
  .slideShow{
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
      transition: 0.5s;
      &:hover{
        background-color: #3d3c3c98; ;
      }
    }
    .carousel-control-next{
      animation: control-next-icon-in 0.1s;
      right: 15px;
    }
    .carousel-control-prev{
      left: 15px;
      animation: control-prev-icon-in 0.1s;
    }
  }
</style>

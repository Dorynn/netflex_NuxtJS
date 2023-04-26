<template>
  <div id="filmCard">
    <div class="position-relative" v-b-hover="showCircleButton">
      <img :src="src" alt="" />
      <ButtonCircle v-show="isShowCircleButton" :currentId="id"/>
    </div>
    <p class="mt-3 mb-0 font-weight-bold text-center filmTitle" @click="goToFilm()">{{ title }}</p>
  </div>
</template>

<script>
import ButtonCircle from '~/components/common/Button/ButtonCircle'
export default {
  props: {
    src: String,
    id: {
      type: [String, Number],
    },
    title: String,
  },
  components:{
    ButtonCircle
  },
  data() {
    return {
      isShowCircleButton: null,
    };
  },
  methods: {
    showCircleButton(isHovered) {
      this.isShowCircleButton = isHovered
    },
    goToFilm(){
      this.$router.push(`/film/${this.id}`)
    }
  },
};
</script>

<style lang="scss">
#filmCard{
  .buttonCircle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    transition: 0.5s;
    &:hover {
      color: var(--hover-color);
    }
  }

}
</style>

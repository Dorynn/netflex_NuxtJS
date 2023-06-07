<template>
  <button class="buttonDanger" @click="goToWatch()">
    <span class="text-uppercase font-weight-bold mr-2" style="font-size: 14px"
      >Watch trailer</span
    >
    <span><font-awesome-icon :icon="['fas', 'circle-chevron-right']" /></span>
  </button>
</template>

<script>
export default {
  props:{
    currentId:{
      type:[Number, String]
    }
  },
  methods:{
    goToWatch(){
      this.$router.push(`/film/${this.currentId}/watch`)
    },
  },
  create(){
    
  }
};
</script>

<style lang="scss" scoped>
    .buttonDanger{
        background-color: var(--button-danger);
        border: none;
        color: #fff;
        padding: 6px 16px;
        border-radius: 4px;
        transition: 0.5s;
        z-index: 1000;
        &:hover{
            background-color: var(--hover-button-danger);
        }
    }
</style>

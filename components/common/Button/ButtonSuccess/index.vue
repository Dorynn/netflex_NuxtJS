<template>
    <button class="buttonSuccess" @click="goToWatch()">
        <span class="text-uppercase font-weight-bold mr-2" style="font-size:14px;">Watch now</span>
        <span><font-awesome-icon :icon="['fas', 'circle-right']" /></span>
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .buttonSuccess{
    outline: none;
    border: none;
    color: #fff;
    padding: 6px 16px;
    border-radius: 4px;
    background-color: var(--button-success);
    transition: 0.5s;
    z-index: 1000;
    &:hover{
      background-color: var(--hover-button-success);
    }
  }
</style>
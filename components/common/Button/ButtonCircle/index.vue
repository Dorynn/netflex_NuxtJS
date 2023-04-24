<template>
    <button class="buttonCircle" @click="goToWatch()">
        <font-awesome-icon :icon="['fas', 'play']" />
    </button>
</template>

<script>
export default {
  props:{
    currentId: {
      type:[String, Number]
    }
  },
  methods:{
    goToWatch(){
      console.log('onclick....')
      this.$router.push(`/film/${this.currentId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .buttonCircle{
    border: none;
    color: #fff;
    font-size: 24px;
    padding: 2px 10px 2px 12px;
    border-radius: 100px;
    background-color: var(--button-circle);
    z-index: 1000;
  }
</style>
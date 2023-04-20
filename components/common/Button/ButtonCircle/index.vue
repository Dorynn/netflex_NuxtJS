<template>
    <button class="buttonCircle">
        <font-awesome-icon :icon="['fas', 'play']" />
    </button>
</template>

<script>
export default {

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
  }
</style>
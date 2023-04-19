<template>
    <button class="buttonSuccess">
        <span class="text-uppercase font-weight-bold mr-2" style="font-size:14px;">Watch now</span>
        <span><font-awesome-icon :icon="['fas', 'circle-right']" /></span>
    </button>
</template>

<script>
export default {

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
    &:hover{
      background-color: var(--hover-button-success);
    }
  }
</style>
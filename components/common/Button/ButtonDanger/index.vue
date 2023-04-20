<template>
  <button class="buttonDanger">
    <span class="text-uppercase font-weight-bold mr-2" style="font-size: 14px"
      >Watch trailer</span
    >
    <span><font-awesome-icon :icon="['fas', 'circle-chevron-right']" /></span>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .buttonDanger{
        background-color: var(--button-danger);
        border: none;
        color: #fff;
        padding: 6px 16px;
        border-radius: 4px;
        transition: 0.5s;
        &:hover{
            background-color: var(--hover-button-danger);
        }
    }
</style>

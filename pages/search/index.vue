<template>
  <div class="container" style="margin-top: 100px; height: 100vh;">
    <h1><span class="text-orange">Kết quả tìm kiếm cho: </span> <span>spirited away</span></h1>
    <v-divider class="theme--dark mt-1 mb-5"></v-divider>
    <div class="cardImage col-3 ">
      <div>
        <img
          :src="`https://image.tmdb.org/t/p/w500/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg`"
          alt=""
        />

        <ButtonCircle />
      </div>
      <p class="my-3 font-weight-bold text-center filmTitle">Spirited away</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cardImage {
  position: relative;
  height: fit-content;
  .buttonCircle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  img {
    width: 100%;
    height: auto;
    // min-height: 150px;
    // max-height: 250px;
    border-radius: 15px;
    cursor: pointer;
  }
  .filmTitle {
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: var(--hover-color);
    }
  }
}
</style>

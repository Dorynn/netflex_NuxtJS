<template>
  <div id="recommendedFilm">
    <h3>Recommended</h3>
    <div class="film mb-3" style="height: 50px; display: flex" v-for="i in 10" :key="i">
      <img
        src="~/assets/images/spririted-away-poster.jpg"
        alt=""
        height="100%"
      />
      <div class="ml-3">
        <small class="m-0 font-weight-bold">Spirited Away</small>
        <br />
        <b-form-rating
          id="rating-inline"
          inline
          value="8.5"
          stars="10"
          readonly
        ></b-form-rating>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#recommendedFilm {
  .film {
    .b-rating {
      border: none;
      background-color: transparent;
      color: var(--star-primary);
      padding: 0;
      height: fit-content;
      font-size: 12px;
    }
  }
}
</style>

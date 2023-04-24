<template>
  <div>
    <div
      @mouseover="showButtonCircle(id)"
      @mouseleave="hideButtonCircle()"
    >
      <img
        :src="src"
        alt=""
      />

      <ButtonCircle v-show="currentId === id" />
    </div>
    <p class="my-3 font-weight-bold text-center filmTitle">
      {{ film.title }}
    </p>
  </div>
</template>

<script>
export default {
    props:{
        src:String,
        id: {
            type:[String, Number]
        }
    }

};
</script>

<style>

</style>

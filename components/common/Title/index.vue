<template>
  <div >
    <h1 id="titleList" style="font-size: 60px; font-weight: 600">
      {{ filmtype }}
    </h1>
    <v-divider class="theme--dark mt-1 mb-5"></v-divider>
  </div>
</template>

<script>
export default {
    props:{
        filmtype: String
    }
}
</script>

<style>

</style>
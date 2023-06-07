<template>
  <b-container class="mt-3">
    <Title :filmtype="filmtype" />
    <slot></slot>
  </b-container>
</template>

<script>
import Title from "~/components/common/Title";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  props: {
    filmtype: String,
    film: Array
  },
  components: {
    Title
  },
  computed: {
    ...mapGetters(["films", 'topFilms']),
  },
};
</script>

<style lang="scss">
.container {
  margin-top: 40px;
}
</style>

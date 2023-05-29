<template>
  <b-container class="mt-3" v-if="films.length > 1">
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
  },
  components: {
    Title
  },
  computed: {
    ...mapGetters(["films"]),
  },
};
</script>

<style lang="scss">
.container {
  margin-top: 40px;
}
</style>

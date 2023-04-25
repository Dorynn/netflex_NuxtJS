<template>
  <div>
    <HeaderDefault/>
    <nuxt />
    <FooterDefault/>
  </div>
</template>

<script>
import HeaderDefault from "~/components/common/HeaderDefault";
import FooterDefault from "~/components/common/FooterDefault";
export default {
  components: {
    HeaderDefault,
    FooterDefault,
  },
};
</script>


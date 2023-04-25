<template>
  <div id="footerDefault">
    <div class="socialLinkList">
      <v-btn icon class="theme--dark">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </v-btn>
      <v-btn icon class="theme--dark">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </v-btn>
      <v-btn icon class="theme--dark">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </v-btn>
      <v-btn icon class="theme--dark">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </v-btn>
    </div>
    <v-divider class="theme--dark mt-1 mb-5"></v-divider>
    <p class="m-0 pb-3">2023 - <strong>Vuetify</strong></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#footerDefault {
  text-align: center;
  background-color: var(--bg-footer);
  .socialLinkList {
    padding: 16px;
    .v-btn--icon{
        margin: 0 15px;
        .v-btn__content{
            font-size: 22px;
        }
    }
  }
}
</style>

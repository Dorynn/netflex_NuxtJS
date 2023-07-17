<template>
  <div class="profile">
    <v-container fluid="true" class="grey lighten-5">
      <v-row>
        <v-col cols="2">
          <v-card outlined height="100vh" dark>
            <v-avatar width="80%" height="auto" class="text-center">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" 
            /></v-avatar>
          </v-card>
        </v-col>
        <v-col cols="10">
          <v-card outlined height="100vh" dark></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.profile {
  margin-top: 60px;
}
</style>
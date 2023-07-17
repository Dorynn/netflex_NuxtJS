<template>
  <div class="profile">
    <v-container fluid="true" class="grey lighten-5">
      <v-row>
        <v-col cols="2">
          <v-card outlined height="100vh" dark>
            <v-avatar width="90%" height="auto" class="ml-1 mt-2">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
            /></v-avatar>
          </v-card>
        </v-col>
        <v-col cols="10">
          <v-card outlined height="100vh" dark>
            <div class="p-3">
              <h1 class="text-center">Profile</h1>
              <div class="text-inf" >
                <p>dolinha1k12@gmail.com</p>
                <p>Change email</p>
              </div>
              <div class="text-inf" >
                <p>Password: *************</p>
                <p>Change password</p>
              </div>
              <div class="text-inf" >
                <p>Phone number: 123823355</p>
                <p>Change phone number</p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.profile {
  margin-top: 60px;
}

.text-inf{
  display: flex;
  justify-content: space-between;
}
</style>
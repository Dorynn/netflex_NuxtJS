<template>
    <b-container id="mainActorList">
        <Title :filmtype ="'Main Actor'"/>
        <div class="row actorList">
          <div class="actorCard col-2" v-for="i in 6" :key="i">
            <img src="~/assets/images/user.jpg" alt="" style="object-fit: cover;"/>
            <p class="m-0 text-center">Rumi Hiiragi</p>
            <strong>Chihiro Ogino / Sen (voice)</strong>
          </div>
        </div>
      </b-container>
</template>

<script>
import Title from '~/components/common/Title'
export default {
    props:{
        filmtype:String
    },
    components:{
        Title,
    }
}
</script>

<style>

</style>
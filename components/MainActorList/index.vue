<template>
    <FilmList id="mainActorList" :filmtype="filmtype">
        <div class="row actorList">
          <div class="actorCard col-2" v-for="i in 6" :key="i">
            <img src="~/assets/images/user.jpg" alt="" style="object-fit: cover;"/>
            <p class="m-0 text-center">Rumi Hiiragi</p>
            <strong>Chihiro Ogino / Sen (voice)</strong>
          </div>
        </div>
      </FilmList>
</template>

<script>
import FilmList from '~/components/FilmList';
export default {
    props:{
        filmtype:String
    },
    components:{
        FilmList,
    }
}
</script>

<style>

</style>
<template>
    <FilmList id="mainActorList" :filmtype="filmtype">
        <div class="row actorList">
          <div class="actorCard col-2" v-for="i in 6" :key="i">
            <img :src="`https://image.tmdb.org/t/p/w500${actors[i-1].profile_path}`" alt="" style="object-fit: cover;"/>
            <p class="m-0 text-center"> {{actors[i-1].original_name}}</p>
            <strong>{{actors[i-1].character}}</strong>
          </div>
        </div>
    </FilmList>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FilmList from '~/components/FilmList';
export default {
    props:{
        filmtype:String,
        currentId: String,
    },
    components:{
        FilmList,
    },
    computed:{
        ...mapGetters(['actors'])
    },
}
</script>

<style>
.actorList {
    
}
</style>
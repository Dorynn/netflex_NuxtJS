<template>
    <FilmList id="mainActorList" :filmtype="filmtype" v-if="actors.length>0">
        <div class="row actorList" v-if="actors.length > 6">
          <div class="actorCard col-2"  v-for="item in actors.slice(0,6)" :key="item.id" >
            <img :src="item.profile_path!=null?`https://image.tmdb.org/t/p/w500${item.profile_path}`:require('~/assets/images/error.jpg')" alt="" style="object-fit: cover;"/>
            <p class="m-0 text-center"> {{item?item.original_name:""}}</p>
            <strong>{{item.character}}</strong>
          </div>
        </div>
        <div class="row actorList" v-else>
          <div class="actorCard col-2"  v-for="item in actors" :key="item.id" >
            <img :src="item.profile_path!=null?`https://image.tmdb.org/t/p/w500${item.profile_path}`:require('~/assets/images/error.jpg')" alt="" style="object-fit: cover;"/>
            <p class="m-0 text-center"> {{item?item.original_name:""}}</p>
            <strong>{{item.character}}</strong>
          </div>
        </div>

    </FilmList>
</template>

<script>
import { mapGetters } from 'vuex';
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
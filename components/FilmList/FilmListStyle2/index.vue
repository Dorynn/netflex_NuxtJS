<template>
  <div class="filmList mt-5">
    <h1 style="font-size: 60px; font-weight: 600;">{{ filmtype }}</h1>
    <hr style="background-color: #333333"/>
    <div class="wapper">
        <div class="card-image col-3" v-for="film in films" :key="film.id">
            <img :src="film.url" alt="">
            <p class="my-3 font-weight-bold text-center filmTitle">Spirited Away</p>
        </div>
    </div>
    <b-pagination
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props:{
        filmtype: String
    },
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters(['films'])
    }
}
</script>

<style lang="scss" scoped>
.filmList{
    padding: 12px;
    width: 94%;
    margin: auto;
    .wapper{
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        .card-image{
            width: 24%;
            height: fit-content;
            padding: 0;
            img{
                width: 100%;
                height: 250px;
                border-radius: 15px;
            }
            .filmTitle{
                transition: 0.5s;
                cursor: pointer;
                &:hover{
                    color: var(--hover-color);
                }
            }
        }

    }
}
</style>
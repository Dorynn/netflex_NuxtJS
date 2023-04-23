<template>
  <div class="container mt-5">
    <h1 style="font-size: 60px; font-weight: 600; ">{{ filmtype }}</h1>
    <hr style="background-color: #333333;"/>
    <b-row align-h="end" class="wapper">
        <b-col class="card-image" cols="6" sm="6" md="3" lg="3" xl="3" v-for="film in films" :key="film.id">
            <div
                @mouseover="showButtonCircle(film.id)"
                @mouseleave="hideButtonCircle()"
            >
                <img :src="`https://image.tmdb.org/t/p/w500${film.backdrop_path}`" alt="">
                <ButtonCircle v-show = "isShowCircleButton && currentId===film.id"/>
            </div>
            <p class="my-3 font-weight-bold text-center filmTitle">{{ film.title }}</p>
        </b-col>
    </b-row>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        limit="5"
        first-number
        last-number
        
      ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ButtonCircle from '../../common/Button/ButtonCircle'
export default {
    data(){
        return{
            isShowCircleButton: true,
            currentId: null,
            currentPage:1,
            rows:90,
            perPage: 3,
        }
      },
      props:{
          filmtype: String
      },
      components:{
        ButtonCircle
      },
      computed:{
          ...mapGetters(['films'])
      },
      watch:{
        isShowCircleButton(){
            console.log('show: ', this.isShowCircleButton)
        }
      },
      methods:{
        showButtonCircle(id){
            this.isShowCircleButton = true;
            this.currentId = id
        },
        hideButtonCircle(){
            this.isShowCircleButton = false
        }
      }
}
</script>

<style lang="scss" >
.container{
    // padding: 12px;
    // width: 94%;
    // margin: auto;
    .wapper{
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        .card-image{
            // width: 100%;
            // height: fit-content;
            position: relative;
            .buttonCircle{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -100%);
            }
            img{
                width: 100%;
                // height: 250px;
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

    .b-pagination{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
        li.page-item.active{       
            background-color: var(--pagination-button-active);
            border: none;
            outline: none;
        }
        li.page-item{
            margin: 0 10px;
            border-radius: 4px;
            overflow: hidden;
            width: 34px;
            height: 34px;
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            background-color: var(--pagination-button);
            button{
                width: 34px;
                height: 34px;
                border: none;
                color: #fff;
                background-color: transparent;
                padding: 2px 10px;
                
            }
            .page-link{
                background-color: transparent;
                border: none;
                margin: 0;
            }
        }
    }
}
</style>
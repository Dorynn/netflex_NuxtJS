<template>
    <div class="filmList mt-5">
      <h1 style="font-size: 60px; font-weight: 600; margin: 0 16px 8px">{{ filmtype }}</h1>
      <hr style="background-color: #333333; margin: 0 16px"/>
      <div class="wapper">
          <div class="card-image col-6 col-sm-3" v-for="film in films" :key="film.id">
            <div @mouseover="showButtonCircle(film.id)"
                 @mouseleave="hideButtonCircle()"
            >
                <img :src="film.url" alt=""  >

                <ButtonCircle v-show="isShowCircleButton && currentId === film.id" />
            </div>
              <p class="my-3 font-weight-bold text-center filmTitle">Spirited Away</p>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import ButtonCircle from '../../common/Button/ButtonCircle'
  import ButtonDanger from '../../common/Button/ButtonDanger'
  export default {
      data(){
        return{
            isShowCircleButton: false,
            currentId: null
        }
      },
      props:{
          filmtype: String
      },
      components:{
        ButtonCircle, ButtonDanger
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
  
  <style lang="scss" scoped>
  .filmList{
      padding: 12px;
      width: 94%;
      margin: auto;
      .wapper{
          display: flex;
          // flex-wrap: wrap;
          overflow-x: hidden;
          margin-top: 40px;
          align-items: stretch;
          order: 4;
          .card-image{
              width: 24%;
              height: 100%;
              align-self: stretch;
            //   padding-right: 0 ;
              position: relative;
            // &:first-child{
            //     padding-left:0 ;
            // }
            .buttonCircle{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -100%);
            }
              img{
                  width: 100%;
                  height: 250px;
                  border-radius: 15px;
                  cursor: pointer;
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
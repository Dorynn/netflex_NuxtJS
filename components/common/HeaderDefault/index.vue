<template>
  <div>
    <div id="headerDefault">
      <b-navbar type="dark" toggleable="lg">
        <v-btn icon dark v-b-toggle.sidebar-1 large id="toggleMenu"
          ><font-awesome-icon :icon="['fas', 'bars']" size="lg"
        /></v-btn>
        <b-collapse is-nav id="collapseMenu">
          <b-navbar-nav>
            <b-nav-item
              ><nuxt-link class="home-btn" to="/">Home</nuxt-link></b-nav-item
            >
            <b-nav-item
              ><nuxt-link class="home-btn" to="/test"
                >Test</nuxt-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-nav>
          <b-nav-form class="search">
            <form @submit.prevent="">
              <input
                type="text"
                class="search-input"
                :class="{ changeWidth: isClickSearch }"
                placeholder="Please enter value..."
                v-model="keyword"
                @keyup.enter="goToSearch"
              />
            </form>
            <v-btn icon dark class="search-btn" @click="onSearch()">
              <v-icon v-if="isClickSearch">mdi-close</v-icon>
              <v-icon v-else>mdi-magnify</v-icon>
            </v-btn>
          </b-nav-form>
          <v-btn
            dark
            class="languageOption"
            @click="onLanguageMenu()"
            v-click-outside="onClickOutSideLang"
          >
            <img
              src="~/assets/images/FlagEN.jpg"
              alt="Flag of England"
              class="flagImage"
            />
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs" />
          </v-btn>
          <v-card
            class="mx-auto mt-5 menuLanguage"
            min-width="160px"
            v-show="isShowLanguageMenu"
          >
            <v-list class="p-0" style="margin-top: 50px">
              <v-list-item-group>
                <v-list-item class="menuItem">
                  <img
                    src="~/assets/images/FlagEN.jpg"
                    alt="Flag of England"
                    class="flagImage"
                  />
                  <v-list-item-content>ENG</v-list-item-content>
                </v-list-item>
                <v-list-item class="menuItem">
                  <img
                    src="~/assets/images/vietnam-flag.png"
                    alt="Flag of England"
                    class="flagImage"
                  />
                  <v-list-item-content>VIE</v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>

          <div
            class="userAccount"
            @click="onUserMenu"
            v-click-outside="onClickOutSideUser"
          >
            <v-avatar size="28px" v-if="isLogin">
              <img :src="require('~/assets/images/avatar1.jpg')" alt="John" />
            </v-avatar>
            <v-btn dark icon v-else>
              <v-icon>mdi-account-plus</v-icon>
            </v-btn>
          </div>

          <v-card
            class="mx-auto mt-5 menuLanguage"
            min-width="130px"
            v-show="isShowUserMenu"
          >
            <v-list class="p-0" style="margin-top: 50px">
              <v-list-item-group>
                <v-list-item class="menuItem" v-if="isLogin" @click="goToProfile">
                  <font-awesome-icon
                    :icon="['fas', 'user']"
                    class="mr-3"
                  />
                  <v-list-item-content >Profile</v-list-item-content>

                </v-list-item>
                <v-list-item class="menuItem"  v-b-modal.modal-login v-else>
                  <font-awesome-icon
                    :icon="['fas', 'right-to-bracket']"
                    class="mr-3"
                  />
                  <v-list-item-content>Login</v-list-item-content>

                </v-list-item>
                <v-list-item class="menuItem" v-if="isLogin" @click="gotoLogout">
                  <font-awesome-icon
                    :icon="['fas', 'right-from-bracket']"
                    class="mr-3"
                  />
                  <v-list-item-content>Log out</v-list-item-content>
                </v-list-item>
                <v-list-item class="menuItem" v-b-modal.modal-sign-up v-else >
                  <font-awesome-icon
                    :icon="['fas', 'user-plus']"
                    class="mr-3"
                  />
                  <v-list-item-content >Sign Up</v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <LoginModal />
          <SignUpModal />
        </b-navbar-nav>
      </b-navbar>
    </div>
    <b-sidebar
      id="sidebar-1"
      bg-variant="dark"
      backdrop
      z-index="99"
      @shown="preventScoll()"
      @hidden="availableScroll()"
    >
      <template #title>
        <img src="~/assets/images/logo.png" width="120px" alt="" />
      </template>
      <v-btn text class="mx-2 mt-4 homeDirection text-capitalize">
        <font-awesome-icon :icon="['fas', 'house']" class="mr-5" />
        <nuxt-link to="/">Home</nuxt-link>
      </v-btn>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import LoginModal from "~/components/common/Modal/LoginModal";
import SignUpModal from "~/components/common/Modal/SignUpModal";
export default {
  components: {
    LoginModal,
    SignUpModal,
  },
  data() {
    return {
      isClickSearch: false,
      isShowLanguageMenu: false,
      isShowUserMenu: false,
      keyword: "",
      isLogin: false,
    };
  },
  computed:{
    ...mapGetters(['token'])
  },
  watch: {
    token(){
      if(this.token)
        this.isLogin = true;
      else
        this.isLogin = false;
    }
  },
  created(){
    // this.$store.commit('SET_TOKEN', window.localStorage.getItem('token'))
    this.SET_TOKEN(window.localStorage.getItem('token'))
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    onSearch() {
      this.isClickSearch = !this.isClickSearch;
      document.querySelector(".search .search-input").focus();
    },
    onLanguageMenu() {
      this.isShowLanguageMenu = !this.isShowLanguageMenu;
      this.isShowUserMenu = false;
    },
    onUserMenu() {
      this.isShowUserMenu = !this.isShowUserMenu;
      this.isShowLanguageMenu = false;
    },
    onClickOutSideLang() {
      this.isShowLanguageMenu = false;
    },
    onClickOutSideUser() {
      this.isShowUserMenu = false;
    },
    preventScoll() {
      document.querySelector("body").style.position = "fixed";
    },
    availableScroll() {
      document.querySelector("body").style.position = "unset";
    },
    goToSearch(){
      // console.log('searchhhh')
      this.isClickSearch = false;
      this.$router.push({path:'/search', query:{query: this.keyword}});
      this.keyword="";
    },
    goToProfile(){
      this.$router.push('/profile')
    },
    gotoLogout(){
      this.SET_TOKEN(null)
      window.localStorage.removeItem('token')
      this.$router.push('/')
    }
  },
  updated() {
    const sidebar1 = document.getElementById("sidebar-1");
  },
};
</script>

<style lang="scss">
#sidebar-1 {
  width: 256px;
  display: none;
  .b-sidebar-body,
  .b-sidebar-header {
    background-color: #363636;
  }
  .b-sidebar-header {
    margin-top: 60px;
  }
  .bi-x {
    color: white;
  }
  .homeDirection {
    color: white;
    padding: 10px 115px 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #464646;
    }
    a {
      color: white;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
    }
  }
}
#toggleMenu {
  display: none;
}
.b-sidebar-backdrop {
  opacity: 0.3;
  display: none;
}

#headerDefault {
  position: fixed;
  padding: 0 16px;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  z-index: 100;
  color: #fff;
  height: 60px;
  background-color: var(--primary-color);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  .navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .home-btn {
      color: #fff;
      text-decoration: none;
      transition: 0.5s;
      &:hover {
        color: var(--hover-color);
      }
    }
    .search {
      .search-btn {
        height: 48px;
        width: 48px;
        transition: 0.5s;
        &:hover {
          background-color: var(--bg-hover-primary);
        }
      }
      .search-input {
        width: 0;
        background-color: var(--bg-input-primary);

        border: none;
        border-radius: 10px;
        transition: width 0.5s;
        padding: 4px 0px;
        color: #fff;
        // outline-color: #fff;
      }
      .changeWidth {
        padding: 4px 10px;
        width: 400px;
        border: none;
        outline: none;
      }
    }
    .languageOption {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      background-color: var(--bg-btn-primary);
      margin: 0 10px;
      width: 86px;
      padding: 0 16px;
      border-radius: 4px;
      transition: 0.5s;
      &:hover {
        background-color: var(--bg-hover-second);
      }
    }
    .flagImage {
      width: 34px;
      height: 22px;
      border-radius: 4px;
      margin-right: 8px;
    }
    .menuLanguage {
      height: 146px;
      position: absolute;
      top: -35px;
      right: 12px;
      z-index: -1;
      overflow: hidden;
      background-color: transparent;
      .menuItem {
        color: #fff;

        background-color: var(--bg-language-menu);
        &:hover {
          background-color: var(--bg-hover-third);
        }
      }
    }
    .navbar-nav {
      display: flex;
      align-items: center;
      flex-direction: row;
      .userAccount {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 48px;
        width: 48px;
        border-radius: 100%;
        &:hover {
          background-color: var(--bg-hover-primary);
        }
      }
    }
  }
}

@media screen and (max-width: 991px) {
  #sidebar-1,
  #toggleMenu,
  .b-sidebar-backdrop {
    display: block;
  }
  // body{
  //   position: fixed;
  // }
}
</style>

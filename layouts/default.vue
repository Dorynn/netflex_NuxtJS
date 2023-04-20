<template>
  <div>
    <div class="headerDefault">
      <b-navbar toggleable="lg" type="dark">
        <nuxt-link to="/" class="home-btn">Home</nuxt-link>
        <nuxt-link to="/film" class="home-btn">Film</nuxt-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form class="search">
              <input
                type="text"
                class="search-input"
                :class="{ changeWidth: isClickSearch }"
                placeholder="Please enter value..."
              />
              <div class="search-btn" @click="onSearch()">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </div>
            </b-nav-form>

            <div class="languageOption" @click="onLanguageMenu()">
              <img
                src="../assets/images/FlagEN.jpg"
                alt="Flag of England"
                class="flagImage"
              />
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                class="arrowDownIcon"
              />
              <div class="menuLanguage" v-show="isShowLanguageMenu">
                <div class="wrapperMenuItem">
                  <div class="menuItem">
                    <img
                      src="../assets/images/vietnam-flag.png"
                      alt="Flag of England"
                      class="flagImage"
                    />
                    <span>VIE</span>
                  </div>
                  <div class="menuItem">
                    <img
                      src="../assets/images/FlagEN.jpg"
                      alt="Flag of England"
                      class="flagImage"
                    />
                    <span>ENG</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="userAccount" @click="onUserMenu">
              <img src="../assets/images/user.jpg" alt="" />

              <div class="menuLanguage" v-show="isShowUserMenu">
                <div class="wrapperMenuItem">
                  <div class="menuItem" v-b-modal.modal-login>
                    <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                    <span v-b-modal.modal-login>Login</span>
                  </div>
                  <div class="menuItem" v-b-modal.modal-sign-up>
                    <font-awesome-icon :icon="['fas', 'user-plus']" />
                    <span>Sign up</span>
                  </div>
                </div>
              </div>
            </div>
            <LoginModal/>
            <SignUpModal/>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <nuxt />
    <div class="footerDefault">
      <div class="socialLinkList">
        <font-awesome-icon :icon="['fab', 'facebook']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </div>
      <hr style="background-color: #333333" />
      <p class="m-0 pb-3">2023 - <strong>Vuetify</strong></p>
    </div>
  </div>
</template>

<script>
import LoginModal from "../components/common/Modal/LoginModal";
import SignUpModal from "../components/common/Modal/SignUpModal"
export default {
  components:{
    LoginModal, 
    SignUpModal
  },
  data() {
    return {
      isClickSearch: false,
      isShowLanguageMenu: false,
      isShowUserMenu: false,
    };
  },
  watch: {
    isClickSearch() {
      console.log(this.isClickSearch);
    },
  },
  methods: {
    onSearch() {
      console.log("clickk");
      this.isClickSearch = !this.isClickSearch;
    },
    onLanguageMenu() {
      this.isShowLanguageMenu = !this.isShowLanguageMenu;
    },
    onUserMenu() {
      this.isShowUserMenu = !this.isShowUserMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.headerDefault {
  position: fixed;
  padding: 0 16px;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  z-index: 1000;
  color: #fff;
  height: 60px;
  background-color: var(--primary-color);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  .navbar {
    position: relative;
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
        cursor: pointer;
        height: 48px;
        width: 48px;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        &:hover {
          background-color: var(--bg-hover-primary);
        }
        &:focus {
          background-color: var(--bg-focus-primary);
        }
      }
      .search-input {
        width: 0;
        background-color: var(--bg-input-primary);
        outline: none;
        border: none;
        border-radius: 10px;
        transition: width 0.5s;
        padding: 4px 0px;
      }
      .changeWidth {
        padding: 4px 10px;
        width: 400px;
      }
    }
    .languageOption {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      background-color: var(--bg-btn-primary);
      margin: 0 10px;
      width: 90px;
      height: 36px;
      padding: 0 16px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      &:hover {
        background-color: var(--bg-hover-second);
      }
      .flagImage {
        width: 34px;
        height: 17px;
        border-radius: 4px;
      }
      .arrowDownIcon {
        font-size: 10px;
      }
    }
    .menuLanguage {
      height: 148px;
      position: absolute;
      top: 10px;
      right: 10px;
      border-radius: 4px;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      overflow: hidden;
      .wrapperMenuItem {
        margin-top: 52px;
      }
      .menuItem {
        line-height: 50px;
        height: 48px;
        width: 160px;
        padding: 0px 16px;
        background-color: var(--bg-language-menu);
        &:hover {
          background-color: var(--bg-hover-third);
        }
      }
    }

    .navbar-nav {
      display: flex;
      align-items: center;
      .userAccount {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 48px;
        width: 48px;
        border-radius: 100%;
        img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }
        &:hover {
          background-color: var(--bg-hover-primary);
        }
      }
    }
  }
}

.footerDefault {
  text-align: center;
  background-color: var(--bg-footer);
  .socialLinkList {
    font-size: 24px;
    padding: 16px;
  }
}
</style>

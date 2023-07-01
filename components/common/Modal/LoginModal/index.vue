<template>
  <b-modal id="modal-login" 
    centered ok-title="LOGIN" 
    cancel-title="CLOSE" 
    no-close-on-backdrop
    @ok="loginAccount"
  >
    <template #modal-header>
      <h2 class="title">Login</h2>
    </template>
    <div class="socialLogin">
      <span class="facebookLogin"
        ><font-awesome-icon :icon="['fab', 'facebook']"
      /></span>
      <span class="googleLogin"
        ><font-awesome-icon :icon="['fab', 'google']"
      /></span>
    </div>
    <input v-model="email" type="email" placeholder="E-mail" id="email" />
    <input v-model="password" type="password" placeholder="Password" id="password" />

    <div class="textGroup">
      <p class="text-white">
        You don't have an account?
        <span
          class="text-green font-weight-bold "
          v-b-modal.modal-sign-up
          @click="$bvModal.hide('modal-login')"
          >Sign Up</span
        >
      </p>
      <p class="text-green font-weight-bold">Forgot Password?</p>
      <ForgotPassword/>
    </div>
  </b-modal>
</template>

<script>
import { mapMutations } from 'vuex';
import ForgotPassword from "~/components/common/Modal/ForgotPassword"

export default {
  data() {
    return {
      email: "",
      password: "",
      temp:"",
    };
  },
  components:{
    ForgotPassword,
  },
  methods:{
    ...mapMutations(['SET_TOKEN'])
    ,
    loginAccount(){
      this.$store.dispatch(`authentication`,{
        email: this.email,
        password: this.password,
        isLogin: true,
      })
      .then(result => {
        // console.log(result,'.....................');
        // this.$store.commit('SET_TOKEN',result.idToken)
        // window.localStorage.setItem('token',result.idToken)
        // console.log()
      })
      .catch(e =>{
        // console.log(e,'.......................')
      })
    }
  }
};
</script>

<style lang="scss">
#modal-login {
  .modal-content {
    background-color: var(--modal-body);
  }
  .modal-header {
    background-color: var(--modal-header);
    border-bottom: none;
    .title {
      font-size: 24px;
      margin: 0;
    }
  }
  .modal-body {
    display: flex;
    padding: 16px 20px;
    flex-direction: column;
    .socialLogin {
      height: 50px;
      margin: 20px auto;
      font-size: 28px;
      .facebookLogin,
      .googleLogin {
        padding: 16px 18px;
        border-radius: 100px;
        margin: 0 8px;
      }

      .facebookLogin {
        background-color: #1773ea;
      }

      .googleLogin {
        background-color: #c94439;
      }
    }
    #email,
    #password {
      // padding: 8px 0;
      background-color: transparent;
      outline: none;
      border: none;
      margin-bottom: 30px;
      border-bottom: 1px solid #bcbcbc;
      color: #fff;
      &::placeholder {
        color: #bcbcbc;
      }
    }
    .textGroup {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
  }
  .modal-footer {
    border-top: 1px solid #393939;
    padding: 5px 12px;
    .btn {
      background-color: transparent;
      border: none;
      font-size: 14px;
      font-weight: 600;
      transition: 0.5s;
    }
    .btn.btn-secondary {
      color: #c94439;
      &:hover {
        background-color: var(--bg-hover-close);
      }
    }
    .btn.btn-primary {
      color: #4caf50;
      &:hover {
        background-color: var(--bg-hover-login);
      }
    }
  }
}
</style>

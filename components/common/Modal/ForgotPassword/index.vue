<template>
  <b-modal id="modal-forgotpass" 
    centered ok-title="REQUEST RESET LINK" 
    cancel-title="CLOSE" 
    no-close-on-backdrop
    @ok="sendLinkToEmail"
    @show="openModal"
  >
    <template #modal-header>
      <h2 class="title">Forgot Password</h2>
    </template>
      <input v-model="$v.email.$model" type="email" placeholder="E-mail" id="email" @blur="checkEmailBlur" @input="onTyping"/>
      <small class="text-orange" v-if="!$v.email.required&&$v.email.$error">Không được để trống</small>
      <small class='text-orange' v-if="isTrueFormat">Không đúng định dạng</small>  
  </b-modal>
</template>

<script>
import {
  required,
  minLength,
  helpers,
} from "vuelidate/lib/validators";

const formatEmail = helpers.regex("formatEmail",/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
export default {
  data() {
    return {
      email: "",
      isTrueFormat:false,
      disableButton:true,
    };
  },
  components:{
  },
validations:{
    email: {
      required,
      formatEmail,
    },

  },
  methods:{
    async sendLinkToEmail(){
        const that = this
      let res = await this.$fire.auth.sendPasswordResetEmail(this.email)
      .then(function (){
        // that.snackbarText = 'reset link sent to ' + that.auth.email
        // that.snackbar = true
      })
      .catch(function (error) {
        // that.snackbarText = error.message
        // that.snackbar = true
        console.log(error.code)
        console.log()
      })
    },
    checkEmailBlur(){
      this.$v.$touch();
      this.isTrueFormat = !this.$v.email.formatEmail;
      this.disableButton = this.$v.$anyError;
    },
    openModal(){
      this.$v.$reset();
      this.email = "";
      this.disableButton = true;
    },
    onTyping(){
      this.isTrueFormat = false;
    }
  },
  created(){
    console.log(this.$fire.auth)
    console.log(this.$fire.auth.getAuth)
  }
};
</script>

<style lang="scss">
#modal-forgotpass {
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
    #email{
      // padding: 8px 0;
      background-color: transparent;
      outline: none;
      border: none;
      margin-bottom: 30px;
      margin-top: 30px;
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

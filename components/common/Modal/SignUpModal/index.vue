<template>
    <b-modal id="modal-sign-up" 
      ref="target" 
      centered ok-title="SIGN UP" 
      cancel-title="CLOSE" 
      no-close-on-backdrop
      @ok="registerAccount"
      :ok-disabled="disableButton"
    >
      <template #modal-header>
        <h2 class="title">
          Sign Up
        </h2>
      </template>
      <input v-model="email" type="email" placeholder="E-mail" id="email" required />
      <input v-model="password" type="password" placeholder="Password" id="password" minlength="8"/>
  
      <div class="textGroup">
        <p class="text-orange">Already have an account? <span class="text-green font-weight-bold" v-b-modal.modal-login
            @click="$bvModal.hide('modal-sign-up')">Login</span></p>
      </div>
    </b-modal>

</template>
<script>
export default {
  data() {
    return {
      email:"",
      password:"",
      // disableButton:false,
    };
  },
  computed:{
    disableButton(){
      return this.password.length<8
    }
  },
  methods:{
    preventClose(){
      console.log('.............')
    },
    resetData(){
      this.email="";
      this.password="";
    },
    registerAccount(){
      this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`,{
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      })
      .then(result =>{
        console.log(result)
        // window.localStorage.setItem('')
        this.resetData();
      })
      .catch(e =>{
        console.log(e)
      })
    }
  }
};
</script>

<style lang="scss">
#modal-sign-up {
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
    flex-direction: column;
    padding: 16px 20px;

    #email,
    #password {
      // padding: 8px 0;
      background-color: transparent;
      outline: none;
      border: none;
      margin: 30px 0;
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
        background-color: var(--bg-hover-close)
      }
    }

    .btn.btn-primary {
      color: #4caf50;

      &:hover {
        background-color: var(--bg-hover-login);
      }
    }
  }
}</style>

<template>
    <b-modal id="modal-sign-up" 
      ref="target" 
      centered ok-title="SIGN UP" 
      cancel-title="CLOSE" 
      no-close-on-backdrop
      @ok="registerAccount"
      :ok-disabled="disableButton"
      @show="openModal"
    >
      <template #modal-header>
        <h2 class="title">
          Sign Up
        </h2>
      </template>
      <input v-model="$v.email.$model" type="email" placeholder="E-mail" id="email" @blur="checkEmailBlur" @input="onTyping"/>
      <small class="text-orange" v-if="!$v.email.required&&$v.email.$error">Không được để trống</small>
      <small class='text-orange' v-if="isTrueFormat">Không đúng định dạng</small>
      <small class='text-orange' v-if="isExist">Email đã tồn tại</small>

      <input v-model="$v.password.$model" type="password" placeholder="Password" id="password" minlength="8" @blur="checkPasswordBlur" @input="onTyping"/>
      <small class='text-orange' v-if="!$v.password.required&&$v.password.$error">Không được để trống</small>
      <small class='text-orange' v-if="isTrueFormatPassword">Độ dài tối thiểu là 8, ít nhất 1 kí tự đặc biệt, 1 chữ cái viết hoa và 1 kí tự số</small>
      <div class="textGroup">
        <p class="text-white">Already have an account? <span class="text-green font-weight-bold" v-b-modal.modal-login
            @click="$bvModal.hide('modal-sign-up')">Login</span></p>
      </div>
    </b-modal>

</template>
<script>
import {
  required,
  minLength,
  helpers,
} from "vuelidate/lib/validators";
const format = helpers.regex(
  "format",
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
);
const formatEmail = helpers.regex("formatEmail",/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
export default {
  data() {
    return {
      email:"",
      password:"",
      isTrueFormat:false,
      isTrueFormatPassword:false,
      disableButton:true,
      isExist: false,
    };
  },
  validations:{
    email: {
      required,
      formatEmail,
    },
    password:{
      required,
      minLength: minLength(8),
      format,
    }
  },
  computed:{

  },
  create(){
    console.log(this)
  },
  methods:{
    preventClose(){
      console.log('.............')
    },
    resetData(){
      this.email="";
      this.password="";
    },
    async registerAccount(event){

      event.preventDefault();
      await this.$store.dispatch(`authentication`,{
        email: this.email,
        password: this.password,
        isLogin: false,
      }).catch(e=>{
        console.log(e)
        if (e.data.error.message == 'EMAIL_EXISTS'){
          this.isExist = true;
        }
      })

      if(!this.isExist){
        console.log(123456789)
        this.$nextTick(() => {
          this.$bvModal.hide('modal-sign-up');
        })
      }
    },
    checkEmailBlur(){
      this.$v.$touch();
      this.isTrueFormat = !this.$v.email.formatEmail;
      this.disableButton = this.$v.$anyError;
    },
    checkPasswordBlur(){
      this.$v.$touch();
      this.disableButton = this.$v.$anyError;
      this.isTrueFormatPassword = !this.$v.password.minLength || !this.$v.password.format; 
    },
    openModal(){
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.disableButton = true;
    },
    onTyping(){
      this.isTrueFormat = false;
      this.isTrueFormatPassword = false;
      this.isExist = false;
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

      // &:hover {
      //   background-color: var(--bg-hover-login);
      // }
    }
    
  }
  .hover {
      &:hover {
        background-color: var(--bg-hover-login);
      }
  }
}</style>

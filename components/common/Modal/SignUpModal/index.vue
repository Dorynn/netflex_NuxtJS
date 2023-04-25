<template>
  <b-modal id="modal-sign-up"
            centered
            ok-title="SIGN UP"
            cancel-title="CLOSE"
    >
    <template #modal-header>
      <h2 class="title">
        Sign Up
      </h2>
    </template>
    <input type="email" placeholder="E-mail" id="email"/>
    <input type="password" placeholder="Password" id="password" />

    <div class="textGroup">
      <p class="text-orange">Already have an account? <span class="text-green font-weight-bold" v-b-modal.modal-login>Login</span></p>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {};
  },
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
    #email, #password{
        // padding: 8px 0;
        background-color: transparent;
        outline: none;
        border: none;
        margin: 30px 0;
        border-bottom: 1px solid #bcbcbc;
        color: #fff;
        &::placeholder{
            color: #bcbcbc;
        }
    }
    .textGroup{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
  }
  .modal-footer {
    border-top: 1px solid #393939;
    padding: 5px 12px;
    .btn{
        background-color: transparent;
        border: none;
        font-size: 14px;
        font-weight: 600;
        transition: 0.5s;
    }
    .btn.btn-secondary{
        color: #c94439;
        &:hover{
            background-color: var(--bg-hover-close)
        }
    }
    .btn.btn-primary{
        color: #4caf50;
        &:hover{
            background-color: var(--bg-hover-login);
        }
    }
  }
}
</style>

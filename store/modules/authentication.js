const auth = {
    state: {
        token:null,
    },
    getters: {
      token: (state) => state.token,

    },
    mutations: {
      SET_TOKEN(state, data) {
        state.token = data;
      },

    },
    actions: {

    async authentication(vuexContext, payload){
      return new Promise((resolve, reject)=>{
        let urlAuth = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`;
        if(payload.isLogin)
          urlAuth = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`;
        
        this.$axios.$post(urlAuth,{
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        })
        .then(result =>{
          window.localStorage.setItem('token', result.idToken)
          vuexContext.commit('SET_TOKEN', result.idToken)
          resolve({success:'true'})
        })
        .catch((error)=>{
          reject(error.response)
        })
        
      })
    }
  }
  }
  
  export default auth;
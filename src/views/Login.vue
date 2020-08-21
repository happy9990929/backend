<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-md-6 col-12 align-self-md-center d-flex align-items-center loginContent">
        <form class="loginForm mx-auto p-md-0 p-sm-5 p-4" @submit.prevent="login">
          <h3 class="mb-4">後台管理系統</h3>
          <div class="form-group">
            <label for="userName">Email address</label>
            <input type="email" class="form-control" id="userName" v-model="user.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="user.password">
          </div>
          <button type="submit" class="btn btn-orange w-100">登入</button>
        </form>
      </div>
      <div class="col-md-6 d-md-block d-none loginBanner"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`;
      this.$http.post(api, this.user).then((res) => {
        const { token } = res.data;
        const { expired } = res.data;
        // 存取cookie
        document.cookie = `mytoken=${token};expires=${new Date(expired * 1000)}`;
        loader.hide();
        this.$router.push('/admin/products');
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
  },
};
</script>
<style scoped>
.loginContent {
  background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DBSwan0nkQnfAyiTZqnv4wGF3P3IiRty6uVnAhCGQtLMQD0DDcW19ke1mYXDzGWuGLNczo90DxRAl0HfqUER1ZRUPYAICKX67A2yhiQmOj80xcHSZTWzpdFIjmYvJdvY.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.loginForm {
  max-width: 80%;
  background-color: rgba(255,255,255,.9);
}
.form-control {
  background-color: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid #ced4da;
}
.form-control:focus {
  box-shadow: none;
  border-bottom: 1px solid #dc750a;
}
@media screen and (min-width: 768px){
  .loginBanner {
    background-image: url('/images/login/banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .loginContent {
    background-image: none;
  }
  .loginForm {
    max-width: 50%;
    background-color: transparent;
  }
}
</style>

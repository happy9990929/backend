<template>
  <div>
    <nav class="navBar navbar navbar-dark p-0">
      <div class="logo mx-md-auto ml-md-0 my-md-0 ml-3 my-3">
        <img src="@/assets/images/logo.png" class="img-fluid"/>
      </div>
      <button class="navbar-toggler mr-md-0 mr-3 d-md-none" type="button" data-toggle="collapse"
      data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-md-block" id="navbarNav">
        <ul class="list-unstyled mb-0">
          <router-link tag="li" class="navItem" to="/admin/products">
            <i class="fas fa-store"></i>
            <span class="ml-3">產品列表</span>
          </router-link>
          <router-link tag="li" class="navItem" to="/admin/coupon">
            <i class="fas fa-gift"></i>
            <span class="ml-3">優惠券列表</span>
          </router-link>
          <router-link tag="li" class="navItem" to="/admin/orders">
            <i class="far fa-list-alt"></i>
            <span class="ml-3">訂單列表</span>
          </router-link>
          <router-link tag="li" class="navItem" to="/admin/storages">
            <i class="far fa-images"></i>
            <span class="ml-3">圖片儲存列表</span>
          </router-link>
          <li class="navItem" @click="logout">
            <i class="fas fa-sign-out-alt"></i>
            <span class="ml-3">登出</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content mt-5 mt-md-0">
      <router-view v-if="loginSuccess" :token="token"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: '',
      loginSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const loader = this.$loading.show();
      // 取得token
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)mytoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      // 驗證
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`;
      this.$http.post(api, { api_token: this.token }).then((res) => {
        loader.hide();
        if (res.data.success === true) {
          this.loginSuccess = true;
        }
      }).catch((error) => {
        loader.hide();
        console.log(error);
        this.$router.push('/login');
      });
    },
    logout() {
      document.cookie = 'mytoken=;expires=';
      this.$router.push('/login');
    },
  },
};
</script>

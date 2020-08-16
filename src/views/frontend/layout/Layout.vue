<template>
  <div>
    <nav class="navBar">
      <ul class="pl-0">
        <router-link tag="li" class="navItem" to="/about">
          <i class="far fa-user-circle"></i>
          <span class="ml-3">關於我們</span>
        </router-link>
        <router-link tag="li" class="navItem" to="/products">
          <i class="far fa-list-alt"></i>
          <span class="ml-3">產品列表</span>
        </router-link>
        <router-link tag="li" class="navItem" to="/cart">
          <i class="fas fa-shopping-cart"></i>
          <span class="ml-3">購物車</span>
        </router-link>
        <router-link tag="li" class="navItem" to="/checkout">
          <i class="fas fa-cash-register"></i>
          <span class="ml-3">結帳</span>
        </router-link>
        <router-link tag="li" class="navItem" to="/complete">
          <i class="far fa-check-circle"></i>
          <span class="ml-3">完成訂單</span>
        </router-link>
        <router-link tag="li" class="navItem" to="/admin/products">
          <i class="fas fa-user-cog"></i>
          <span class="ml-3">後台購物車列表</span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

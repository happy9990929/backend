<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
  /**
  * 解決 css 引入圖片在 github pages 無法獲取的問題
  */
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;
  },
};
</script>
<style lang="scss">
  @import './assets/scss/main.scss';
</style>

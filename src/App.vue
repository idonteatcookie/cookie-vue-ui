<script setup lang="ts">
const components = ['button', 'layout', 'icon', 'alert', 'avatar']
</script>

<template>
  <nav class="comp-nav">
    <router-link v-for="item in components" :key="item" :to="'/' + item" class="link-item">
      {{ item }}
    </router-link>
  </nav>
  <main class="page-container">
    <div class="comp-content">
      <router-view></router-view>
    </div>
  </main>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,
html {
  height: 100%;
}
body {
  background: #fafafa;
}
#app {
  height: 100%;
}
.comp-nav {
  margin-bottom: 10px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  background: #ffff;
  box-shadow: 0 0 3px 3px rgb(0 0 0 / 10%);
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.link-item {
  color: #838383;
  display: inline-block;
  padding: 0 10px;
  &:hover {
    background: orange;
    color: #fff;
  }
}
.page-container {
  padding: 70px 20px 20px;
}
.comp-content {
  width: 1000px;
  background: #fff;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 2px 2px rgb(0 0 0 / 10%);
  display: flow-root;
}
</style>

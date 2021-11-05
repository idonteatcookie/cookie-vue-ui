<script setup lang="ts">
import { Button } from './packages/button'
</script>

<template>
  <Button type="primary" size="large">主要大按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger" size="small">危险小按钮</Button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

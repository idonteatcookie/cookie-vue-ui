<script setup lang="ts">
import { Button } from './packages/button'

const onClick = () => {
  console.log('clicked.')
}
</script>

<template>
  <section>
    <div class="subtitle">按钮类型</div>
    <div class="content">
      <Button @click="onClick">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
  </section>

  <section>
    <div class="subtitle">按钮大小</div>
    <div class="content">
      <Button type="primary" size="large">大号按钮</Button>
      <Button type="primary">普通按钮</Button>
      <Button type="primary" size="small">小号按钮</Button>
    </div>
  </section>

  <section>
    <div class="subtitle">禁用按钮</div>
    <div class="content">
      <Button disabled>默认按钮</Button>
      <Button type="primary" disabled>主要按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="danger" disabled>危险按钮</Button>
    </div>
  </section>
</template>

<style>
section {
  border: 1px solid #d7d7d7;
  margin-bottom: 20px;
  padding: 10px;
}
.subtitle {
  color: #888;
  font-size: 16px;
  margin-bottom: 5px;
}
.content * {
  margin-right: 10px;
}
</style>

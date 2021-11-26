<script setup lang="ts">
const onClick = () => {
  console.log('clicked.')
}
</script>

<template>
  <section>
    <div class="subtitle">按钮类型</div>
    <div class="content">
      <co-button @click="onClick">默认按钮</co-button>
      <co-button type="primary">主要按钮</co-button>
      <co-button type="success">成功按钮</co-button>
      <co-button type="warning">警告按钮</co-button>
      <co-button type="danger">危险按钮</co-button>
    </div>
  </section>

  <section>
    <div class="subtitle">按钮大小</div>
    <div class="content">
      <co-button type="primary" size="large">大号按钮</co-button>
      <co-button type="primary">普通按钮</co-button>
      <co-button type="primary" size="small">小号按钮</co-button>
    </div>
  </section>

  <section>
    <div class="subtitle">禁用按钮</div>
    <div class="content">
      <co-button disabled>默认按钮</co-button>
      <co-button type="primary" disabled>主要按钮</co-button>
      <co-button type="success" disabled>成功按钮</co-button>
      <co-button type="warning" disabled>警告按钮</co-button>
      <co-button type="danger" disabled>危险按钮</co-button>
    </div>
  </section>

  <section>
    <div class="subtitle">图标按钮</div>
    <div class="content">
      <co-button icon="co-icon-bi">编辑</co-button>
      <co-button icon="co-icon-loading">加载中</co-button>
      <co-button type="primary" size="small" icon="co-icon-shangyiye">上一页</co-button>
      <co-button type="success" size="large" icon="co-icon-chaxun">查询</co-button>
      <co-button type="danger" icon="co-icon-lajitong"></co-button>
    </div>
  </section>

  <section>
    <div class="subtitle">按钮水波纹效果</div>
    <div class="content">
      <co-button ripple>默认按钮</co-button>
      <co-button type="primary" ripple>主要按钮</co-button>
      <co-button type="success" ripple>成功按钮</co-button>
      <co-button type="warning" ripple>警告按钮</co-button>
      <co-button type="danger" ripple>危险按钮</co-button>
    </div>
  </section>
</template>

<style scoped>
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
.content .co-button {
  margin-right: 10px;
}
</style>

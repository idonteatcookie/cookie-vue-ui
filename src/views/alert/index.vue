<script setup lang="ts">
const onClick = () => {
  console.log('clicked.')
}
</script>
<template>
  <section>
    <div class="subtitle">基本用法</div><br />
    <div class="content">
      <co-alert title="default alert" @close="onClick"></co-alert><br />
      <co-alert title="primary alert" type="primary"></co-alert><br />
      <co-alert title="success alert" type="success"></co-alert><br />
      <co-alert title="warning alert" type="warning"></co-alert><br />
      <co-alert title="danger alert" type="danger"></co-alert>
    </div>
  </section>

  <section>
    <div class="subtitle">自定义关闭按钮文字</div><br />
    <div class="content">
      <co-alert title="不可关闭的 alert" :closable="false"></co-alert><br />
      <co-alert title="自定义 close-text" close-text="close" type="primary"></co-alert><br />
      <co-alert title="设置了回调的 alert" type="success" @close="onClick"></co-alert><br />
    </div>
  </section>

  <section>
    <div class="subtitle">带有icon</div><br />
    <div class="content">
      <co-alert title="title" show-icon></co-alert><br />
      <co-alert title="title" show-icon type="primary"></co-alert><br />
      <co-alert title="title" show-icon type="success"></co-alert><br />
      <co-alert title="title" show-icon type="warning"></co-alert><br />
      <co-alert title="title" show-icon type="danger"></co-alert>
    </div>
  </section>

  <section>
    <div class="subtitle">文字居中</div><br />
    <div class="content">
      <co-alert title="消息提示的文案" center></co-alert><br />
      <co-alert title="默认提示的文案" center type="primary"></co-alert><br />
      <co-alert title="成功提示的文案" center type="success"></co-alert><br />
      <co-alert title="警告提示的文案" center type="warning"></co-alert><br />
      <co-alert title="错误提示的文案" center type="danger"></co-alert>
    </div>
  </section>

  <section>
    <div class="subtitle">带有辅助性文字介绍</div><br />
    <div class="content">
      <co-alert title="title" :closable="false">default alert</co-alert><br />
      <co-alert title="title" close-text="close" type="primary">primary alert</co-alert><br />
      <co-alert title="title" close-text="close" type="success">success alert</co-alert><br />
      <co-alert title="title" close-text="close" type="warning">warning alert</co-alert><br />
      <co-alert title="title" close-text="close" type="danger">danger alert</co-alert>
    </div>
  </section>
</template>
<style scoped>
section {
  border: 1px solid #d7d7d7;
  margin-bottom: 20px;
  padding: 10px;
}
</style>

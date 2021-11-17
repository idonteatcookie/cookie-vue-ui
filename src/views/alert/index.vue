<script setup lang="ts">
const onClick = () => {
  console.log('clicked.')
}
</script>
<template>
  <section>
    <div class="subtitle">基本用法</div><br />
    <div class="content">
      <co-alert title="title" close-text="close" @close="onClick">default alert</co-alert><br />
      <co-alert title="title" close-text="close" type="primary">primary alert</co-alert><br />
      <co-alert title="title" close-text="close" type="success">success alert</co-alert><br />
      <co-alert title="title" close-text="close" type="warning">warning alert</co-alert><br />
      <co-alert title="title" close-text="close" type="danger">danger alert</co-alert>
    </div>
  </section>
</template>

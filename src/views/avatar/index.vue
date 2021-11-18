<script setup lang="ts">
const onClick = () => {
  console.log('clicked.')
}
</script>
<template>
  <section>
    <div class="subtitle">头像大小</div>
    <div class="content">
      <co-avatar @click="onClick"></co-avatar>
      <co-avatar size="large"></co-avatar>
      <co-avatar size="medium"></co-avatar>
      <co-avatar size="small"></co-avatar>
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
.content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-end;
}
.content .co-avatar {
  margin-right: 10px;
}
</style>

<script lang="ts" setup></script>

<template>
  <section>
    <div class="subtitle">基础布局</div>
    <co-row>
      <co-col :span="24"><div class="grid-content bg-purple-dark">span24</div></co-col>
    </co-row>
    <co-row>
      <co-col :span="12"><div class="grid-content bg-purple">span12</div></co-col>
      <co-col :span="12"><div class="grid-content bg-purple-dark">span12</div></co-col>
    </co-row>
    <co-row>
      <co-col :span="8"><div class="grid-content bg-purple">span8</div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple-dark">span8</div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple">span8</div></co-col>
    </co-row>
    <co-row>
      <co-col :span="6"><div class="grid-content bg-purple">span6</div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple-dark">span6</div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple">span6</div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple-dark">span6</div></co-col>
    </co-row>
    <co-row>
      <co-col :span="4"><div class="grid-content bg-purple">span4</div></co-col>
      <co-col :span="4"><div class="grid-content bg-purple-dark">span4</div></co-col>
      <co-col :span="4"><div class="grid-content bg-purple">span4</div></co-col>
      <co-col :span="4"><div class="grid-content bg-purple-dark">span4</div></co-col>
      <co-col :span="4"><div class="grid-content bg-purple">span4</div></co-col>
      <co-col :span="4"><div class="grid-content bg-purple-dark">span4</div></co-col>
    </co-row>
  </section>

  <section>
    <div class="subtitle">分栏间隔</div>
    <co-row :gutter="20">
      <co-col :span="6"><div class="grid-content bg-purple">span6</div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple">span6</div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple">span6</div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple">span6</div></co-col>
    </co-row>
  </section>

  <section>
    <div class="subtitle">pull和push进行平移</div>
    <co-row>
      <co-col :span="8"><div class="grid-content bg-purple">span8</div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple-dark">span8</div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple">span8</div></co-col>
    </co-row>
    <co-row>
      <co-col :span="8"><div class="grid-content bg-purple">span8</div></co-col>
      <co-col :span="8" :pull="4"><div class="grid-content bg-purple-dark">span8 pull4</div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple">span8</div></co-col>
    </co-row>
    <co-row>
      <co-col :span="8"><div class="grid-content bg-purple">span8</div></co-col>
      <co-col :span="8" :push="4"><div class="grid-content bg-purple-dark">span8 push4</div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple">span8</div></co-col>
    </co-row>
  </section>

  <section>
    <div class="subtitle">分栏偏移</div>
    <co-row :gutter="20">
      <co-col :span="6"><div class="grid-content bg-purple">span6</div></co-col>
      <co-col :span="6" :offset="6"><div class="grid-content bg-purple">span6 offset6</div></co-col>
    </co-row>
    <co-row :gutter="20">
      <co-col :span="10"><div class="grid-content bg-purple">span10</div></co-col>
      <co-col :span="10" :offset="4"><div class="grid-content bg-purple">span10 offset4</div></co-col>
    </co-row>
  </section>

  <section>
    <div class="subtitle">Flex布局 - 水平对齐方式</div>
    <co-row type="flex" justify="start" class="row-container">
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple-dark"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
    </co-row>
    <co-row type="flex" justify="center" class="row-container">
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple-dark"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
    </co-row>
    <co-row type="flex" justify="end" class="row-container">
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple-dark"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
    </co-row>
    <co-row type="flex" justify="space-around" class="row-container">
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple-dark"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
    </co-row>
    <co-row type="flex" justify="space-between" class="row-container">
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple-dark"></div></co-col>
      <co-col :span="6"><div class="grid-content bg-purple"></div></co-col>
    </co-row>
  </section>

  <section>
    <div class="subtitle">Flex布局 - 垂直对齐方式</div>
    <co-row type="flex" align="start">
      <co-col :span="8"><div class="grid-content bg-purple h20"></div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple-dark h40"></div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple h60"></div></co-col>
    </co-row>
    <co-row type="flex" align="center">
      <co-col :span="8"><div class="grid-content bg-purple h20"></div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple-dark h40"></div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple h60"></div></co-col>
    </co-row>
    <co-row type="flex" align="end">
      <co-col :span="8"><div class="grid-content bg-purple h20"></div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple-dark h40"></div></co-col>
      <co-col :span="8"><div class="grid-content bg-purple h60"></div></co-col>
    </co-row>
  </section>
</template>

<style lang="scss" scoped>
.co-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.co-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  height: 36px;
  text-align: center;
  color: #fff;
  line-height: 36px;
}
.row-container {
  background: #f9f9f9;
}
.h20 {
  height: 20px;
}
.h40 {
  height: 40px;
}
.h60 {
  height: 60px;
}

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

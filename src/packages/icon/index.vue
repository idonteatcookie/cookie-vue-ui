<template>
  <i :class="'co-icon-' + name"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
})
</script>

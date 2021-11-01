<template>
  <button class="c-button" :class="['c-button-' + type, 'c-button-' + size]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

export default defineComponent({
  name: 'CoButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
      default: 'default'
    },
    size: {
      type: String as PropType<'large' | 'medium' | 'small'>,
      default: 'default'
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const onClick = (e: MouseEvent) => {
      emit('click', e)
    }
    return {
      onClick
    }
  }
})
</script>

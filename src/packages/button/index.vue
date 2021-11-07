<template>
  <button :class="classes" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CoButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
      default: 'default'
    },
    size: {
      type: String as PropType<'large' | 'medium' | 'small'>,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const classes = computed(() => {
      const prefix = 'co-button'
      const { type, size, disabled } = props
      return {
        [prefix]: true,
        [prefix + '--' + type]: type,
        [prefix + '--' + size]: size,
        [prefix + '--' + 'disabled']: disabled
      }
    })

    const onClick = (e: MouseEvent) => {
      emit('click', e)
    }
    return {
      classes,
      onClick
    }
  }
})
</script>

//

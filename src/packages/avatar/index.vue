<template>
  <img :class="classes" src="./user.png" @click="onClick" />
</template>
<script lang="ts">
import { PropType, defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'CoAvatar',
  props: {
    size: {
      type: String as PropType<'large' | 'medium' | 'small'>,
      default: 'default'
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const classes = computed(() => {
      const prefix = 'co-avatar'
      const { size } = props
      return {
        [prefix]: true,
        [prefix + '--' + size]: size
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

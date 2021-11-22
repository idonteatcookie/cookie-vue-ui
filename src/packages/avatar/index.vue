<template>
  <div>
    <img :class="classes" :src="[src ? src : Url]" @click="onClick" />
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'CoAvatar',
  props: {
    size: {
      type: String as PropType<'large' | 'medium' | 'small'>,
      default: 'default'
    },
    shape: {
      type: String as PropType<'circle' | 'square'>,
      default: 'square'
    },
    src: {
      type: String
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const classes = computed(() => {
      const prefix = 'co-avatar'
      const { size, shape } = props
      return {
        [prefix]: true,
        [prefix + '--' + size]: size,
        [prefix + '--' + shape]: shape
      }
    })

    const Url = ref('src/packages/avatar/user.png')

    const onClick = (e: MouseEvent) => {
      emit('click', e)
    }
    return {
      classes,
      onClick,
      Url
    }
  }
})
</script>

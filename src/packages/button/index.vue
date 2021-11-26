<template>
  <button ref="buttonRef" :class="classes" @click="onClick" @mousedown="onMouseDown">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent, computed, ref } from 'vue'

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
    },
    icon: {
      type: String,
      default: ''
    },
    ripple: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
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

    const buttonRef = ref<null | HTMLElement>(null)

    const onMouseDown = (e: MouseEvent) => {
      if (!props.ripple || props.disabled) {
        return
      }
      const { offsetX, offsetY } = e
      const { offsetWidth, offsetHeight } = buttonRef.value!
      const vertexList = [
        [0, 0],
        [offsetWidth, 0],
        [0, offsetHeight],
        [offsetWidth, offsetHeight]
      ]
      let r = 0
      for (let [vx, vy] of vertexList) {
        const dx = vx - offsetX,
          dy = vy - offsetY
        r = Math.max(r, Math.sqrt(dx * dx + dy * dy))
      }

      const ripple = document.createElement('div')
      ripple.className = 'co-ripple'
      ripple.style.top = offsetY + 'px'
      ripple.style.left = offsetX + 'px'
      ripple.style.width = '0px'
      ripple.style.height = '0px'
      buttonRef.value!.appendChild(ripple)
      setTimeout(() => {
        ripple.style.width = r * 2 + 'px'
        ripple.style.height = r * 2 + 'px'
      })
      setTimeout(() => {
        buttonRef.value!.removeChild(ripple)
      }, 500)
    }

    const onClick = (e: MouseEvent) => {
      emit('click', e)
    }
    return {
      classes,
      onClick,
      onMouseDown,
      buttonRef
    }
  }
})
</script>

//

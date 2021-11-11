<template>
  <component :is="tag" :style="style" :class="classes">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, inject } from 'vue'

const colProps = {
  tag: {
    // 指定元素的HTML标签
    type: String,
    default: 'div'
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    // 栅格向左移动格数
    type: Number,
    default: 0
  },
  push: {
    // 栅格向右移动格数
    type: Number,
    default: 0
  }
}

type PropKey = keyof typeof colProps

export default defineComponent({
  name: 'CoCol',
  props: colProps,
  setup(props) {
    const classes = computed<string[]>(() => {
      const clz = ['co-col']

      const pos = ['span', 'offset', 'pull', 'push'] as PropKey[]

      pos.forEach((prop) => {
        const val = props[prop]
        if (typeof val === 'number') {
          if (prop === 'span') {
            clz.push(`co-col-${val}`)
          } else if (val > 0) {
            clz.push(`co-col-${prop}-${val}`)
          }
        }
      })

      return clz
    })

    const style = computed<CSSProperties>(() => {
      const { gutter } = inject('CoRow', { gutter: { value: 0 } })
      const gv = gutter.value
      return gv
        ? {
            paddingLeft: `${gv / 2}px`,
            paddingRight: `${gv / 2}px`
          }
        : {}
    })

    return {
      classes,
      style
    }
  }
})
</script>

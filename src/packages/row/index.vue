<template>
  <component :is="tag" :style="style" :class="classes">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, PropType, provide } from 'vue'

export default defineComponent({
  name: 'CoRow',
  props: {
    tag: {
      // 指定元素的HTML标签
      type: String,
      default: 'div'
    },
    gutter: {
      //栅格间隔
      type: Number,
      default: 0
    },
    type: {
      type: String as PropType<'flex'>,
      default: ''
    },
    justify: {
      type: String as PropType<'start' | 'center' | 'end' | 'space-around' | 'space-between'>,
      default: 'start'
    },
    align: {
      type: String as PropType<'start' | 'center' | 'end'>,
      default: 'top'
    }
  },
  setup(props) {
    const gutter = computed<number>(() => props.gutter)
    provide('CoRow', {
      gutter
    })

    const classes = computed<string[]>(() => {
      const clz = ['co-row']
      if (props.type === 'flex') {
        clz.push('co-row--flex')
      }
      if (props.justify !== 'start') {
        clz.push(`co-row--justify-${props.justify}`)
      }
      if (props.align !== 'start') {
        clz.push(`co-row--align-${props.align}`)
      }
      return clz
    })

    const style = computed<CSSProperties>(() => {
      const { gutter } = props
      return gutter
        ? {
            marginLeft: `-${gutter / 2}px`,
            marginRight: `-${gutter / 2}px`
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

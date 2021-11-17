<template>
  <transition name="co-alert-fade">
    <div v-show="visible" class="co-alert" :class="[typeClass, center ? 'is-center' : '']" role="alert">
      <div class="co-alert__content">
        <span v-if="title || $slots.title" class="co-alert__title" :class="[isBoldTitle]">
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default || description" class="co-alert__description">
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div v-if="closeText" class="co-alert__closebtn" @click="close">
            {{ closeText }}
          </div>
          <!--    暂时没有icon      -->
          <!--          <el-icon v-else class="co-alert__closebtn" @click="close">-->
          <!--            <close />-->
          <!--          </el-icon>-->
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'

export default defineComponent({
  name: 'CoAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
      default: 'default'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close'],
  setup(props, { emit, slots }) {
    //state
    const visible = ref(true)
    // methods
    const close = (evt: MouseEvent) => {
      visible.value = false
      emit('close', evt)
    }
    // computed
    const typeClass = computed(() => `co-alert--${props.type}`)
    const isBoldTitle = computed(() => (props.description || slots.default ? 'is-bold' : ''))
    return {
      visible,
      typeClass,
      isBoldTitle,
      close
    }
  }
})
</script>

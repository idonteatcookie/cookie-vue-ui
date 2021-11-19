<template>
  <transition name="co-alert-fade">
    <div v-show="visible" class="co-alert" :class="[typeClass, center ? 'is-center' : '']" role="alert">
      <!--      <i v-if="showIcon" class="co-alert__icon" :class="[iconName, typeIcon, isBigIcon]"> </i>-->
      <CoIcon v-if="showIcon" class="co-alert__icon" :class="[iconName, typeIcon, isBigIcon]"></CoIcon>

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
          <i v-else class="co-alert__closebtn co-icon-guanbi" @click="close"></i>
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'
import CoIcon from '../icon/index'

export default defineComponent({
  name: 'CoAlert',
  components: { CoIcon },
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
      type: Boolean
    },
    showIcon: {
      type: Boolean
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

    enum iconEnum {
      default = 'xiaoxi2',
      primary = 'tongbu',
      success = 'shoucang',
      warning = 'weixiu',
      danger = 'xihuan'
    }

    const iconName = computed(() => `co-icon--${iconEnum[props.type]}`)
    const typeIcon = computed(() => `co-alert__icon--${props.type}`)
    const isBigIcon = computed(() => (props.description ? 'is-big' : '' || slots.default ? 'is-big' : ''))

    // computed
    const typeClass = computed(() => `co-alert--${props.type}`)
    const isBoldTitle = computed(() => (props.description || slots.default ? 'is-bold' : ''))
    return {
      visible,
      typeClass,
      iconName,
      typeIcon,
      isBigIcon,
      isBoldTitle,
      close
    }
  }
})
</script>

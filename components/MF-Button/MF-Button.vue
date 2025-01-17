<template>
  <button :class="[size, buttonFontSize]" @click="$emit('clicked')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Isize, IButtonFontSize } from './buttonTypes';

export default defineComponent({
  props: {
    size: {
      type: String as () => Isize,
      required: false,
      default: 'm',
    },
    buttonFontSize: {
      type: String as () => IButtonFontSize,
      required: false,
      default: 'm',
    },
  },
  data() {
    return {
      btnsz: this.size,
    };
  },
});
</script>

<style scoped lang="scss" src="./styles.scss"></style>

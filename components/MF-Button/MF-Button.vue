<template>
  <button :class="[size, buttonFontSize]" @click="$emit('clicked')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Isize, IButtonFontSize } from '../../types/buttonTypes';

export default defineComponent({
  props: {
    size: {
      type: String as () => Isize,
      required: true,
    },
    buttonFontSize: {
      type: String as () => IButtonFontSize,
      required: true,
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

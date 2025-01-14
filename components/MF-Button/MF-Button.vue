<template>
  <button :class="(buttonSize, butttonFontSize)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IButtonSize } from './buttonType';

export default defineComponent({
  props: {
    buttonSize: {
      type: String as () => IButtonSize,
      required: false,
      default: 's',
    },
    butttonFontSize: {
      type: String as () => IButtonFontSize,
    },
  },
});
</script>

<style scoped lang="scss" src="./styles.scss"></style>

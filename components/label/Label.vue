<template>
  <h1
    class="label"
    :class="classes"
    :style="centered ? 'text-align: center' : ''"
  >
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    centered: {
      type: Boolean,
      required: false,
    },
    classes: {
      type: String,
      required: false,
      default: '',
    },
  },
});
</script>

<style scoped lang="scss">
.label {
  width: 100%;
  text-decoration: underline;
}
</style>

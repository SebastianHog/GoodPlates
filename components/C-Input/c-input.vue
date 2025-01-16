<template>
  <div style="display: inline;">
    <Label>{{ inputLabel }}</Label>
    <input
      type="text"
      class="input"
      :maxlength="maxlength"
      :placeholder="placeholder"
    >
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    maxlength: {
      type: Number,
      required: false,
      default: 20,
    },
    inputLabel: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
});

</script>

<style src='./styles.scss' lang='scss'></style>

<template>
  <div style="display: inline">
    <Label>{{ inputLabel }}</Label>
    <input
      v-model="text"
      type="text"
      class="input"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :class="expandOnType && 'expand-class'"
      @input="$emit('changes', text)"
    />
  </div>
</template>

<script lang="ts">
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
    expandOnType: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data(): { text: string } {
    return {
      text: '',
    };
  },
});
</script>

<style src="./styles.scss" lang="scss"></style>

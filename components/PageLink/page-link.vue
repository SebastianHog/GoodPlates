<template>
  <nuxt-link :to="link" class="link-component-wrapper">
    <slot></slot>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    link: {
      type: String,
      required: true,
    },
  },
});
</script>

<style src="./style.scss" lang="scss" />

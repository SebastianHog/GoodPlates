<template>
  <h1 class="label" :style="centered ? 'text-align: center' : ''">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  props: {
    centered: {
      type: Boolean,
      required: false
    }
  },
})

</script>

<style lang="scss">
.label {
  width: 100%;
}
</style>
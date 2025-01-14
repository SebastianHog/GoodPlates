<template>
  <div class="button-display">
    <MF-Button size="xs" @clicked="logger">X-Small</MF-Button>
    <MF-Button size="s">Small</MF-Button>
    <MF-Button size="m">Medium</MF-Button>
    <MF-Button size="l">Large</MF-Button>
    <MF-Button size="xl">Extra Large</MF-Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    logger() {
      console.log('clicked');
    },
  },
});
</script>

<style scoped lang="scss">
.button-display {
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 0.2rem solid white;
  padding: 1rem;
  margin: 1rem;
}
</style>

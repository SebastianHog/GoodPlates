<template>
  <div class="button-display">
    <MF-Button size="xs" @clicked="logger">xs</MF-Button>
    <MF-Button size="s">s</MF-Button>
    <MF-Button size="m">m</MF-Button>
    <MF-Button size="l">l</MF-Button>
    <MF-Button size="xl">xl</MF-Button>
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
@use '../style/main.scss' as *;

.button-display {
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $gap-sm;
  border: 0.2rem solid white;
  padding: 1rem;
  margin: 1rem;
}
</style>

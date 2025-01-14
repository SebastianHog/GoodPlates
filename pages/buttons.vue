<template>
  <div class="button-display">
    <MF-Button buttonSize="xs">X-Small</MF-Button>
    <MF-Button buttonSize="s">Small</MF-Button>
    <MF-Button buttonSize="m">Medium</MF-Button>
    <MF-Button buttonSize="l">Large</MF-Button>
    <MF-Button buttonSize="xl">Extra Large</MF-Button>
  </div>
</template>

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

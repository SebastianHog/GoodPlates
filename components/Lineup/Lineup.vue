<template>
  <section class="lineup-wrapper">
    <slot />
  </section>
</template>

<style lang="scss">
.lineup-wrapper {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
</style>

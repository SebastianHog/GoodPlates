<template>
  <div class="carousels-container">
    <Carousel :items="items" />
    <Carousel :items="items" />
    <Carousel :items="items" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          title: 'Iskender',
          author: 'Sebastian',
        },
        {
          title: 'Mantı',
          author: 'Sebastian',
        },
        {
          title: 'Vegetable soup',
          author: 'Melike',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.carousels-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="carousels-container">
    <Carousel
      :items="freshipies.length > 1 && freshipies"
      empty-label="There are no recent uploads"
      carousel-label="Fresh!"
    />
    <Carousel
      :items="freshipies.length > 1 && freshipies"
      carousel-label="Popular this week"
      empty-label="There doesn't seem to be anything here..."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IRecipe } from '~/types/recipe';
import { getAllRecipes } from '~/utils/api/getRecipes';

export default defineComponent({
  data() {
    return {
      freshipies: [] as IRecipe[],
    };
  },
  async created() {
    try {
      const rec = await getAllRecipes();
      this.freshipies = rec;
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  },
});
</script>

<style scoped lang="scss">
.carousels-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}
</style>

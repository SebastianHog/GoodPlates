<template>
  <section class="recipe-page-wrapper">
    <div class="recipe-info-wrapper">
      <img :src="thumbnail" class="recipe-page-thumbnail" />
      <div class="recipe-bio">
        <header>
          <h1 class="recipe-title">{{ title }}</h1>
          <p class="recipe-author">
            Created by
            <PageLink :link="creator">{{ creator }}</PageLink>
          </p>
        </header>
        <p class="recipe-page-description">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="recipe-instructions-wrapper"></div>
  </section>
</template>

<script>
import { getOneRecipe } from '~/utils/api/getRecipes';

export default {
  async asyncData({ params }) {
    const recipeId = params.recipeId;

    const { creator, date_posted, description, thumbnail, title } =
      await getOneRecipe(recipeId);

    return { recipeId, creator, date_posted, description, thumbnail, title };
  },
};
</script>

<style src="./style.scss" lang="scss"></style>

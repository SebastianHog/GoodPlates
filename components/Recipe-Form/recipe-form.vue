<template>
  <section>
    <c-input
      :maxlength="45"
      placeholder="My tasty food straight from the oven"
      :expand-on-type="true"
      @changes="updateTitle"
    />
    <textarea v-model="recipeDescription" maxlength="1250" />

    <MF-Button size="s" class="add-recipe-btn" @clicked="postRecipe">
      Post Recipe
    </MF-Button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { addRecipe } from '~/utils/api/addRecipes';

type dataTypes = {
  recipeTitle: string;
  recipeDescription: string;
};

export default defineComponent({
  props: {},
  data(): dataTypes {
    return {
      recipeTitle: '',
      recipeDescription: '',
    };
  },
  methods: {
    updateTitle(text: string) {
      this.recipeTitle = text;
    },
    postRecipe() {
      const recipe = {
        title: this.recipeTitle,
        description: this.recipeDescription,
      };
      addRecipe(recipe);
    },
  },
});
</script>

<style src="./styles.scss" lang="scss"></style>

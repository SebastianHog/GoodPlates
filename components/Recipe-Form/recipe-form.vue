<template>
  <section>
    <div class="add-info">
      <Label class="add-category-title">Your new recipe</Label>
      <c-input
        :maxlength="45"
        placeholder="My tasty food straight from the oven"
        :expand-on-type="true"
        class="title-input"
        @changes="updateTitle"
      />
      <textarea v-model="recipeDescription" maxlength="1250" />

      <MF-Button size="s" class="add-recipe-btn" @clicked="postRecipe">
        Post Recipe
      </MF-Button>
    </div>
    <div>
      <image-input @newLink="updateThumbnail"></image-input>
    </div>
    <!-- <div class="add-img">
      <Label class="add-category-title">Add images!</Label>
      <div>
        <Label class="image-title">Thumbnail image</Label>
        <c-input
          class="img-link-input"
          :maxlength="250"
          :expand-on-type="true"
        ></c-input>
      </div>
      <div>
        <Label class="image-title">Second image</Label>
        <c-input
          class="img-link-input"
          :maxlength="250"
          :expand-on-type="true"
        ></c-input>
      </div>
      <div>
        <Label class="image-title">Third image</Label>
        <c-input
          class="img-link-input"
          :maxlength="250"
          :expand-on-type="true"
        ></c-input>
      </div>
    </div> -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { addRecipe } from '../../utils/api/addRecipes';

type dataTypes = {
  recipeTitle: string;
  recipeDescription: string;
  recipeThumbnail: string;
};

export default defineComponent({
  props: {},
  data(): dataTypes {
    return {
      recipeTitle: '',
      recipeDescription: '',
      recipeThumbnail: '',
    };
  },
  methods: {
    updateTitle(text: string) {
      this.recipeTitle = text;
    },
    updateThumbnail(link: string) {
      this.recipeThumbnail = link;
    },
    postRecipe() {
      const recipe = {
        title: this.recipeTitle,
        description: this.recipeDescription,
        thumbnail: this.recipeThumbnail,
      };
      addRecipe(recipe);
    },
  },
});
</script>

<style src="./styles.scss" lang="scss"></style>

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
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { addRecipe } from '../../utils/api/addRecipes';

export default defineComponent({
  props: {},
  data() {
    return {
      recipeTitle: '' as string,
      recipeDescription: '' as string,
      recipeThumbnail: '' as string,
      creator: '' as string,
    };
  },
  async created() {
    this.creator = await this.$store
      .dispatch('fetchUser')
      .then((user) => user.username);
    console.log(this.creator);
  },
  methods: {
    updateTitle(text: string) {
      this.recipeTitle = text;
    },
    updateThumbnail(link: string) {
      this.recipeThumbnail = link;
    },
    async postRecipe() {
      const recipe = {
        title: this.recipeTitle,
        description: this.recipeDescription,
        thumbnail: this.recipeThumbnail,
        creator: this.creator,
      };
      addRecipe(recipe);
    },
  },
});
</script>

<style scoped src="./styles.scss" lang="scss"></style>

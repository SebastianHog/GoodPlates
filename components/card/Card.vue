<template>
  <div class="card">
    <img :src="item.thumbnail" alt="food-thumbnail" class="recipe-thumbnail" />

    <div class="recipe-header">
      <h1 class="recipe-title">{{ item.title }}</h1>
      <div @click="bookmarkRecipe">
        <img
          src="../../assets/icons/bookmark_icon.svg"
          alt="bkmk"
          class="bookmark-icon"
          :class="bookmarked && 'bookmarked'"
        />
      </div>
    </div>
    <div class="recipe-info">
      <h2>Written by <NuxtLink></NuxtLink></h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IRecipe } from '~/types/recipe';

export default defineComponent({
  props: {
    item: {
      type: Object as () => IRecipe,
      required: true,
    },
  },
  data() {
    return {
      bookmarked: false,
    };
  },
  methods: {
    bookmarkRecipe() {
      this.bookmarked = true;
      console.log(this.bookmarked);
    },
  },
});
</script>

<style src="./styles.scss" lang="ts"></style>

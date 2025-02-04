<template>
  <section class="card-wrapper">
    <div class="card-image-section">
      <img :src="post.thumbnail" alt="recipe-thumbnail" class="card-image" />
    </div>
    <div class="card-info-section">
      <div class="card-info-header">
        <Label classes="card-recipe-title">{{ post.title }}</Label>
        <Label classes="card-recipe-creator">
          Written by
          <nuxt-link :to="`/user/${post.creator}`" class="author-link">
            {{ post.creator }}
          </nuxt-link>
        </Label>
      </div>
      <div class="card-info-body">
        <p>
          {{ post.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IRecipe } from '../../types/recipe';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IRecipe>,
      required: true,
    },
  },
});
</script>

<style src="./styles.scss" lang="scss"></style>

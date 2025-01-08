<template>
  <div class="carousel" ref="carousel">
    <div class="navButtonsContainer">
      <button @click="carouselLeft()">&#11164;</button>
      <button @click="carouselRight()">&#11166;</button>
    </div>
    <div v-if="items" class="carousel-items-container">
      <div v-for="item in items" class="carousel-item" :style="{ transform: `translateX(-${currentIndex * 102}%)` }">
        <img :src="item.thumbnail" alt="food-thumbnail" class="thumbnail" />
        <div class="recipe-info">
          <h1 class="recipe-title">{{ item.title }}</h1>
          <p class="recipe-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <Label v-else :centered="true">You haven't cooked anything yet... </Label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IRecipe } from '~/types/recipe'

export default defineComponent({
  props: {
    items: {
      type: Array as () => IRecipe[],
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    carouselRight() {
      console.log('right')
      if (this.currentIndex < this.items.length - 2) {
        this.currentIndex += 2
      }
    },
    carouselLeft() {
      console.log('left')
      if (this.currentIndex > 0) {
        this.currentIndex -= 2
      }
    },
  },
})
</script>

<style lang="scss" src="./styles.scss"></style>

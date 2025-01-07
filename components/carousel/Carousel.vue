<template>
  <div>
    <div class="carousel" ref="carousel">

      <div class="navButtonsContainer">
        <button @click="carouselLeft()">&#11164; </button>
        <button @click="carouselRight()">&#11166;</button>
      </div>
      <div v-for="item in items" class="carousel-item" :style="{ transform: `translateX(-${currentIndex * 103}%)` }">
        <h1>{{ item.title }}</h1>
        <h2 class="recipe-author">Posted by {{ item.author }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IRecipe } from '~/types/recipe';


export default {
  props: {
    items: {
      type: Array as () => IRecipe[],
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    carouselRight() {
      console.log('right')
      if (this.currentIndex < this.items!.length - 2)
        this.currentIndex = this.currentIndex + 1;
    },
    carouselLeft() {
      console.log('left')
      if (this.currentIndex > 0)
        this.currentIndex = this.currentIndex - 1;
    },
  },
};
</script>


<style lang="scss" src="./styles.scss"></style>
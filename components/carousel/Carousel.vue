<template>
  <div class="carousel" ref="carousel">
    <div class="navButtonsContainer">
      <button @click="carouselLeft()">&#11164;</button>
      <button @click="carouselRight()">&#11166;</button>
    </div>
    <div v-if="items" class="carousel-items-container">
      <Card
        v-for="item in items"
        :item="item"
        :style="{ transform: `translateX(-${currentIndex * 102}%)` }"
      />
    </div>
    <Label v-else :centered="true">You haven't cooked anything yet... </Label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IRecipe } from '~/types/recipe';

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
      scrollSpeed: 4,
    };
  },
  methods: {
    carouselRight() {
      console.log('right');
      if (this.currentIndex < this.items.length - 2) {
        this.currentIndex += this.scrollSpeed;
      }
    },
    carouselLeft() {
      console.log('left');
      if (this.currentIndex > 0) {
        this.currentIndex -= this.scrollSpeed;
      }
    },
    handleClick() {
      console.log('emit success');
    },
  },
});
</script>

<style lang="scss" src="./styles.scss"></style>

<template>
  <div class="carousel-container">
    <h1 class="carousel-label">{{ carouselLabel }}</h1>
    <div class="carousel" ref="carousel">
      <button @click="carouselLeft()">&#11164;</button>
      <div v-if="items" class="carousel-items-container">
        <Card
          v-for="item in items"
          :style="{ transform: `translateX(-${currentIndex * 102}%)` }"
          :item="item"
          :key="item.post_id"
        />
      </div>
      <Label v-else :centered="true">{{ emptyLabel }}</Label>
      <button @click="carouselRight()">&#11166;</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IRecipe } from '../../types/recipe';

export default defineComponent({
  props: {
    items: {
      type: Array as () => IRecipe[],
      required: true,
    },
    emptyLabel: {
      type: String,
      required: false,
      default: 'There is nothing here...',
    },
    carouselLabel: {
      type: String,
      required: false,
      default: '',
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
  },
});
</script>

<style scoped lang="scss" src="./styles.scss"></style>

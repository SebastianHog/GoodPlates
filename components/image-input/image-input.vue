<template>
  <div>
    <Label class="image-title">Thumbnail image</Label>
    <c-input
      class="img-link-input"
      :maxlength="250"
      :expand-on-type="true"
      @changes="updateLink"
    ></c-input>
    <img :src="imgLink" class="thumbnail-preview" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data(): { imgLink: string } {
    return {
      imgLink: '',
    };
  },
  methods: {
    updateLink(newLink: string) {
      if (newLink.includes('jpg') || newLink.includes('png')) {
        this.imgLink = newLink;
        this.$emit('newLink', newLink);
      } else {
        console.log('Not a valid image');
      }
    },
  },
});
</script>

<style lang="scss" src="./styles.scss"></style>

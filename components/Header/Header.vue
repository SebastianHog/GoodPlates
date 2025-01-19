<template>
  <header class="header-main">
    <NuxtLink to="/" class="logoTitleImage">
      <img
        src="@/assets/logo/GoodPlatesLogo.svg"
        alt="goodplates logo"
        style="width: 4rem"
      />
    </NuxtLink>
    <NuxtLink to="/create_recipe">
      <MF-Button size="s" button-font-size="s" class="add-recipe-btn">
        Add Recipe
      </MF-Button>
    </NuxtLink>
    <h1 v-if="user">{{ user.username }}</h1>

    <!-- <NuxtLink v-if="!user.username" to="/login">
      <MF-Button size="s" button-font-size="s" class="add-recipe-btn">
        Login
      </MF-Button>
    </NuxtLink> -->
    <user-icon />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IUser } from '~/types/user';

export default defineComponent({
  data() {
    return {
      user: {} as IUser,
    };
  },
  async mounted() {
    try {
      this.user = await this.$store.dispatch('fetchUser');
      console.log('user:', this.user.username);
    } catch (error) {
      console.error('Error during user fetch:', error);
    }
  },
});
</script>

<style src="./styles.scss" lang="scss"></style>

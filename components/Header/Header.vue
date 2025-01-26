<template>
  <header class="header-main">
    <div class="left-header">
      <NuxtLink to="/">
        <img
          src="../../assets/logo/GoodPlatesLogo.svg"
          alt="Go to 'home'"
          class="header-logo"
        />
      </NuxtLink>

      <div id="navigation" class="header-navigation">
        <h1 @click="handleNavigation('/')" id="/">HOME</h1>
        <h1 @click="handleNavigation('/recommended')" id="/recommended">
          RECOMMENDED
        </h1>
        <h1 @click="handleNavigation('/following')" id="/following">
          FOLLOWING
        </h1>
        <h1 @click="handleNavigation('/saved')" id="/saved">SAVED</h1>
      </div>
    </div>

    <div class="right-header">
      <div class="searchbar">
        <img
          src="../../assets/icons/search_icon.svg"
          alt="search-icon"
          class="search-icon"
        />
        <input
          class="search-input"
          type="text"
          placeholder="Pancakes with strawberry jam..."
        />
      </div>
      <div id="header_user" class="header-user-info">
        <h1 v-if="user.username">{{ user.username }}</h1>
        <!-- <img :src="user.userIcon" alt=""> -->
        <img
          src="../../assets/icons/user-icon.svg"
          alt="user-profile-picture"
          class="user-icon"
        />
      </div>
    </div>
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
  methods: {
    handleNavigation(path: string) {
      this.$store.dispatch('setCurrentPage', path);

      const allPaths = document.querySelectorAll('.header-navigation h1');
      allPaths.forEach((path) => path.classList.remove('active'));

      const newPath = document.getElementById(path);
      newPath?.classList.add('active');
      this.$router.push(path);
    },
  },
});
</script>

<style src="./styles.scss" lang="scss"></style>

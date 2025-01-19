<template>
  <div class="login-panel-container">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {},
  data() {
    return {
      email: '' as string,
      password: '' as string,
    };
  },
});
</script>

<style lang="scss">
.login-panel-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

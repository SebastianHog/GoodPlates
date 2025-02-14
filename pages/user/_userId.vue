<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const userId = params.userId;
    return { userId };
  },
};
</script>

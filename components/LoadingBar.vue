<template>
  <div v-if="loading" class="loading-page">
    <div class="loading">
      <img src="/Welcome.gif" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>
<style scoped>
.loading-page {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

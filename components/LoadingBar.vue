<template>
  <div v-if="loading" class="loading-page">
    <div class="loading" >
      <img src="/Welcome.gif" alt="">
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1000;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: white;
  transition: all 500 ease-in 0;
  animation-name: fade;
  animation-duration: 6000ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}
@keyframes fade {
  85%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
img{

z-index: 100;
}
@media (max-width: 480px) {
  img{
    transform: scale(2);
  }
}
</style>

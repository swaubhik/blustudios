<template>
  <div v-if="loading" class="loading-page">
    <div class="loading" >
     <lottie :width="1024" :height="1024" :options="lottieOptions" v-on:animCreated="handleAnimation" />
    </div>
  </div>
</template>
<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/static/Welcome.json";
export default {
  components: {
        lottie
    },
  data: () => ({
    
    loading: false,
    anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default }
  }),
  
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
    handleAnimation: function (anim) {
      this.anim = anim;
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
height: 100vh;
object-fit: cover;
transform: translateX(4px);
}
</style>

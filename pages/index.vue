<template>
  <div>
    <div
      class="w-full h-screen bg-home-hero bg-center bg-no-repeat bg-fixed bg-cover bg-black"
    ></div>

    <LazyGrid />
  </div>
</template>

<script>
export default {
  /*
   ** programmatically start the loader so we force the page to take x2seconds to load
   */
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  }
};
</script>

<template>
  <div>
    <div class="flex justify-center w-full h-screen bg-black">
      <video muted autoplay loop id="vid">
        <source src="/assets/images/home/home.mp4" type="video/mp4" />
      </video>
      <span
        @click="goto"
        class="absolute bottom-[20px] z-50 animate-bounce cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="44px"
          viewBox="0 0 24 24"
          width="44px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </span>
    </div>

    <div
      v-bind:class="{ hide: hide }"
      @click="hide = !hide"
      class="
        fixed
        top-0
        flex justify-center items-center
        z-[1000]
        h-[100vh]
        w-[100vw]
        bg-opacity-50 bg-black
        text-white
      "
    >
      <h2 class="text-3xl font-bold">Drag to shuffle images</h2>
    </div>

    <LazyGrid id="feed" class="hidden lg:block" ref="feed" />
    <LazyGridsmall id="feeds" class="visible lg:hidden" ref="feeds" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: true,
    };
  },
  /*
   ** programmatically start the loader so we force the page to take x2seconds to load
   */
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5500);
    });
  },
  methods: {
    goto() {
      var element = document.querySelector("#feed");
      var top = element.offsetTop;
      this.hide = false;

      window.scrollTo({ top: top, behavior: "smooth" });
    },
  },
};
</script>
<style scoped>
#vid {
  object-fit: cover;
  width: 100%;
}
.hide {
  display: none;
  transition: all 400ms;
}
</style>

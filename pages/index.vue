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
        class="info sticky flex items-end justify-end top-12 right-4 sm:right-10 sm:top-14 opacity-50"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1961 1.09824C5.67351 1.04395 1.15257 5.47688 1.09829 10.9995C1.04401 16.522 5.47694 21.043 10.9995 21.0973C16.5221 21.1516 21.043 16.7186 21.0973 11.196C21.1516 5.67346 16.7187 1.15252 11.1961 1.09824Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.0585 15.0975L11.0978 11.0977"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.1371 7.0979L11.1271 7.0978"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
          
      <span class="span absolute top-12 right-10 sm:right-16 sm:top-14"
        >Drag any image to shuffle</span
      >
    </div>
    <LazyGrid id="feed" ref="feed" />
    <!-- <LazyGridnew id="feed" ref="feed" /> -->
    
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

</style>

<template>
  <div class="py-32 flex flex-wrap justify-center items-center text-center h-[100vh]">
    <nuxt-link
      class="flex flex-col filter transition duration-300 ease-in-out hover:drop-shadow-2xl p-6"
      to="/works/editorial">
      <video muted autoplay loop class="vid">
        <source src="/assets/images/Works/Editorial/Editorial.mp4" type="video/mp4" />
      </video>
      <span class="uppercase p-6 text-xl filter drop-shadow-xl pt-6"
        >Editorial</span
      >
    </nuxt-link>
    <nuxt-link
      class="flex flex-col filter transition duration-300 ease-in-out hover:drop-shadow-2xl p-6"
      to="/works/lifestyle">
      <video muted autoplay loop class="vid">
        <source src="/assets/images/Works/LIFESTYLE/Lifestyle.mp4" type="video/mp4" />
      </video>
      <span class="uppercase p-6 text-xl filter drop-shadow-2xl"
        >Lifestyle</span
      >
    </nuxt-link>
  </div>
</template>
<script>
export default {  }
</script>
<style scoped>
.vid{
  width: 400px;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}
.vid:hover{
  transform: scale(.8);
}
</style>

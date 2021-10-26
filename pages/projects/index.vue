<template>
  <div class="py-32 flex flex-wrap justify-center items-center text-center h-[105vh]">
    <nuxt-link
      class="flex flex-col filter transition duration-300 ease-in-out hover:drop-shadow-2xl p-6"
      to="/projects/editorial">
      <div class="transition duration-[800ms] ease-in-out  hover:scale-75">
      <video muted autoplay loop class="vid">
        <source src="/assets/images/projects/EDITORIAL/Editorial.mp4" type="video/mp4" />
      </video>
      </div>
      <span class="uppercase p-6 text-xl filter drop-shadow-xl pt-6"
        >Editorial</span
      >
    </nuxt-link>
    <nuxt-link
      class="flex flex-col filter transition duration-200 ease-in hover:drop-shadow-2xl p-6"
      to="/projects/lifestyle">
      <div class="transition duration-[800ms] ease-in-out hover:scale-75">
      <video muted autoplay loop class="vid">
        <source src="/assets/images/projects/LIFESTYLE/Lifestyle.mp4" type="video/mp4" />
      </video>
      </div>
      <span class="uppercase p-6 text-xl filter drop-shadow-2xl"
        >Lifestyle</span
      >
    </nuxt-link>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Works',
    meta: [
      {
        hid: 'Works- Blu Studios',
        name: 'Works',
        content: 'A classified collection of our work organized into categories'
      }
    ],
  }
}
</script>
<style scoped>
.vid{
  width: 400px;
}
@media (max-width:480px) {
  .vid{
  width: 250px;}
}
</style>
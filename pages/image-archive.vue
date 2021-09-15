<template>
  <div class=" flex flex-col justify-center items-center  m-0 p-0">
    
      <div class="py-32 w-[100%] text-center bg-cover bg-no-repeat  bg-image-hero">
        <h2 class="font-bold text-white text-6xl">
          Image Archive
        </h2>
    </div>
    <div>
      <!-- <h1>Images</h1> -->
      <!-- <LazyGallery /> -->
      <LazyLightbox/>
      
    </div>
  </div>
</template>
<script>
import Lightbox from '~/components/Lightbox.vue';
export default {
  components: { Lightbox },
  head: {
    title: 'Image Archive',
    meta: [
      {
        hid: 'Blu Studios Image Archive',
        name: 'description',
        content: 'An unlimited scroll of visuals for you to peruse through our very own archive.It is a collection of our work over the years.'
      }
    ],
  }
  };
</script>

<template>
  <div class=" flex flex-col justify-center items-center  m-0 p-0">
    
      <div class="py-32 w-[100vw] text-center bg-cover bg-no-repeat  bg-image-hero">
        <h2 class="font-bold text-white text-6xl">
          Image Archive
        </h2>
    </div>
    <div>
      <!-- <h1>Images</h1> -->
      <!-- <LazyGallery /> -->
      <Lightbox/>
      
    </div>
  </div>
</template>
<script>
import Lightbox from '~/components/Lightbox.vue';
export default {
  components: { Lightbox },
  };
</script>

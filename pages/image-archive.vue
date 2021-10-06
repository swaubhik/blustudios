<template>
  <div class=" flex flex-col justify-center items-center  m-0 p-0">
    
      <div class="pt-[10rem] pb-[5.5rem] w-[100%] text-center bg-cover bg-no-repeat bg-bottom opacity-90 bg-image-hero">
        <h2 class="font-extrabold text-white text-5xl sm:text-[5rem] translate-y-[10px] uppercase">
          Image Archive
        </h2>
    </div>
    <div>
     
      <LazyLightbox class="mt-[30px]"/>
      
    </div>
  </div>
</template>
<script>

export default {
 
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

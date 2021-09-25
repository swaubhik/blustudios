<template>
  <div class="flex justify-center items-center mt-20 p-8">
    <draggable class="gallery overflow-hidden lg:overflow-visible">
      <img 
        class="images my-10 md:p-4 mx-auto lg:px-8 py-12 m-10 sm:p-2"
        v-for="image in images"
        :key="image.id"
        :src="image.pathLong"
        alt="Blu Studios"
        style="width:62%;"     
      />
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  name: "client",
  data() {
    return {
      images: []
    };
  },

  mounted() {
    this.importAll(
      require.context(
        "/static/assets/images/home/News-feed/",
        true,
        /\.(png|jpe?g|svg|gif)$/
      )
    );
  },

  methods: {
    importAll(r) {
      r.keys().forEach(key =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    }
  }
};
</script>
<style scoped>
.gallery {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-width: 100%;
  -moz-column-width: 100%;
  column-width: 100%;
  padding: 20px 12px;
}
.gallery .images {
  -webkit-transition: all 500ms ease;
  transition: all 800ms ease;
  cursor: pointer;
  
}

.gallery .images:hover {
 
  transform: scale(1.3);
}
.images:nth-child(2n +1) {
  transform: scale(1.2);
  margin: 100px 50px;
  
}
.images:nth-child(3n) {
  transform: scale(.8);
  margin: 100px 50px;
  
}
.images:nth-child(3n + 1) {
  transform: translateX(70px);
  position: relative;
}
.images:nth-child(4n) {
  transform: translateY(70px);
  transform: translateX(40px);
  position: relative;
}
.images:nth-child(1) {
  transform: translateY(-50px);
  position: relative;
}

@media (max-width: 991px) {
  .gallery {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
  .images {
    width: 400px;
     padding: 50px 10px;
  }
  .images:nth-child(2n +1) {
  transform: scale(1.2);
  margin: 70px 30px;
  
}
.images:nth-child(3n) {
  transform: scale(.8);
  margin: 70px 30px;
  
}
.images:nth-child(3n + 1) {
  transform: translateX(50px);
  position: relative;
}
.images:nth-child(4n) {
  transform: translateY(50px);
  transform: translateX(30px);
  position: relative;
}
.images:nth-child(1) {
  transform: translateY(-50px);
  position: relative;
}
}
@media (max-width: 480px) {
  .gallery {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
  img{
    width: 90%;
  }
   .images {
     padding: 40px 0px;
     margin: auto;
  }
  .images:nth-child(2n +1) {
  transform: scale(1.2);
  margin: 50px 20px;
  
}
.images:nth-child(3n) {
  transform: scale(.8);
  margin: 50px 30px;
  
}
.images:nth-child(3n + 1) {
  transform: translateX(30px);
  position: relative;
}
.images:nth-child(4n) {
  transform: translateY(40px);
  transform: translateX(20px);
  position: relative;
}
.images:nth-child(1) {
  transform: translateY(-50px);
  position: relative;
}
}
</style>

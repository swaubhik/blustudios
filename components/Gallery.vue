<template>
  <div class="galleryCon flex justify-center items-center pt-8 px-4">
    <div class="gallery">
      <div v-for="image in images" :key="image.id">
        <div class="pics">
          <img :src="image.pathLong" style="width:100%;" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "client",
  data() {
    return {
      images: []
    };
  },

  mounted() {
    this.importAll(
      require.context(
        "/static/assets/images/image-archive/gallery/",
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
    },
  
  }
};
</script>
<style scoped>
.gallery {
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  -webkit-column-width: 25%;
  -moz-column-width: 25%;
  column-width: 25%;
  padding: 20px 12px;
}
.gallery .pics {
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
}
.gallery .pics:hover {
  filter: opacity(0.8);
}
@media (max-width: 991px) {
  .gallery {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}
@media (max-width: 480px) {
  .gallery {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
  .galleryCon{
    padding: 5px;
    margin: auto;
  }
}
</style>

<template>
  <div class="gallery pt-[50px] px-4">
    <div
      class="pics"
      v-for="(image, index) in images"
      :key="image"
      @click="openLightboxOnSlide(index + 1)"
    >
      <img :src="image" style="width: 100%" alt="Blustudios" />
    </div>

    <FsLightbox :toggler="toggler" :slide="slide" :sources="images" />
  </div>
</template>

<script>
import FsLightbox from "fslightbox-vue";
export default {
  components: { FsLightbox },

  data() {
    return {
      images: [],
      previews: [],
      toggler: false,
      slide: 1,
      Lazy: true
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
      r.keys().forEach((key) => this.images.push(r(key)));
    },
    
    openLightboxOnSlide: function (number) {
      this.slide = number;
      this.toggler = !this.toggler;
    },
  },
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
  .galleryCon {
    padding: 5px;
    margin: auto;
  }
}
</style>
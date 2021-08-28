<template>
  <div class="flex justify-center items-center p-8">
    <div class="gallery">
      <div v-for="image in images" :key="image.id">
        <div class="pics">
          <img :src="image.pathLong" style="width:100%;" />
        </div>
      </div>
      <div v-for="image in images2" :key="image.id">
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
      images: [],
      images2: []
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
    this.importAll(
      require.context(
        "/static/assets/images/image-archive/gallery-2",
        true,
        /\.*$/
      )
    );
  },

  methods: {
    importAll(r) {
      r.keys().forEach(key =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
    importAll(p) {
      p.keys().forEach(key =>
        this.images2.push({ pathLong: p(key), pathShort: key })
      );
    }
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
  padding: 0 12px;
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
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
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
}
</style>

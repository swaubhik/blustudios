<template>
  <div class="flex justify-center items-center mt-20 p-8">
    <div class="gallery overflow-hidden lg:overflow-visible">
      <img
        class="images p-[10px] md:p-4 m-1 md:m-2 lg:p-8"
        v-for="image in images"
        :key="image.id"
        :src="image.pathLong"
        style="width:85%;"
      />
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
  padding: 0px 12px;
}
.gallery .images {
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
}

.images:nth-child(5n) {
  transform: scale(1.1);
  margin: 100px 50px;
}
.images:nth-child(2n) {
  transform: translateX(100px);
  position: relative;
}

.images:nth-child(3n + 1) {
  transform: translateY(100px);
  position: relative;
}

@media (max-width: 991px) {
  .gallery {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
  .images:nth-child(5n) {
  transform: scale(1.1);
  margin: 50px 25px;
}
.images:nth-child(2n) {
  transform: translateX(50px);
  position: relative;
}

.images:nth-child(3n + 1) {
  transform: translateY(50px);
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
}
</style>

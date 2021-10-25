<template>
  <div >
    <draggable class="gallery overflow-hidden">
      <div
        class="
        flex justify-center items-center
          images
        "
        v-for="image in images"
        :key="image.id"
      >
        <img
          class="overflow-visible"
          :src="image.pathLong"
          alt="Blu Studios"
          style="width:30%;"
        />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  name: "client",
  data() {
    return {
      images: [],
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
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
  },
};
</script>
<style scoped>
.gallery {
  
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 15rem;
  padding: 20px 12px;
  padding-top: 12rem;
}
.gallery .images img {
  -webkit-transition: all 800ms ease;
  transition: all 800ms ease;
  cursor: grab;
}

.gallery .images img:hover {
  transform: scale(2.2);
  
}
.gallery .images:nth-child(1){
  transform: translateY(-60px);
}
.gallery .images:nth-child(4n){
  transform: translate(-70px, 120px);
}

.gallery .images:nth-child(5n){
  transform: translate(70px, -50px);
}
.gallery .images:nth-child(6n){
  transform: translateY(70px) scale(.8);
}
.gallery .images:nth-child(7n){
  transform: scale(1.3);
  transform: translateY(70px);
}

.gallery .images:nth-child(8n){
  transform: translate(-50px, -90px);
}
.gallery .images:nth-child(9n){
  transform: translateY(-60px) scale(1.5);
}
</style>

<template>
  <div class="relative">
    <div class="relative text-[14px]">
      
      <div
        class="info absolute top-12 right-4 sm:right-10 sm:top-14 opacity-50"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1961 1.09824C5.67351 1.04395 1.15257 5.47688 1.09829 10.9995C1.04401 16.522 5.47694 21.043 10.9995 21.0973C16.5221 21.1516 21.043 16.7186 21.0973 11.196C21.1516 5.67346 16.7187 1.15252 11.1961 1.09824Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.0585 15.0975L11.0978 11.0977"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.1371 7.0979L11.1271 7.0978"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <span class="span absolute top-12 right-10 sm:right-16 sm:top-14"
        >Drag images to shuffle</span
      >
    </div>
    <draggable class="gallery">
        <div v-for="image in images"
        :key="image.id" class="flex flex-col justify-center items-center images"> 
        <img
        
          class=""
          :src="image.pathLong"
          :alt="image.pathShort"
          style="width: 30%"
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

.span {
  opacity: 0;
  transform: translateX(0);
  transition: all 400ms ease-in;
}
.info{
  
  transition: all 400ms ease-in;
}

.info:hover + .span{
  transform: translateX(-10px);
 opacity: 100;
}
.gallery {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  
  -webkit-column-width: 25%;
  -moz-column-width: 30%;
  column-width: 30%;
  padding: 20px 30px;
    padding-top: 4rem;
}
.images{
  page-break-inside: avoid;
  padding: 140px 10px;
}
.gallery .images img {
  page-break-inside: avoid;
  -webkit-transition: all 350ms ease;
  transition: all 400ms ease-in;
  cursor: pointer;
  
}
.gallery .images img:hover {
  page-break-inside: avoid;
  transform: scale(2);
}

.gallery .images img:hover {
  transform: scale(2.2);
}
.gallery .images:nth-child(1) {
  transform: translateY(-60px);
}

.gallery .images:nth-child(4n) {
  transform: translate(-70px, 120px);
}

.gallery .images:nth-child(5n) {
  transform: translate(70px, -50px);
}
.gallery .images:nth-child(6n) {
  transform: translateY(70px) scale(0.8);
}
.gallery .images:nth-child(7n) {
  transform: scale(1.3);
  transform: translateY(70px);
}

.gallery .images:nth-child(8n) {
  transform: translate(-50px, 60px);
}
.gallery .images:nth-child(9n) {
  transform: translateY(-60px) scale(1.2);
}

@media (max-width: 991px) {
 .gallery {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  
  -webkit-column-width: 25%;
  -moz-column-width: 30%;
  column-width: 30%;
  padding: 20px 25px;
    padding-top: 6rem;
}

  .images{
  page-break-inside: avoid;
  padding: 80px 10px;
}

  .gallery .images:nth-child(1) {
  transform: translateY(-60px);
}

.gallery .images:nth-child(4n) {
  transform: translate(-70px, 120px);
}

.gallery .images:nth-child(5n) {
  transform: translate(70px, -50px);
}
.gallery .images:nth-child(6n) {
  transform: translateY(70px) scale(0.8);
}
.gallery .images:nth-child(7n) {
  transform: scale(1.3);
  transform: translateY(70px);
}

.gallery .images:nth-child(8n) {
  transform: translate(-50px, 60px);
}
.gallery .images:nth-child(9n) {
  transform: translateY(-60px) scale(1.2);
}
}
@media (max-width: 480px) {
  .images img {
    transform: scale(1.4);
  }
  .gallery .images img:hover {
    transform: scale(2.2);
  }
  .gallery {
    display: grid;
    grid-template-columns: auto;

    padding: 20px 15px;
    padding-top: 5rem;
  }

  .gallery .images:nth-child(1) {
    transform: translate(-60px, 70px);
  }
  .gallery .images:nth-child(2) {
    transform: translate(40px, 10px);
  }
  .gallery .images:nth-child(4n) {
    transform: translate(-40px, 60px);
  }

  .gallery .images:nth-child(5n) {
    transform: translate(0px, -30px);
  }
  .gallery .images:nth-child(6n) {
    transform: translatex(20px) scale(1);
  }
  .gallery .images:nth-child(7n) {
    transform: scale(1.3);
    transform: translate(50px, 30px);
  }
  .gallery .images:nth-child(8n) {
    transform: translate(-60px, -50px);
  }
  .gallery .images:nth-child(9n) {
    transform: translatex(-20px) scale(0.8);
  }
}

</style>
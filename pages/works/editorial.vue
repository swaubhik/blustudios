<template>
  <body>
    <div class="">
      <!-- swiper1 -->
      <swiper
        style="height: 100vh;"
        class="swiper gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
      >
        <swiper-slide
          style="overflow-y: scroll;"
          v-for="image in images"
          :key="image.id"
          class="slide-1"
        >
          <img :src="image.pathLong" />
        </swiper-slide>

        <div
          class=" fixed top-1/3 right-4 swiper-button-next swiper-button-white text-gray-500"
          slot="button-next"
        ></div>
        <div
          class=" fixed top-1/3 swiper-button-prev swiper-button-black text-gray-500"
          slot="button-prev"
        ></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide v-for="cover in covers" :key="cover.id" class="slide-1">
          <img :src="cover.pathLong" />
        </swiper-slide>
      </swiper>
    </div>
  </body>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-thumbs-gallery",
  title: "Thumbs gallery with Two-way control",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      images: [],
      covers: [],
      swiperOption: {
        lazy: true
      },
      swiperOptionTop: {
        observer: true,
        observeParents: true,
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        observer: true,
        observeParents: true,
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.importlayouts(
      require.context(
        "/static/assets/images/Works/EDITORIAL/Layout/",
        true,
        /\.(png|jpe?g|svg|gif)$/
      )
    );
    this.importcovers(
      require.context(
        "/static/assets/images/Works/EDITORIAL/Cover/",
        true,
        /\.(png|jpe?g|svg|gif)$/
      )
    );
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    importlayouts(r) {
      r.keys().forEach(key =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
    importcovers(r) {
      r.keys().forEach(key =>
        this.covers.push({ pathLong: r(key), pathShort: key })
      );
    }
  }
};
</script>

<style scoped>
.swiper.gallery-top {
  height: 70%;
  width: 100%;
}
.swiper.gallery-thumbs {
  height: 40%;
  box-sizing: border-box;
  padding: 0;
  position: fixed;
  bottom: 0;
}
.swiper.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.swiper.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>

<template>
  <div class="">
    <!-- swiper1 -->
    <swiper
      class="swiper gallery-top"
      :options="swiperOptionTop"
      ref="swiperTop"
    >
      <swiper-slide class="slide-1">
        <img
          src="/assets/images/Works/LIFESTYLE/Aeropostal/Aeropostal.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide-2">
        <img
          src="/assets/images/Works/LIFESTYLE/Fountainhead/Fountainhead-cover.jpg"
          alt=""
        />
        <img
          class="p-10"
          src="/assets/images/Works/LIFESTYLE/Fountainhead/Fountainhead.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide-3">
        <img
          src="\assets\images\Works\LIFESTYLE\THE ARRIVAL - Pernia_s pop-up shop magazine\Pernias-pop-up-shop-thearrival.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide-4">
        <img
          src="/assets/images/Works/LIFESTYLE/Vinokilo/Love For everything/Vinokilo-love.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide-5">
        <img
          src="/assets/images/Works/LIFESTYLE/narangi devi/Naranga-devi.jpg"
          alt=""
        />
      </swiper-slide>
      <div
        class="swiper-button-next swiper-button-white filter drop-shadow"
        slot="button-next"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white filter drop-shadow"
        slot="button-prev"
      ></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper
      class="swiper gallery-thumbs fixed bottom-0 duration-300 ease-linear opacity-0 hover:opacity-100"
      :options="swiperOptionThumbs"
      ref="swiperThumbs"
    >
      <swiper-slide class="slide-1">
        <img
          src="/assets/images/Works/LIFESTYLE/Aeropostal/Aeropostal-cover.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide-2">
        <img
          src="/assets/images/Works/LIFESTYLE/Fountainhead/Fountainhead-cover.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide-3">
        <img
          src="/assets/images/Works/LIFESTYLE/THE ARRIVAL - Pernia_s pop-up shop magazine/The-arrival.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide-4">
        <img
          src="/assets/images/Works/LIFESTYLE/Vinokilo/Love For everything/Vinokilo-love-cover.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide-5">
        <img
          src="/assets/images/Works/LIFESTYLE/narangi devi/Naranga-devi-cover.jpg"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
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
      swiperOption: {
        lazy: true
      },
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
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
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>

<style scoped>
/* .swiper .swiper-slide {
  background-size: cover;
  background-position: center;
} */
/* .swiper .swiper-slide.slide-1 {
  background-image: url("/assets/images/Works/LIFESTYLE/Aeropostal/Aeropostal-cover.jpg");
}
.swiper .swiper-slide.slide-2 {
  background-image: url("/assets/images/Works/LIFESTYLE/Fountainhead/Fountainhead-cover.jpg");
}
.swiper .swiper-slide.slide-3 {
  background-image: url("/assets/images/Works/LIFESTYLE/THE ARRIVAL - Pernia_s pop-up shop magazine/The-arrival.jpg");
}
.swiper .swiper-slide.slide-4 {
  background-image: url("/assets/images/Works/LIFESTYLE/Vinokilo/Love For everything/Vinokilo-love-cover.jpg");
}
.swiper .swiper-slide.slide-5 {
  background-image: url("/assets/images/Works/LIFESTYLE/narangi devi/Naranga-devi-cover.jpg");
} */
.swiper.gallery-top {
  height: 70%;
  width: 100%;
}
.swiper.gallery-thumbs {
  height: 40%;
  box-sizing: border-box;
  padding: 0;
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

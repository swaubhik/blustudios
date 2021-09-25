<template>
  <body>
    <div>
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
          <img @click="hide= !hide, reveal= !reveal" :src="image.pathLong" />
        </swiper-slide>

        <div
          class="swiper-button-next swiper-button-black"
          slot="button-next"
        ></div>
        <div
          class="swiper-button-prev swiper-button-black"
          slot="button-prev"
        ></div>
      </swiper>
      <div id="close" ><nuxt-link id="closeLink"
      class="flex flex-row filter transition duration-300 ease-in-out hover:drop-shadow-2xl "
      to="/projects"><svg class="opacity-70" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> 
      </nuxt-link></div>
      <!-- swiper2 Thumbs -->
      <swiper
        class="swiper gallery-thumbs"
        v-bind:class="{hide: hide, reveal: reveal}"
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
      hide: false,
      reveal: true,
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
        "/static/assets/images/projects/EDITORIAL/Layout/",
        true,
        /\.(png|jpe?g|svg|gif)$/
      )
    );
    this.importcovers(
      require.context(
        "/static/assets/images/projects/EDITORIAL/Cover/",
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
#close{
  width: 100vw;
  z-index: 100;
  position: fixed;
  bottom: 20px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center
}
#close #closeLink{
  background: rgba(255, 255, 255, .8);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  padding: 2px 5px;
  font: 15px;
}
.swiper.gallery-top {
  height: 70%;
  width: 100%;
}
.swiper.gallery-thumbs {
    box-sizing: border-box;
  padding: 20px;
  position: fixed;
  bottom: 5vh;
  width: 100%;
  opacity: 1;
}

.hide{
    box-sizing: border-box;
  padding: 20px;
  position: fixed;
  bottom: 5vh;
  width: 100%;
  animation: hide 500ms ease-in 50ms 1 forwards;
  
}
 @keyframes hide {
  from{
    opacity: 1;
  transform: translateY(0);
  }
   to{
    opacity: 0;
  transform: translateY(40px);
  }
}
.reveal{
    box-sizing: border-box;
  padding: 20px;
  position: fixed;
  bottom: 5vh;
  width: 100%;
  animation: reveal 400ms ease-in 0ms 1 forwards;}
@keyframes reveal {
  from{
  opacity: 0;
  transform: translateY(40px);
  }
   to{
       opacity: 1;
  transform: translateY(0);
    
  }
}
.swiper.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.swiper.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
@media (min-width: 991px) {
 .swiper-button-next{
right: 30px;
}
}
@media (max-width: 480px){
.swiper-button-next{
transform: scale(.7);
}
.swiper-button-prev{
  transform: scale(.7);
}
}
</style>

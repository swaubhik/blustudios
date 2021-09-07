module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "image-hero": "url('/assets/images/image-archive/bg.png')",
        "home-hero": "url('/assets/images/home/home-video.gif')",
        "about-hero": "url('/assets/images/about/about-hero.jpg')"
      }),
      fontFamily: {
        gotham: "'Gotham'"
      },
      keyframes: {
        bounceslow: {
          "0%": { position: "relative", top: "20px" },
          "25%": { top: "0" },
          "50%,100%": { right: "10px" },
          "75%": { left: "10px" }
        }
      },
      animation: {
        bounceslow: "bounceslow 3s 3s ease-in-out infinite"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

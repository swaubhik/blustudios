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
        "image-hero": "url('/assets/images/image-archive/bg.jpg')",
        "about-hero": "url('/assets/images/about/about-hero.jpg')",
        "photography": "url('/assets/images/about/services/photography.jpg')",
        "filming": "url('/assets/images/about/services/filming.jpg')",
        "creativeD": "url('/assets/images/about/services/creative-direction.jpg')",
        "visualC": "url('/assets/images/about/services/Visual-Content.jpg')",
        "production": "url('/assets/images/about/services/production.jpg')",
        "lookbooks": "url('/assets/images/about/services/lookbooks.jpg')",
        "talentD": "url('/assets/images/about/services/talent-development.jpg')",

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

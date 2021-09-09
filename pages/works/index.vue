<template>
  <div class="py-32 flex flex-wrap justify-center items-center text-center h-[100vh]">
    <nuxt-link
      class="flex flex-col filter transition duration-300 ease-in-out hover:drop-shadow-2xl p-6"
      to="/works/editorial"
    >
      <img class="w-[400px] filter transition duration-500 ease-in-out hover:scale-75"
        src="/assets/images/Works/Editorial/Editorial-gif.gif"
        alt="editorial"
      />
      <span class="uppercase p-6 text-xl filter drop-shadow-xl pt-6"
        >Editorial</span
      >
    </nuxt-link>
    <nuxt-link
      class="flex flex-col filter transition duration-300 ease-in-out hover:drop-shadow-2xl p-6"
      to="/works/lifestyle"
    >
      <img class="w-[400px] filter transition duration-500 ease-in-out hover:scale-75"
        src="/assets/images/Works/Lifestyle/Lifestyle-gif.gif"
        alt="lifestyle"
      />
      <span class="uppercase p-6 text-xl filter drop-shadow-2xl"
        >Lifestyle</span
      >
    </nuxt-link>
  </div>
</template>

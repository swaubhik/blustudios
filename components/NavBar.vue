<template>
  <nav
    class="
			fixed
			flex flex-1 flex-col
			justify-center
			items-center
			top-0
			min-w-full
			font-gotham
			text-[12px]
			z-[99]
		"
  >
    <div class="w-full bg-white shadow-lg lg:text-[14px] py-1">
      <div class="max-w-2xl sm:max-w-xl lg:max-w-3xl mx-auto">
        <!-- Primary menu -->
        <div class="grid text-center gap-4 py-2 my-4 sm:grid-cols-4 sm:my-0">
          <div>
            <nuxt-link
              exact-active-class="font-bold"
              class="hover:font-bold p-2"
              to="/"
              >Home</nuxt-link
            >
          </div>
          <div>
            <nuxt-link
              active-class="font-bold"
              class="hover:font-bold p-2"
              to="/about"
            >
              About Us
            </nuxt-link>
          </div>
          <div>
            <nuxt-link
              active-class="font-bold"
              class="hover:font-bold p-2"
              to="/works"
            >
              Works
            </nuxt-link>
          </div>
          <div>
            <nuxt-link
              active-class=" font-bold"
              class="hover:font-bold p-2"
              to="/image-archive"
            >
              Image Archive
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Logo -->

    <div class="relative -top-px">
      <blustdio />
    </div>
    <!-- mobile menu -->
  </nav>
</template>

<script>
export default {};
</script>

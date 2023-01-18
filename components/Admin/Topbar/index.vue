<template>
  <header class="h-20 items-center relative w-full z-10">
    <div
      class="
        flex flex-center flex-col
        h-full
        justify-center
        mx-auto
        px-3
        relative
      "
    >
      <div
        class="
          flex
          items-center
          pl-1
          relative
          w-full
          sm:pr-2 sm:ml-0
          lg:max-w-68
        "
      >
        <div class="container flex h-auto h-full left-0 relative w-3/4">
          <div class="flex group h-full items-center relative w-12">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidebar"
              class="text-4xl text-black focus:outline-none lg:hidden"
              @click="toggle"
            >
              &#8801;
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Topbar",
  inject: ["toggle"],
};
</script>

<template>
  <router-link :to="to">
    <span
      class="
        flex
        items-center
        justify-start
        my-1
        p-3
        text-black
        w-full
        lg:hover:bg-gray-light
      "
      :class="
        $route.path === to &&
        'border-primary border-l-4 lg:border-l-0 lg:border-l-4 lg:border-primary'
      "
    >
      <span>
        <slot />
      </span>
      <span class="mx-4 text-sm">
        {{ title }}
      </span>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    to: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

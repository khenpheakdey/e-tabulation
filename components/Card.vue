<template>
  <div class="p-6 bg-white rounded-lg">
    <div class="mb-5">
      <svg
        class="hi-outline hi-template inline-block w-12 h-12 text-indigo-500"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        ></path>
      </svg>
    </div>

    <h3 class="text-lg font-bold mb-2">{{ title }}</h3>

    <p class="text-sm leading-6 text-gray-600">{{ desc }}</p>
  </div>
</template>
<script>
export default {
  props: ["title", "desc"],
};
</script>
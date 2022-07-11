<template>
  <div class="flex h-20 w-auto items-center justify-start pl-4 lg:pl-8">
    <!-- <div class="h-12 w-12"> -->
    <!-- <img
      class="mx-auto h-12 w-auto"
      src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
      alt="Workflow"
    /> -->
    <!-- </div> -->
    <div class="w-12 h-12">
      <Logo />
    </div>
  </div>
</template>

<script>
import Logo from "../../../static/icons/Logo.vue";
export default {
  name: "SidebarHeader",
  components: {
    Logo,
  },
};
</script>

<style scoped>
/* .header {
  background: #f96057;
  box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
} */
</style>

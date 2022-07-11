<template>
  <admin-provider>
    <div class="base bg-mac bg-center bg-cover h-screen overflow-hidden w-full">
      <div class="content h-screen overflow-hidden relative lg:rounded-2xl">
        <div class="flex items-start">
          <Sidebar mobile-position="right" />
          <div class="flex flex-col h-screen pl-0 w-full lg:space-y-4 lg:w-99">
            <topbar />
            <main class="h-screen bg-gray-light overflow-auto text-black">
              <slot />
            </main>
          </div>
        </div>
      </div>
    </div>
  </admin-provider>
</template>

<script>
// import Overlay from "./provider/Overlay.vue";
import AdminProvider from "../components/Admin/Provider/index.vue";
import Topbar from "../components/Admin/Topbar/index.vue";
import Sidebar from "../components/Admin/Sidebar/index.vue";

export default {
  name: "AdminLayout",
  components: { AdminProvider, Topbar, Sidebar },
};
</script>

<style scoped>
.base:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.72) 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-backdrop-filter: saturate(3);
  backdrop-filter: saturate(3);
}

.content {
  background-color: rgb(255 255 255 / 31%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.main {
  background-color: rgb(255 255 255 / 31%);
}

.main::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

.main::-webkit-scrollbar-thumb {
  background: rgb(1 2 3 / 40%);
  /* border-radius: 10px; */
}
</style>

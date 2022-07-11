<template>
  <div class="h-screen p-4 xl:px-6">
    <div
      class="
        flex flex-wrap
        md:flex-nowrap
        items-center
        justify-between
        w-full
        rounded-md
        py-8
        px-8
        h-56
        lg:py-6
      "
      :style="{
        backgroundColor: `url('https://www.transparenttextures.com/patterns/cubes.png')`,
        backgroundImage: 'linear-gradient(to right top,#159957,#155799)',
      }"
    >
      <div>
        <h3 class="flex items-center m-0 font-medium text-3xl text-white">
          <!-- Icon here -->
          Welcome {{ $auth.$state.user.username }}
        </h3>
        <div class="font-normal text-sm mt-4 mb-4 text-white overflow-hidden">
          Improve the existing manual tabulation.
        </div>
        <!-- <button class="py-2 px-4 bg-blue-700 text-white rounded-2xl">
          Start free trial
        </button> -->
      </div>
    </div>
    <div
      class="
        grid grid-cols-1
        gap-4
        xl:gap-5
        md:grid-cols-2
        xl:grid-cols-4
        pt-4
        pb-6
        lg:pt-6 lg:pb-6
      "
      style="cursor: auto"
    >
      <Card title="All Events" :desc="events.allEvents" />
      <Card title="Candidates" desc="Description" />
      <Card title="Examiner" desc="Description" />
    </div>
    <h3 class="flex mb-2 text-md font-bold">Event Timeline</h3>
    <EventTimeline :events="upcomingEvents" />
  </div>
</template>

<script>
export default {
  middleware: "isAuthenticated",
  async asyncData({ $axios, $config, $auth }) {
    const events = await $axios.$get(`api/event/all`);
    const upcomingEvents = await $axios.$get(`api/event/upcoming`);
    console.log($auth.$state.user.roles);
    return { events, upcomingEvents };
  },
};
</script>

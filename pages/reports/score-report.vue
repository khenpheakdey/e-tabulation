<template>
  <div
    class="h-screen p-4 bg-gray-light rounded-md xl:px-6 xl:rounded-md xl:pb-12"
  >
    <div class="grid grid-cols-2 gap-6">
      <div class="col-span-1">
        <label for="candidate" class="block text-sm font-medium text-gray-700"
          >Candidate</label
        >
        <select
          id="selectedCandidate"
          name="selectedCandidate"
          class="
            mt-1
            block
            w-full
            py-2
            px-3
            border border-gray-300
            bg-white
            rounded-md
            shadow-sm
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
            sm:text-sm
          "
          v-model="selectedCsandidate"
        >
          <option
            v-for="candidate in candidates"
            :key="candidate._id"
            :value="candidate._id"
          >
            {{ candidate.firstName + " " + candidate.lastName }}
          </option>
        </select>
      </div>
      <div class="col-span-1">
        <label for="country" class="block text-sm font-medium text-gray-700"
          >Event</label
        >
        <select
          id="selectedEvent"
          name="selectedEvent"
          class="
            mt-1
            block
            w-full
            py-2
            px-3
            border border-gray-300
            bg-white
            rounded-md
            shadow-sm
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
            sm:text-sm
          "
          v-model="selectedEvent"
        >
          <option
            v-for="event in getEvents.events"
            :key="event._id"
            :value="event._id"
          >
            {{ event.title }}
          </option>
        </select>
      </div>
      <!-- <div>{{ reportData[0] }}</div> -->
      <div class="col-span-3 grid-cols-3">
        <div class="col-span-3 bg-white rounded-md">
          {{ reportData[0] }}
        </div>
        <div
          class="col-span-3 relative overflow-x-auto shadow-md sm:rounded-lg"
        >
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-white uppercase bg-primary">
              <tr>
                <th scope="col" class="px-6 py-3">Criteria</th>
                <th scope="col" class="px-6 py-3">Score</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="bg-white border-b border-gray-light hover:bg-gray-light"
                v-for="data in reportData"
                :key="data._id"
              >
                <th
                  scope="row"
                  class="
                    px-6
                    py-4
                    font-medium
                    text-gray-900
                    dark:text-white
                    whitespace-nowrap
                  "
                >
                  {{ data.criteria.criteriaField }}
                </th>
                <td class="px-6 py-4">{{ data.score }}</td>
              </tr>
            </tbody>
          </table>
          <div
            v-if="reportData.length == 0 ? true : false"
            class="text-center p-4"
          >
            No data avialable
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getEvents: [],
      reportData: [],
      getScore: [],
    };
  },
  async asyncData({ $axios, $config }) {
    const events = await $axios.$get(`api/event/all`);
    const candidates = await $axios.$get(`api/candidate/get`);
    const selectedCandidate = candidates[0]._id;

    const getEvents = events.data;
    const selectedEvent = events.data[0]._id;

    return {
      events,
      candidates,
      selectedCandidate,
      selectedEvent,
      getEvents,
    };
  },
  methods: {},
  watch: {
    async seletedCandidate() {
      console.log(this.seletedCandidate);
      console.log(this.selectedEvent);
    },
    async selectedCandidate() {
      this.getEvents = await this.$axios.$get(
        `/api/candidate/showOne?id=${this.selectedCandidate}`
      );
      this.reportData = await this.$axios.$get(
        `/api/score/getScore?event=${this.selectedEvent}&candidate=${this.selectedCandidate}`
      );
    },
    async selectedEvent() {
      this.reportData = await this.$axios.$get(
        `/api/score/getScore?event=${this.selectedEvent}&candidate=${this.selectedCandidate}`
      );
    },
  },
};
</script>

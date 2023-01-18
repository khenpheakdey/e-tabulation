<template>
  <div
    class="h-screen p-4 bg-gray-light rounded-md xl:px-6 xl:rounded-md xl:pb-12"
  >
    <div class="grid grid-cols-2 gap-6">
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
          <option v-for="event in events" :key="event._id" :value="event">
            {{ event.title }}
          </option>
        </select>
      </div>
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
          v-model="selectedCandidate"
        >
          <option
            v-for="candidate in candidates"
            :key="candidate._id"
            :value="candidate"
          >
            {{ candidate.firstName + " " + candidate.lastName }}
          </option>
        </select>
      </div>
      <!-- <div>{{ reportData[0] }}</div> -->
      <div class="col-span-3 grid-cols-3">
        <div class="col-span-3 bg-white rounded-md">
          {{ reportData[0] }}
        </div>
        <div
          class="
            col-span-3
            relative
            overflow-x-auto
            shadow-md
            rounded-md
            sm:rounded-lg
          "
        >
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-white uppercase bg-primary">
              <tr>
                <th scope="col" class="px-6 py-3">Criteria</th>
                <th scope="col" class="px-6 py-3">Examiner</th>
                <th scope="col" class="px-6 py-3">Score</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="bg-white border-b border-gray-light hover:bg-gray-light"
                v-for="data in reportData.scoreDetails"
                :key="data._id"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {{ data.criteria.criteriaField }}
                  {{ `(${data.criteria.percentage}%)` }}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {{ data.examiner.username }}
                </th>

                <td class="px-6 py-4 text-center">{{ data.score }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colspan="2"
                  class="
                    pl-6
                    pr-3
                    py-2
                    text-right text-sm
                    font-normal
                    text-gray-500
                    table-cell
                  "
                >
                  Total Scores:
                </th>
                <th
                  scope="row"
                  colspan="2"
                  class="
                    pl-4
                    pr-3
                    py-2
                    text-left text-sm
                    font-normal
                    text-gray-500
                    hidden
                  "
                >
                  Total Scores:
                </th>
                <td
                  class="
                    pl-6
                    py-2
                    text-center text-sm text-gray-500
                    pr-6
                    md:pr-6
                    font-bold
                  "
                >
                  {{ reportData.totalScores }}
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colspan="2"
                  class="
                    pl-6
                    pr-3
                    pt-2
                    pb-2
                    text-right text-sm
                    font-normal
                    text-gray-500
                    table-cell
                  "
                >
                  Final Rating:
                </th>
                <th
                  scope="row"
                  colspan="2"
                  class="
                    pl-6
                    pr-3
                    pt-2
                    pb-2
                    text-left text-sm
                    font-normal
                    text-gray-500
                    hidden
                  "
                >
                  Final Rating:
                </th>
                <td
                  class="
                    pl-6
                    pb-2
                    pt-2
                    text-center text-sm
                    font-bold
                    text-gray-500
                    pr-6
                    mb-4
                    rounded-md
                    bg-primary
                    text-white
                  "
                >
                  {{ `${reportData.finalRating}%` }}
                </td>
              </tr>
            </tfoot>
          </table>
          <!-- <div
            v-if="reportData.length == 0 ? true : false"
            class="text-center p-4"
          >
            No data avialable
          </div> -->
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
    const resEvents = await $axios.$get(`api/event/all`);

    const events = resEvents.data;
    const selectedEvent = events[0];

    const candidates = await $axios.$get(`api/candidate/get`);
    const selectedCandidate = candidates[0];

    const reportData = await $axios.$get(
      `/api/individual-score/getScore?event=${selectedEvent._id}&candidate=${selectedCandidate._id}`
    );

    return {
      events,
      candidates,
      selectedCandidate,
      reportData,
      selectedEvent,
    };
  },
  methods: {},
  watch: {
    async selectedCandidate() {
      this.reportData = await this.$axios.$get(
        `/api/individual-score/getScore?event=${this.selectedEvent._id}&candidate=${this.selectedCandidate._id}`
      );
    },
    async selectedEvent() {
      this.reportData = await this.$axios.$get(
        `/api/score/getScore?event=${this.selectedEvent._id}&candidate=${this.selectedCandidate._id}`
      );
      this.candidates = await this.$axios.$get(
        `/api/candidate/getByEvent?event_id=${this.selectedEvent._id}`
      );
    },
  },
};
</script>

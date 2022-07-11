<template>
  <div class="h-screen p-4 bg-gray-light rounded-md xl:p-6 xl:rounded-md">
    <div class="grid grid-cols-3">
      <div class="col-span-1">
        <h2 class="text-gray-600 font-semibold">{{ event.title }}</h2>
        <span class="text-xs">{{ event.eventStatus }}</span>
      </div>
      <div class="col-span-1">
        <label for="country" class="block text-sm font-medium text-gray-700"
          >Candidate</label
        >
        <select
          id="selectedcandidate"
          name="selectedcandidate"
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
          v-model="seletedCandidate"
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
    </div>
    <div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="
                    px-5
                    h-16
                    w-72
                    py-3
                    border border-gray
                    bg-gray-light
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  Criterion
                </th>
                <th
                  class="
                    px-5
                    py-3
                    h-16
                    border border-gray
                    bg-gray-light
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                    w-72
                  "
                >
                  {{
                    event.criterion[0].levels[0].levels +
                    "(" +
                    event.criterion[0].levels[0].minScore +
                    "-" +
                    event.criterion[0].levels[0].maxScore +
                    ")"
                  }}
                </th>
                <th
                  class="
                    px-5
                    py-3
                    h-16
                    w-72
                    border border-gray
                    bg-gray-light
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  {{
                    event.criterion[0].levels[1].levels +
                    "(" +
                    event.criterion[0].levels[1].minScore +
                    "-" +
                    event.criterion[0].levels[1].maxScore +
                    ")"
                  }}
                </th>
                <th
                  class="
                    px-5
                    py-3
                    h-16
                    border border-gray
                    bg-gray-light
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                    w-72
                  "
                >
                  {{
                    event.criterion[0].levels[2].levels +
                    "(" +
                    event.criterion[0].levels[2].minScore +
                    "-" +
                    event.criterion[0].levels[2].maxScore +
                    ")"
                  }}
                </th>
                <th
                  class="
                    px-5
                    py-3
                    h-16
                    border border-gray
                    bg-gray-light
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    uppercase
                    w-72
                    tracking-wider
                  "
                >
                  {{
                    event.criterion[0].levels[3].levels +
                    "(" +
                    event.criterion[0].levels[3].minScore +
                    "-" +
                    event.criterion[0].levels[3].maxScore +
                    ")"
                  }}
                </th>
                <th
                  class="
                    px-5
                    py-3
                    h-16
                    border border-gray
                    bg-gray-light
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    w-36
                    uppercase
                    tracking-wider
                  "
                >
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(criteria, idx) in event.criterion"
                :key="criteria._id"
              >
                <td class="px-5 py-5 border border-gray bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap font-bold">
                        {{ criteria.criteriaField }}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  v-for="(level, idx) in criteria.levels"
                  :key="idx"
                  class="px-5 py-5 border border-gray bg-white text-sm"
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ level.description }}
                  </p>
                </td>
                <td class="px-5 py-5 border border-gray bg-white text-sm">
                  <input type="number" v-model="score[idx]" min="1" max="8" />
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="
              px-5
              py-5
              bg-white
              flex flex-row
              justify-between
              xs:flex-row
              items-center
              xs:justify-between
            "
          >
            <span class="text-xs xs:text-sm text-gray-900">
              This is automatically calculate your rating after scoring
            </span>
            <div class="inline-flex mt-2 xs:mt-0 items-center">
              <p class="mr-6 font-bold">Rating (%)</p>
              <input
                type="text"
                disabled
                v-model="finalRating"
                class="text-center font-lg font-bold text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <button
        class="
          bg-primary
          px-4
          py-2
          rounded-md
          text-white
          font-semibold
          tracking-wide
          cursor-pointer
        "
        @click="submitScore"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import * as _ from "lodash";

export default {
  layout: "examiner",

  data() {
    return {
      totalScore: 0,
      score: [0, 0, 0, 0, 0, 0],
      finalRating: 0,
    };
  },
  async asyncData({ $axios, $config, params }) {
    const slug = params.slug;
    const event = await $axios.$get(`api/event/showOne?id=${slug}`);
    const candidates = await $axios.$get(
      `/api/candidate/getByEvent?event_id=${slug}`
    );

    const seletedCandidate = candidates[0]._id;
    console.log(candidates[0]._id);
    return { event, candidates, seletedCandidate };
  },

  methods: {
    computeRating(candidateScore) {
      return (candidateScore / (8 * this.event.criterion.length)) * 100;
    },

    async submitScore() {
      const scoreBody = _.map(this.event.criterion, (criteria, idx) => {
        return {
          score: this.score[idx],
          event: this.event._id,
          criteria: criteria._id,
          examiner: this.$auth.$state.user.id,
          candidate: this.seletedcandidate,
        };
      });

      // this.finalRating = this.computeRating(this.totalScore);
      await this.$axios
        .$post("api/score/createScores", scoreBody)
        .then((result) => {
          this.$toast.show({
            type: "success",
            timeout: 2,
            title: "Success",
            message: "Score saved succesfully",
            classTimeout: "bg-primary",
          });
          this.score = [0, 0, 0, 0];
        })
        .catch((err) => {
          this.$toast.show({
            type: "error",
            timeout: 2,
            title: "Error",
            message: "Score not saved succesfully",
            classTimeout: "bg-primary",
          });
        });
    },
  },
  watch: {
    score: function () {
      this.totalScore =
        Number(this.score[0]) +
        Number(this.score[1]) +
        Number(this.score[2]) +
        Number(this.score[3]);
      this.finalRating =
        (this.totalScore / (8 * this.event.criterion.length)) * 100;
    },
  },
};
</script>
<template>
  <div class="h-screen p-6 bg-gray-light rounded-md xl:p-6 xl:rounded-md">
    <div class="p-2 bg-primary rounded-lg mb-4">
      <h1 class="text-xl text-center font-semibold text-white">
        {{ event.title }}
      </h1>
    </div>

    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-1 p-2 bg-primary rounded-lg mb-4">
        <h1 class="text-center font-semibold text-white text-sm md:text-xl">
          Individual Scoring
        </h1>
      </div>
    </div>
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-span-1">
        <label
          for="selectedcandidate"
          class="block text-sm font-medium text-gray-700"
          >Please select Candidate</label
        >
        <select
          id="selectedcandidate"
          name="selectedcandidate"
          class="
            mt-1
            block
            w-full
            py-1
            px-3
            border border-gray-300
            rounded-md
            shadow-sm
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
            sm:text-sm
          "
          v-model="selectedCandidate"
        >
          <option
            v-for="candidate in candidates"
            :key="candidate"
            :value="candidate"
          >
            {{ candidate.firstName + " " + candidate.lastName }}
          </option>
        </select>
      </div>
    </div>

    <div class="min-w-0 flex-2 my-4 bg-white p-2 rounded-md">
      <div>
        <h2
          class="
            font-bold
            leading-7
            truncate
            text-xl
            tracking-tight
            md:text-2xl
          "
        >
          Candidate Information
        </h2>
      </div>
      <div></div>
      <div
        class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
      >
        <div class="mt-2 flex items-center text-sm text-gray-300">
          <font-awesome-icon
            icon="user"
            class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-500"
            aria-hidden="true"
          />

          <b>{{
            selectedCandidate.firstName + " " + selectedCandidate.lastName
          }}</b>
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-300">
          <font-awesome-icon
            icon="envelope"
            class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-500"
            aria-hidden="true"
          />

          {{ selectedCandidate.email }}
        </div>

        <div class="mt-2 flex items-center text-sm text-gray-300">
          <font-awesome-icon
            v-if="selectedCandidate.gender === 'male'"
            icon="mars"
            class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-500"
            aria-hidden="true"
          />
          <font-awesome-icon
            v-else
            icon="venus"
            class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-500"
            aria-hidden="true"
          />

          {{ selectedCandidate.gender }}
        </div>
      </div>
    </div>

    <!-- <div class="grid grid-cols-3">
      <div class="col-span-1">
        <h2 class="text-gray-600 font-semibold">{{ event.title }}</h2>
        <span class="text-xs">{{ event.status }}</span>
      </div>
      <div class="col-span-1">
        <h2 class="text-gray-600 font-semibold">
          {{ groups[selectedGroupIndex].groupName }}
        </h2>
      </div>
      <div class="col-span-1">
        <label for="country" class="block text-sm font-medium text-gray-700"
          >Candidate</label
        >
        <select
          id="selectedGroup"
          name="selectedGroup"
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
          v-model="selectedGroup"
        >
          <option v-for="group in groups" :key="group._id" :value="group._id">
            {{ group.groupName }}
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
                  groupCriterion
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
                    event.groupCriterion[0].levels[0].levels +
                    "(" +
                    event.groupCriterion[0].levels[0].minScore +
                    "-" +
                    event.groupCriterion[0].levels[0].maxScore +
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
                    event.groupCriterion[0].levels[1].levels +
                    "(" +
                    event.groupCriterion[0].levels[1].minScore +
                    "-" +
                    event.groupCriterion[0].levels[1].maxScore +
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
                    event.groupCriterion[0].levels[2].levels +
                    "(" +
                    event.groupCriterion[0].levels[2].minScore +
                    "-" +
                    event.groupCriterion[0].levels[2].maxScore +
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
                    event.groupCriterion[0].levels[3].levels +
                    "(" +
                    event.groupCriterion[0].levels[3].minScore +
                    "-" +
                    event.groupCriterion[0].levels[3].maxScore +
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
                v-for="(criteria, index) in event.groupCriterion"
                :key="criteria._id"
              >
                <td class="px-5 py-5 border border-gray bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap font-bold">
                        {{ criteria.criteriaField }}
                        {{ ` (${criteria.percentage}%)` }}
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
                  <input
                    type="number"
                    v-model="groupScore[index]"
                    min="1"
                    max="10"
                  />
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
                v-model="finalGroupRating"
                class="text-center font-lg font-bold text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
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
          col-end-5
        "
        @click="submitGroupScore"
      >
        Save
      </button>
    </div> -->
    <!-- individual by group -->
    <!-- <div class="grid grid-cols-3">
      <div class="col-span-1">
        <h2 class="text-gray-600 font-semibold">{{ event.title }}</h2>
        <span class="text-xs">{{ event.status }}</span>
      </div>
      <div class="col-span-1">
        <h2 class="text-gray-600 font-semibold">
          {{ groups[selectedGroupIndex].groupName }}
        </h2>
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
          v-model="selectedCandidate"
        >
          <option
            v-for="candidate in groups[selectedGroupIndex].candidates"
            :key="candidate"
            :value="candidate"
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
                  groupCriterion
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
                    event.groupCriterion[0].levels[0].levels +
                    "(" +
                    event.groupCriterion[0].levels[0].minScore +
                    "-" +
                    event.groupCriterion[0].levels[0].maxScore +
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
                    event.groupCriterion[0].levels[1].levels +
                    "(" +
                    event.groupCriterion[0].levels[1].minScore +
                    "-" +
                    event.groupCriterion[0].levels[1].maxScore +
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
                    event.groupCriterion[0].levels[2].levels +
                    "(" +
                    event.groupCriterion[0].levels[2].minScore +
                    "-" +
                    event.groupCriterion[0].levels[2].maxScore +
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
                    event.groupCriterion[0].levels[3].levels +
                    "(" +
                    event.groupCriterion[0].levels[3].minScore +
                    "-" +
                    event.groupCriterion[0].levels[3].maxScore +
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
                v-for="(criteria, index) in event.groupCriterion"
                :key="criteria._id"
              >
                <td class="px-5 py-5 border border-gray bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap font-bold">
                        {{ criteria.criteriaField }}
                        {{ ` (${criteria.percentage}%)` }}
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
                  <input
                    type="number"
                    v-model="groupScore[index]"
                    min="1"
                    max="10"
                  />
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
                v-model="finalGroupRating"
                class="text-center font-lg font-bold text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
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
          col-end-5
        "
        @click="submitGroupScore"
      >
        Save
      </button>
    </div> -->
    <!-- individual -->

    <div class="bg-white rounded-lg my-4">
      <div class="overflow-x-auto">
        <div
          class="inline-block min-w-full shadow overflow-hidden rounded-lg p-2"
        >
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
                  individualCriterion
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
                    event.individualCriterion[0].levels[0].levels +
                    "(" +
                    event.individualCriterion[0].levels[0].minScore +
                    "-" +
                    event.individualCriterion[0].levels[0].maxScore +
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
                    event.individualCriterion[0].levels[1].levels +
                    "(" +
                    event.individualCriterion[0].levels[1].minScore +
                    "-" +
                    event.individualCriterion[0].levels[1].maxScore +
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
                    event.individualCriterion[0].levels[2].levels +
                    "(" +
                    event.individualCriterion[0].levels[2].minScore +
                    "-" +
                    event.individualCriterion[0].levels[2].maxScore +
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
                    event.individualCriterion[0].levels[3].levels +
                    "(" +
                    event.individualCriterion[0].levels[3].minScore +
                    "-" +
                    event.individualCriterion[0].levels[3].maxScore +
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
                v-for="(criteria, index) in event.individualCriterion"
                :key="criteria._id"
              >
                <td class="px-5 py-5 border border-gray text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap font-bold">
                        {{ criteria.criteriaField }}
                        {{ ` (${criteria.percentage}%)` }}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  v-for="(level, idx) in criteria.levels"
                  :key="idx"
                  class="px-5 py-5 border border-graytext-sm"
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ level.description }}
                  </p>
                </td>
                <td class="px-5 py-5 border border-gray text-sm">
                  <input
                    type="number"
                    v-model="individualScore[index]"
                    min="1"
                    max="10"
                  />
                  <!-- <div class="error" v-if="$v.score.$each.$iter[index].between">
                    Name is required.
                  </div> -->
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="
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
                v-model="finalIndividualRating"
                class="text-center font-lg font-bold text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
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
          col-end-5
        "
        @click="submitIndividualScore"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import * as _ from "lodash";
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  layout: "examiner",
  data() {
    return {
      totalIndividualScore: 0,
      groupScore: [0, 0, 0, 0, 0, 0],
      individualScore: [0, 0, 0, 0, 0, 0],
      finalGroupRating: 0,
      finalIndividualRating: 0,
      selectedGroupIndex: 0,
    };
  },

  async asyncData({ $axios, $config, params }) {
    const slug = params.slug;
    const event = await $axios.$get(`api/event/showOne?id=${slug}`);
    const candidates = await $axios.$get(
      `/api/candidate/getByEvent?event_id=${slug}`
    );
    const groups = await $axios.$get(`/api/group/getByEvent?event=${slug}`);

    console.log(candidates);
    console.log(groups);

    const selectedCandidate = candidates[0];
    const selectedGroup = groups[0]._id;
    console.log(candidates[0]._id);
    return { event, candidates, selectedCandidate, selectedGroup, groups };
  },

  methods: {
    computeRating(candidateScore) {
      return (candidateScore / (8 * this.event.groupCriterion.length)) * 100;
    },

    async submitGroupScore() {
      const scoreBody = _.map(this.event.groupCriterion, (criteria, idx) => {
        return {
          score: this.groupScore[idx],
          event: this.event._id,
          criteria: criteria._id,
          examiner: this.$auth.$state.user.id,
          group: this.selectedGroup,
        };
      });

      console.log(scoreBody);

      await this.$axios
        .$post("api/group-score/createScores", scoreBody)
        .then((result) => {
          this.$toast.show({
            type: "success",
            timeout: 2,
            title: "Success",
            message: result.message,
            classTimeout: "bg-primary",
          });
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

    async submitIndividualScore() {
      const scoreBody = _.map(
        this.event.individualCriterion,
        (criteria, idx) => {
          return {
            score: this.individualScore[idx],
            event: this.event._id,
            criteria: criteria._id,
            examiner: this.$auth.$state.user.id,
            candidate: this.selectedCandidate,
          };
        }
      );

      await this.$axios
        .$post("api/individual-score/createScores", scoreBody)
        .then((result) => {
          this.$toast.show({
            type: "success",
            timeout: 2,
            title: "Success",
            message: result.message,
            classTimeout: "bg-primary",
          });
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
    groupScore: function () {
      this.finalGroupRating = 0;

      this.event.groupCriterion.forEach((element, index) => {
        this.finalGroupRating +=
          (element.percentage * this.groupScore[index]) /
          element.levels[0].maxScore;
      });
    },
    individualScore: function () {
      this.finalIndividualRating = 0;

      this.event.individualCriterion.forEach((element, index) => {
        this.finalIndividualRating +=
          (element.percentage * this.individualScore[index]) /
          element.levels[0].maxScore;
      });
    },
    selectedGroup: function () {
      this.groups.forEach((element, idx) => {
        if (this.selectedGroup == element._id) {
          this.selectedGroupIndex = idx;
          this.selectedCandidate = this.groups[idx].candidates[0];
        }
      });
    },
  },
};
</script>
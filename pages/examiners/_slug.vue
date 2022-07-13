<template>
  <div class="h-screen p-4 bg-gray-light rounded-md xl:p-6 xl:rounded-md">
    <div class="grid grid-cols-3">
      <div class="col-span-1">
        <h2 class="text-gray-600 font-semibold">{{ event.title }}</h2>
        <span class="text-xs">{{ event.eventStatus }}</span>
      </div>
      <div class="col-span-1">
        <h2 class="text-gray-600 font-semibold">{{ groups[0].groupName }}</h2>
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
                  <!-- <div class="error" v-if="$v.score.$each.$iter[index].between">
                    Name is required.
                  </div> -->
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
        @click="submitGroupScore"
      >
        Save
      </button>
    </div>
    <div class="grid grid-cols-3">
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
            :key="candidate._id"
            :value="candidate._id"
          >
            {{ candidate.firstName + " " + candidate.lastName }}
          </option>
        </select>
      </div>
    </div>
    <div class="flex shadow-md">
      <div class="h-auto">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full overflow-hidden">
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
                    Legend
                  </th>
                </tr>
              </thead>
              <tbody class="border border-gray bg-white text-sm">
                <tr
                  class="flex items-left py-5 px-5"
                  v-for="(level, idx) in event.individualCriterion[0].levels"
                  :class="
                    idx == event.individualCriterion[0].levels.length - 1
                      ? ''
                      : 'border-b'
                  "
                  :key="idx"
                >
                  <div class="ml-3 border-r">
                    <p class="text-gray-900 whitespace-no-wrap font-bold pr-4">
                      {{ level.minScore }}
                    </p>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap font-bold">
                      {{ level.levels }}
                    </p>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 h-full">
          <div class="inline-block w-full h-full overflow-hidden">
            <table class="w-full leading-normal">
              <thead>
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
                  Name of Members->
                </th>
                <th
                  v-for="candidate in groups[selectedGroupIndex].candidates"
                  :key="candidate._id"
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
                  {{ candidate.firstName + " " + candidate.lastName }}
                </th>
              </thead>
              <tbody>
                <tr
                  v-for="(criteria, index) in event.individualCriterion"
                  :key="criteria._id"
                >
                  <td class="px-5 py-5 border border-gray bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ criteria.criteriaField }}
                    </p>
                  </td>
                  <td
                    v-for="candidate in groups[selectedGroupIndex].candidates"
                    :key="candidate._id"
                    class="px-5 py-5 border border-gray bg-white text-sm"
                  >
                    <input
                      type="number"
                      v-model="individualScore[index]"
                      min="1"
                      max="10"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
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
          v-model="finalIndividualRating"
          class="text-center font-lg font-bold text-primary"
        />
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
      totalGroupScore: 0,
      totalIndividualScore: 0,
      groupScore: [0, 0, 0, 0, 0, 0],
      individualScore: [0, 0, 0, 0, 0, 0],
      finalGroupRating: 0,
      finalIndividualRating: 0,
      selectedGroupIndex: 0,
    };
  },
  // mounted: () => {
  //   console.log(this.event);
  // },
  // validations: {
  //   score: {
  //     required,
  //     $each: {
  //       required,
  //       between: between(1, 10),
  //     },
  //   },
  //   finalRating: {
  //     between: between(0, 100),
  //   },
  // },
  async asyncData({ $axios, $config, params }) {
    const slug = params.slug;
    const event = await $axios.$get(`api/event/showOne?id=${slug}`);
    const candidates = await $axios.$get(
      `/api/candidate/getByEvent?event_id=${slug}`
    );
    const groups = await $axios.$get(`/api/group/getByEvent?event=${slug}`);

    console.log(candidates);
    console.log(groups);

    const selectedCandidate = candidates[0]._id;
    const selectedGroup = groups[0]._id;
    console.log(candidates[0]._id);
    return { event, candidates, selectedCandidate, selectedGroup, groups };
  },

  methods: {
    // setIndex(index) {
    //   console.log(index);
    //   this.selectedGroupIndex = index;
    // },
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

      // this.finalRating = this.computeRating(this.totalScore);
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
    // setSelectedGroup(event, index) {
    //   this.selectedGroupIndex = index;
    //   console.log(this.selectedGroupIndex);
    //   this.selectedGroup = event.target.value.trim(); // Formatting example
    // },
    async submitIndividualScore() {
      const scoreBody = _.map(
        this.event.individualCriterion,
        (criteria, idx) => {
          return {
            score: this.individualScore[idx],
            event: this.event._id,
            criteria: criteria._id,
            examiner: this.$auth.$state.user.id,
            candidates: this.selectedCandidate,
          };
        }
      );

      console.log(scoreBody);

      // this.finalRating = this.computeRating(this.totalScore);
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
      this.totalGroupScore =
        Number(this.groupScore[0]) +
        Number(this.groupScore[1]) +
        Number(this.groupScore[2]) +
        Number(this.groupScore[3]);
      this.finalGroupRating =
        (this.totalGroupScore /
          (this.event.groupCriterion[0].levels[0].maxScore *
            this.event.groupCriterion.length)) *
        100;
    },
    individualScore: function () {
      // finalIndividualRating;

      console.log(this.totalIndividualScore);
      this.totalIndividualScore =
        Number(this.individualScore[0]) +
        Number(this.individualScore[1]) +
        Number(this.individualScore[2]) +
        Number(this.individualScore[3]) +
        Number(this.individualScore[4]);
      this.finalIndividualRating =
        (this.totalIndividualScore /
          (this.event.individualCriterion[0].levels[0].maxScore *
            this.event.individualCriterion.length)) *
        100;
    },
    selectedGroup: function () {
      this.groups.forEach((element, idx) => {
        if (this.selectedGroup == element._id) {
          this.selectedGroupIndex = idx;
          this.selectedCandidate = this.groups[idx].candidates[0]._id;
        }
      });
    },
  },
};
</script>
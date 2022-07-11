<template>
  <form @submit.prevent="submitform">
    <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-2 gap-y-4">
          <div class="col-span-2">
            <label for="first-name" class="block text-sm font-medium text-black"
              >Content</label
            >
            <input
              type="text"
              name="first-name"
              class="
                mt-1
                focus:ring-primary focus:border-primary
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-dark
                rounded-md
              "
              v-model="criteriaField"
            />
          </div>
          <div class="col-span-2 grid grid-cols-2">
            <div
              v-for="(criteria, idx) in criterion"
              :key="idx"
              class="col-span-2 grid grid-cols-2 gap-y-2 gap-x-4 mt-2"
            >
              <div class="col-span-2 font-medium">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                  >Level</label
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
                    border border-gray-dark
                    bg-white
                    rounded-md
                    shadow-sm
                    focus:outline-none
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    sm:text-sm
                  "
                  v-model="criteria.levels"
                >
                  <option
                    v-for="(level, idx) in levels"
                    :key="idx"
                    :value="level"
                  >
                    {{ level }}
                  </option>
                </select>
              </div>
              <div class="col-span-2">
                <label
                  for="description"
                  class="flex justify-between text-sm text-gray"
                  >Description
                  <div>
                    <button
                      type="button"
                      class="text-red-600"
                      @click="removeCriteria(idx)"
                    >
                      Remove
                    </button>
                  </div></label
                >
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  class="
                    mt-1
                    focus:ring-primary focus:border-primary
                    block
                    w-full
                    h-32
                    max-h-36
                    shadow-sm
                    sm:text-sm
                    border-gray-dark
                    rounded-md
                  "
                  v-model="criteria.description"
                />
              </div>
              <div class="col-span-1">
                <label for="last-name" class="block text-sm text-gray"
                  >Min Score</label
                >
                <input
                  type="number"
                  name="minScore"
                  id="minScore"
                  class="
                    mt-1
                    focus:ring-primary focus:border-primary
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-dark
                    rounded-md
                  "
                  v-model="criteria.minScore"
                />
              </div>
              <div class="col-span-1">
                <label for="last-name" class="block text-sm text-gray"
                  >Max Score</label
                >
                <input
                  type="number"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="
                    mt-1
                    focus:ring-primary focus:border-primary
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-dark
                    rounded-md
                  "
                  v-model="criteria.maxScore"
                />
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <button
              type="button"
              class="
                inline-flex
                justify-center
                py-2
                px-4
                bg-primary
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                hover:bg-lightBlue
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-primary
              "
              @click="addCriteriaField"
            >
              <span class="pr-2">
                <font-awesome-icon icon="plus" />
              </span>
              Add Criteria Field
            </button>
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            bg-primary
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            hover:bg-lightBlue
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-primary
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import * as _ from "lodash";

export default {
  data() {
    return {
      levels: ["Excellent", "Very good", "Satisfactory", "Unsatisfactory"],
      criteriaField: "",
      criterion: [
        {
          criteriaField: "",
          levels: "",
          description: "",
          minScore: "",
          maxScore: "",
          events: [],
        },
      ],
    };
  },
  methods: {
    removeCriteria(index) {
      this.criterion.splice(index, 1);
    },
    addCriteriaField() {
      this.criterion.push({
        criteriaField: "",
        levels: "",
        description: "",
        minScore: "",
        maxScore: "",
        events: [],
      });
    },
    async submitform(event) {
      let criteriaLevelsForm = this.criterion.map((criteria) => {
        return {
          criteriaField: this.criteriaField,
          levels: criteria.levels,
          description: criteria.description,
          minScore: parseInt(criteria.minScore),
          maxScore: parseInt(criteria.maxScore),
        };
      });

      console.log(criteriaLevelsForm);
      if (this.criteriaField == "") {
        this.$toast.show({
          type: "error",
          timeout: 2,
          title: "Erro",
          message: "Please input Content",
          classTimeout: "bg-primary",
        });
      } else {
        let criteriaLevels = await this.$axios.$post(
          "/api/criteria-level/create",
          criteriaLevelsForm
        );

        let newCriteriaField = await this.$axios.$post("/api/criteria/create", {
          criteriaField: this.criteriaField,
        });

        console.log(criteriaLevels);
        console.log(newCriteriaField);
        this.$toast.show({
          type: "success",
          timeout: 2,
          title: "Success",
          message: criteriaLevels.message,
          classTimeout: "bg-primary",
        });
      }
      this.criteriaField = "";
      this.criterion = [
        {
          criteriaField: "",
          levels: "",
          description: "",
          minScore: "",
          maxScore: "",
          events: [],
        },
      ];
    },
  },
};
</script>
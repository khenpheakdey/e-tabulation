<template>
  <div class="h-screen p-4 bg-gray-light rounded-md xl:p-6 xl:rounded-md">
    <div
      class="
        grid
        md:grid-cols-1 md:gap-6 md:gap-x-0
        lg:grid-cols-1
        xl:grid-cols-3
      "
    >
      <div class="md:col-span-1">
        <div class="py-2 px-4 bg-white xl:mr-6 rounded-md shadow-sm">
          <h3 class="text-lg font-medium leading-6 text-primary">
            Edit New Event
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Please input Event Information
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-1 lg:col-span-2">
        <form @submit.prevent="submitform">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-2 gap-y-4">
                <div class="col-span-2">
                  <label
                    for="criteriaField"
                    class="block text-sm font-medium text-black"
                    >Content</label
                  >
                  <input
                    type="text"
                    name="criteriaField"
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
                    v-model="criteria.criteriaField"
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="criteriaField"
                    class="block text-sm font-medium text-black"
                    >Percentage(%)</label
                  >
                  <input
                    type="text"
                    name="criteriaField"
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
                    v-model="criteria.percentage"
                  />
                </div>
                <div class="col-span-2 grid grid-cols-2">
                  <div
                    class="col-span-2 grid grid-cols-2 gap-y-2 gap-x-4 mt-2"
                    v-for="(level, idx) in criteria.levels"
                    :key="idx"
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
                        v-model="level.levels"
                      >
                        <option
                          v-for="(dLevel, idx) in defaultLevels"
                          :key="idx"
                          :value="dLevel"
                        >
                          {{ dLevel }}
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
                        v-model="level.description"
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
                        v-model="level.minScore"
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
                        v-model="level.maxScore"
                      />
                    </div>
                  </div>
                </div>
                <!-- <div class="col-span-2">
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
          </div> -->
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultLevels: [
        "Excellent",
        "Very good",
        "Satisfactory",
        "Unsatisfactory",
      ],
    };
  },

  methods: {
    removeCriteria(index) {
      this.criteria.levels.splice(index, 1);
    },

    submitform() {},
    // addCriteriaField() {
    //   this.criteria.levels.push({
    //     criteriaField: "",
    //     levels: "",
    //     description: "",
    //     minScore: "",
    //     maxScore: "",
    //     events: [],
    //   });
    // },
  },
  async asyncData({ $axios, $config, params }) {
    const slug = params.slug;

    console.log(slug);

    const criteria = await $axios.$get(`/api/criteria/showOne?id=${slug}`);
    console.log(criteria);
    return { criteria };
  },
};
</script>
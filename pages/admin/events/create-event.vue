<template>
  <div class="h-screen p-4 bg-gray-light rounded-xl xl:p-6 xl:rounded-xl">
    <div class="mt-10 sm:mt-0">
      <div
        class="
          grid
          md:grid-cols-1 md:gap-6 md:gap-x-0
          lg:grid-cols-1
          xl:grid-cols-1
        "
      >
        <div class="md:col-span-1">
          <div class="p-4 bg-white rounded-md shadow-sm">
            <h3 class="text-lg font-medium leading-6 text-black">
              Create Event
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
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 lg:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-black"
                      >Event Title</label
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
                      v-model="event.title"
                    />
                  </div>

                  <div class="col-span-6 lg:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-black"
                      >Event Description</label
                    >
                    <input
                      type="text"
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
                      v-model="event.eventStatus"
                    />
                  </div>

                  <div class="col-span-6 lg:col-span-3">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-black"
                      >Event Date</label
                    >
                    <input
                      type="date"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
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
                      v-model="event.eventDate"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-4">
                    <fieldset>
                      <legend
                        class="contents text-base font-medium text-gray-900"
                      >
                        Event Status
                      </legend>
                      <p class="text-sm text-gray-500">Set your event status</p>
                      <div class="mt-4 space-y-4">
                        <div class="flex items-center">
                          <input
                            id="active"
                            name="active"
                            type="radio"
                            value="true"
                            class="
                              focus:ring-indigo-500
                              h-4
                              w-4
                              text-indigo-600
                              border-gray-300
                            "
                            v-model="event.active"
                          />
                          <label
                            for="active"
                            class="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Active
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="inactive"
                            name="inactive"
                            type="radio"
                            value="false"
                            class="
                              focus:ring-indigo-500
                              h-4
                              w-4
                              text-indigo-600
                              border-gray-300
                            "
                            v-model="event.active"
                          />
                          <label
                            for="inactive"
                            class="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Inactive
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="col-span-6">
                    <fieldset>
                      <legend class="sr-only">Assign Events</legend>
                      <div
                        class="text-base text-sm font-medium text-black"
                        aria-hidden="true"
                      >
                        Assign Examiners
                      </div>
                      <div
                        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
                      >
                        <div
                          class="
                            mt-4
                            space-y-4
                            col-span-2
                            md:col-span-1
                            lg:col-span-1
                          "
                          v-for="(examiner, idx) in examiners"
                          :key="idx"
                        >
                          <div class="flex">
                            <div class="flex items-center h-5">
                              <input
                                :id="examiner._id"
                                :name="examiner.username"
                                type="checkbox"
                                class="
                                  focus:ring-primary
                                  h-4
                                  w-4
                                  text-primary
                                  border-gray-dark
                                  rounded
                                "
                                v-model="event.examiners"
                                :value="examiner"
                              />
                            </div>
                            <div class="ml-3 text-sm">
                              <label
                                :for="examiner.username"
                                class="font-medium text-black"
                                >{{ examiner.username }}</label
                              >
                              <p class="text-gray-dark">
                                {{ examiner.email }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="col-span-6">
                    <fieldset>
                      <legend class="sr-only">Assign Criterion</legend>
                      <div
                        class="text-base text-sm font-medium text-black"
                        aria-hidden="true"
                      >
                        Assign Criterion
                      </div>
                      <div
                        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
                      >
                        <div
                          class="
                            mt-4
                            space-y-4
                            col-span-2
                            md:col-span-1
                            lg:col-span-1
                          "
                          v-for="(criteria, idx) in criterion"
                          :key="idx"
                        >
                          <div class="flex">
                            <div class="flex items-center h-5">
                              <input
                                :id="criteria._id"
                                :name="criteria.criteriaField"
                                type="checkbox"
                                class="
                                  focus:ring-primary
                                  h-4
                                  w-4
                                  text-primary
                                  border-gray-dark
                                  rounded
                                "
                                v-model="event.criterion"
                                :value="criteria"
                              />
                            </div>
                            <div class="ml-3 text-sm">
                              <label
                                :for="criteria.criteriaField"
                                class="font-medium text-black"
                                >{{ criteria.criteriaField }}</label
                              >
                              <p class="text-gray-dark">
                                {{ criteria.description }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          v-for="(addCriteria, idx) in addCriterion"
                          :key="idx"
                          class="col-span-3 mt-4"
                        >
                          <div
                            class="
                              text-base text-sm
                              font-medium
                              text-black
                              flex
                            "
                            aria-hidden="true"
                          >
                            Create Criterion here
                            <button
                              type="button"
                              class="text-red-600"
                              @click="removeCriteriaField(idx)"
                            >
                              Remove
                            </button>
                          </div>
                          <CriteriaForm class="mt-4" />
                        </div>
                      </div>
                    </fieldset>
                    <div class="mt-6">
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
                        @click="addNewCriterion"
                      >
                        <span class="pr-2">
                          <font-awesome-icon icon="plus" />
                        </span>
                        Add New Criteria
                      </button>
                    </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // newCriterion: [
      //   {
      //     criteriaField: "",
      //     levels: ["excellent", "very good", "satisfactory", "unsatisfactory"],
      //     description: "",
      //     minScore: "",
      //     maxScore: "",
      //     events: [],
      //   },
      // ],
      addCriterion: [],
      event: {
        title: "",
        eventStatus: "",
        eventDate: "",
        active: true,
        examiners: [],
        criterion: [],
      },
    };
  },

  async asyncData({ $axios, $config }) {
    const examiners = await $axios.$get(`api/user/getExaminers`);
    const criterion = await $axios.$get(`api/criteria/show`);

    console.log(criterion);

    return { examiners, criterion };
  },

  methods: {
    addNewCriterion() {
      this.addCriterion.push("okay");
    },
    removeCriteriaField(index) {
      this.addCriterion.splice(index, 1);
    },
    async submitform(event) {
      await this.$axios
        .$post("api/event/create", {
          title: this.event.title,
          eventStatus: this.event.eventStatus,
          eventDate: this.event.eventDate,
          active: this.event.active,
          examiners: this.event.examiners,
          criterion: this.event.criterion,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push("/event");
    },
  },
};
</script>
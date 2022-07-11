<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="grid md:grid-cols-1 md:gap-6 lg:grid-cols-1 xl:grid-cols-3">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-black">
              Create New Event
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
                  <div class="col-span-6 sm:col-span-3">
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

                  <div class="col-span-6 sm:col-span-3">
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

                  <div class="col-span-6 sm:col-span-4">
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
      event: {
        title: "",
        eventStatus: "",
        eventDate: "",
        active: true,
        examiners: [],
      },
      //   examiner: {
      //     first_name: "",
      //     last_name: "",
      //     username: "",
      //     email: "",
      //     password: "",
      //     assigned_events: [
      //       {
      //         title: "Final Defense 1",
      //         desc: "Get notified when someones posts a comment on a posting.",
      //       },
      //     ],
      //   },
      //   examiners: [
      //     {
      //       _id: "Final Defense 2",
      //       desc: "Get notified when someones posts a comment on a posting.",
      //     },
      //     {
      //       title: "Final Defense 1",
      //       desc: "Get notified when someones posts a comment on a posting.",
      //     },
      //     {
      //       title: "Final Defense 3",
      //       desc: "Get notified when someones posts a comment on a posting.",
      //     },
      //     {
      //       title: "Final Defense 4",
      //       desc: "Get notified when someones posts a comment on a posting.",
      //     },
      //     {
      //       title: "Final Defense 5",
      //       desc: "Get notified when someones posts a comment on a posting.",
      //     },
      //     {
      //       title: "Final Defense 6",
      //       desc: "Get notified when someones posts a comment on a posting.",
      //     },
      //   ],
      //   events: [
      //     {
      //       title: "Final Defense 2",
      //       desc: "Get notified when someones posts a comment on a posting.",
      //     },
      //     {
      //       title: "Final Defense 1",
      //       desc: "Get notified when someones posts a comment on a posting.",
      //     },
      //   ],
    };
  },

  async asyncData({ $axios, $config }) {
    const examiners = await $axios.$get(`api/user/getExaminers`);
    return { examiners };
  },

  methods: {
    submitform(event) {
      console.log(event);

      this.$router.push("/event");
    },
  },
};
</script>
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
            Edit Candidate
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
                    >Firstname</label
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
                    v-model="candidate.firstName"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-black"
                    >Lastname</label
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
                    v-model="candidate.lastName"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-black"
                    >Email</label
                  >
                  <input
                    type="email"
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
                    v-model="candidate.email"
                  />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <fieldset>
                    <legend
                      class="contents text-base font-medium text-gray-900"
                    >
                      Candidate Status
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
                          v-model="candidate.active"
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
                          v-model="candidate.active"
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
                  <!-- <fieldset>
                      <legend class="sr-only">Assign Events</legend>
                      <div
                        class="text-base text-sm font-medium text-black"
                        aria-hidden="true"
                      >
                        Assign Events
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
                          v-for="(judge, idx) in judges"
                          :key="idx"
                        >
                          <div class="flex">
                            <div class="flex items-center h-5">
                              <input
                                :id="judge._id"
                                :name="judge.username"
                                type="checkbox"
                                class="
                                  focus:ring-primary
                                  h-4
                                  w-4
                                  text-primary
                                  border-gray-dark
                                  rounded
                                "
                                v-model="event.judges"
                                :value="judge"
                              />
                            </div>
                            <div class="ml-3 text-sm">
                              <label
                                :for="judge.username"
                                class="font-medium text-black"
                                >{{ judge.username }}</label
                              >
                              <p class="text-gray-dark">
                                {{ judge.email }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset> -->
                </div>
                <div class="col-span-6">
                  <fieldset>
                    <legend class="sr-only">Assign Events</legend>
                    <div
                      class="text-base text-sm font-medium text-black"
                      aria-hidden="true"
                    >
                      Assign Events
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                      <div
                        class="
                          mt-4
                          space-y-4
                          col-span-2
                          md:col-span-1
                          lg:col-span-1
                        "
                        v-for="(event, idx) in events.data"
                        :key="idx"
                      >
                        <div class="flex">
                          <div class="flex items-center h-5">
                            <input
                              :id="event._id"
                              :name="event.title"
                              type="checkbox"
                              class="
                                focus:ring-primary
                                h-4
                                w-4
                                text-primary
                                border-gray-dark
                                rounded
                              "
                              v-model="candidate.events"
                              :value="event"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              :for="event.title"
                              class="font-medium text-black"
                              >{{ event.title }}</label
                            >
                            <p class="text-gray-dark">
                              {{ event._id }}
                            </p>
                          </div>
                          <!-- <div class="ml-3 text-sm">
                              <label
                                :for="event.criteriaField"
                                class="font-medium text-black"
                                >{{ criteria.criteriaField }}</label
                              >
                              <p class="text-gray-dark">
                                {{ criteria._id }}
                              </p>
                            </div> -->
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
</template>

<script>
export default {
  data() {
    return {
      //   contestant: {},
    };
  },
  async asyncData({ $axios, $config, params }) {
    const slug = params.slug;

    const events = await $axios.$get("/api/event/all");
    const candidate = await $axios.$get(`api/candidate/showOne?id=${slug}`);
    console.log(events.data[0]);
    console.log(candidate.events);

    return { candidate, events, slug };
  },

  methods: {
    async submitform() {
      await this.$axios
        .$put(`api/candidate/update?id=${this.slug}`, {
          email: this.candidate.email,
          firstName: this.candidate.firstName,
          lastName: this.candidate.lastName,
          active: this.candidate.active,
          events: this.candidate.events,
        })
        .then((result) => {
          console.log(result);
          this.$toast.show({
            type: "success",
            timeout: 2,
            title: "Success",
            message: result.message,
            classTimeout: "bg-primary",
          });
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push("/admin/candidates");
    },
  },
};
</script>
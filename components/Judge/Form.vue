<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-black">
              Examiner Information
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Use this information to login.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-black"
                      >First name</label
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
                      v-model="examiner.first_name"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-black"
                      >Last name</label
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
                      v-model="examiner.last_name"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-black"
                      >Email address</label
                    >
                    <input
                      type="text"
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
                      v-model="examiner.email"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="username"
                      class="block text-sm font-medium text-black"
                      >Username</label
                    >
                    <input
                      type="text"
                      name="username"
                      id="username"
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
                      v-model="examiner.username"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="password"
                      class="block text-sm font-medium text-black"
                      >Password</label
                    >
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autocomplete="password"
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
                      v-model="examiner.password"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <fieldset>
                      <legend class="sr-only">Assign Events</legend>
                      <div
                        class="text-base text-sm font-medium text-black"
                        aria-hidden="true"
                      >
                        Assign Events
                      </div>
                      <div
                        class="mt-4 space-y-4"
                        v-for="(event, key) in events"
                        :key="key"
                      >
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              :id="key"
                              :name="event"
                              type="checkbox"
                              class="
                                focus:ring-primary
                                h-4
                                w-4
                                text-primary
                                border-gray-dark
                                rounded
                              "
                              v-model="examiner.assigned_events"
                              :value="event"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              :for="event.title"
                              class="font-medium text-black"
                              >{{ event.title }}</label
                            >
                            <p class="text-gray-500">
                              {{ event.desc }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  :onclick="submitform(examiner)"
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
      examiner: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        assigned_events: [
          {
            title: "Final Defense 1",
            desc: "Get notified when someones posts a comment on a posting.",
          },
        ],
      },
      events: [
        {
          title: "Final Defense 2",
          desc: "Get notified when someones posts a comment on a posting.",
        },
        {
          title: "Final Defense 1",
          desc: "Get notified when someones posts a comment on a posting.",
        },
      ],
    };
  },

  methods: {
    submitform(examiner) {
      console.log(examiner);
      // this.$router.push("/judges");
    },
  },
};
</script>
<template>
  <div class="h-screen p-4 bg-gray-light rounded-xl xl:p-6 xl:rounded-xl">
    <div class="mt-10 sm:mt-0">
      <div class="grid md:grid-cols-1 md:gap-6 lg:grid-cols-1 xl:grid-cols-3">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-black">
              Add Examiner
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Please input Examiner Information
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
                      >Username</label
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
                      v-model="examiner.username"
                    />
                  </div>

                  <!-- <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-black"
                    ></label>
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
                      v-model="judge.username"
                    />
                  </div> -->

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
                      v-model="examiner.email"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-black"
                      >Password</label
                    >
                    <input
                      v-if="showPassword"
                      type="text"
                      name="password"
                      id="password"
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
                    <input
                      v-else
                      type="password"
                      name="password"
                      id="password"
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
                    <button
                      type="button"
                      class="
                        mt-3
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
                        hover:bg-blue-light
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-primary
                      "
                      @click="
                        () => {
                          !showPassword;
                        }
                      "
                    >
                      Auto Generate
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
                  Submit
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
      showPassword: false,
      examiner: {
        username: "",
        email: "",
        password: "",
        roles: ["examiner"],
      },
    };
  },
  async asyncData({ $axios, $config }) {
    // const  = await $axios.$get(`api/user/getJudges`);
    // const criterion = await $axios.$get(`api/criteria/show`);
    // console.log(criterion);
    // return { judges, criterion };
  },

  methods: {
    generatePassword() {
      var chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passwordLength = 12;
      var password = "";
      for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }

      this.examiner.password = password;
    },

    async submitform() {
      console.log(this.examiner);
      await this.$axios
        .$post("api/auth/register", {
          username: this.examiner.username,
          email: this.examiner.email,
          password: this.examiner.password,
          roles: this.examiner.roles,
        })
        .then((result) => {
          console.log(result);
          his.$toast.show({
            type: "success",
            timeout: 2,
            title: "Success",
            message: "Examiner added succesfully!",
            classTimeout: "bg-primary",
          });
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push("/admin/examiners");
    },
  },
};
</script>
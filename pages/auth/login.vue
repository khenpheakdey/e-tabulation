<template>
  <div
    class="wrapper absolute w-full h-full max-w-full max-h-full overflow-x-auto"
  >
    <div
      class="
        h-full
        w-full
        flex flex-col
        items-center
        justify-between
        py-12
        px-4
        sm:px-6
        lg:px-8
        bg-primary
      "
    >
      <NuxtLink to="/"
        ><div class="w-16 h-16 md:w-24 md:h-24"><WhiteLogo /></div
      ></NuxtLink>
      <main>
        <div
          class="
            max-w-md
            w-full
            h-full
            space-y-8
            bg-white
            py-8
            px-8
            my-10
            shadow-md
            rounded-md
          "
        >
          <div>
            <h2
              class="
                mt-6
                text-center text-3xl
                font-extrabold
                text-gray-900
                font-medium
                text-center
              "
            >
              Welcome to eTabulation
            </h2>
          </div>
          <br />
          <form class="space-y-6" @submit.prevent="login">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div class="my-5 text-sm">
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
                  v-model="loginData.username"
                />
              </div>
              <div class="my-5 text-sm">
                <label
                  for="password"
                  id="password"
                  class="block text-sm font-medium text-black"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="
                    mt-2
                    focus:ring-primary focus:border-primary
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-dark
                    rounded-md
                  "
                  v-model="loginData.password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="
                  group
                  relative
                  w-full
                  flex
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
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- <LockClosedIcon
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  /> -->
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </main>
      <div class="text-xs text-white font-light opacity-75 my-5">
        ©2022 eTabulation, All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import WhiteLogo from "~/static/icons/WhiteLogo.vue";

export default {
  middleware: "guest",
  layout: "guest",
  data() {
    return {
      loginData: {
        username: "admin",
        password: "admin123",
      },
    };
  },
  methods: {
    async login() {
      try {
        this.$toast.show("Logging in...");
        await this.$auth
          .loginWith("local", {
            data: this.loginData,
          })
          .then(async (response) => {
            console.log(response.data);
            const auth = {
              accessToken: response.data.accessToken,
            };
            await this.$auth.setUser(response.data);
            await this.$auth.setUserToken(response.data.accessToken);
            this.$toast.show({
              type: "success",
              timeout: 2,
              title: "Success",
              message: "This is a successful toast",
              classTimeout: "bg-primary",
            });
            this.$router.push("/");
          });
      } catch (err) {
        this.$toast.show({
          type: "error",
          message: "Error while authenticating",
        });
      }
    },
  },
  components: { WhiteLogo },
};
</script>
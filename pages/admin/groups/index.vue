<template>
  <div class="h-screen p-4 bg-gray-light rounded-md xl:p-6 xl:rounded-md">
    <div
      class="
        flex
        justify-between
        items-center
        py-2
        px-4
        bg-white
        rounded-md
        mb-4
        shadow-sm
      "
    >
      <div class="flex flex-col">
        <div class="font-bold text-xl">Groups</div>
        <div class="hidden mt-2 text-sm text-gray md:block">
          A list of group
        </div>
      </div>
      <nuxt-link
        to="/admin/events/create-event"
        class="
          w-32
          h-10
          flex
          justify-center
          items-center
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
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        "
      >
        <span class="pr-2">
          <font-awesome-icon icon="plus" />
        </span>
        Add Group
      </nuxt-link>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-md">
      <table class="w-full text-sm text-left text-gray">
        <thead class="text-xs text-white uppercase bg-primary">
          <tr>
            <th scope="col" class="px-6 py-3">Group Name</th>
            <th scope="col" class="px-6 py-3">Group Member</th>
            <th scope="col" class="px-6 py-3">Assigned Events</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b border-gray-light hover:bg-gray-thin"
            v-for="(group, idx) in groups"
            :key="idx"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ group.groupName }}
            </th>
            <td class="px-6 py-4">
              <div
                class="flex flex-col"
                v-for="(candidate, idx) in group.candidates"
                :key="idx"
              >
                <li>{{ candidate.firstName + " " + candidate.lastName }}</li>
              </div>
            </td>
            <td class="px-6 py-4">
              <div
                class="flex flex-col"
                v-for="event in group.events"
                :key="event._id"
              >
                <li>{{ event.title }}</li>
              </div>
            </td>
            <td class="px-6 py-4 text-right">
              <!-- <button
                class="
                  block
                  w-full
                  md:w-auto
                  text-white
                  bg-blue-700
                  hover:bg-blue-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  dark:bg-blue-600
                  dark:hover:bg-blue-700
                  dark:focus:ring-blue-800
                "
                type="button"
                data-modal-toggle="extralarge-modal"
                @click="toggleModal"
              >
                Edit
              </button> -->
              <nuxt-link
                :to="`/admin/groups/${group._id}`"
                class="font-medium text-primary hover:underline"
                >Edit</nuxt-link
              >
              <button
                @click="deleteGroup(group._id)"
                class="font-medium text-red-600 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  async asyncData({ $axios, $config }) {
    const groups = await $axios.$get(`api/group/get`);
    return { groups };
  },
  methods: {
    async deleteGroup(id) {
      await this.$axios
        .delete(`/api/group/delete?id=${id}`)
        .then((response) => {
          console.log(response);
          this.$toast.show({
            type: "success",
            timeout: 2,
            title: "Success",
            message: response.data.message,
            classTimeout: "bg-primary",
          });
          this.$nuxt.refresh();
        });
    },
  },
};
</script>
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
        <div class="font-bold text-xl">Candidate</div>
        <div class="hidden mt-2 text-sm text-gray md:block">
          A list of candidate
        </div>
      </div>
      <nuxt-link
        to="/admin/candidates/create-candidate"
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
        Candidate
      </nuxt-link>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-md">
      <table class="w-full text-sm text-left text-gray">
        <thead class="text-xs text-white uppercase bg-primary">
          <tr>
            <th scope="col" class="px-6 py-3">Fullname</th>
            <th scope="col" class="px-6 py-3">Description</th>
            <th scope="col" class="px-6 py-3">Gender</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Events</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b border-gray-light hover:bg-gray-thin"
            v-for="(candidate, idx) in candidates.data"
            :key="idx"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ candidate.lastName + " " + candidate.firstName }}
            </th>
            <td class="px-6 py-4">{{ candidate.email }}</td>
            <td class="px-6 py-4">{{ candidate.gender }}</td>
            <td class="px-6 py-4">
              {{ candidate.active ? "Active" : "Inactive" }}
            </td>
            <td class="px-6 py-4">
              <div
                class="flex flex-col"
                v-for="(event, idx) in candidate.events"
                :key="idx"
              >
                <li>{{ event.title }}</li>
              </div>
            </td>

            <!-- <td class="px-6 py-4">
              <div
                class="flex flex-col"
                v-for="(judge, idx) in event.judges"
                :key="idx"
              >
                {{ judge.username }}
              </div>
            </td>
            <td class="px-6 py-4">{{ event.active }}</td>
            <td class="px-6 py-4">{{ event.eventDate }}</td>
            <td class="px-6 py-4 text-right">
              <a href="#" class="font-medium text-primary hover:underline"
                >Edit</a
              >
            </td> -->
            <td class="px-6 py-4 text-right">
              <nuxt-link
                :to="`/admin/candidates/${candidate._id}`"
                class="font-medium text-primary hover:underline"
                >Edit</nuxt-link
              >
              <button
                @click="deleteCandidate(candidate._id)"
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
export default {
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    let candidates = await $axios.get("/api/candidate/get");
    console.log(candidates);
    return { candidates };
  },
  methods: {
    async deleteCandidate(id) {
      await this.$axios
        .delete(`/api/candidate/delete?id=${id}`)
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
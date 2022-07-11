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
        <div class="font-bold text-xl">Criterion</div>
        <div class="hidden mt-2 text-sm text-gray md:block">
          A list of Criteria
        </div>
      </div>
      <nuxt-link
        to="/criterion/create-criteria"
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
        Criteria
      </nuxt-link>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-md">
      <table class="w-full text-sm text-left text-gray">
        <thead class="text-xs text-white uppercase bg-primary">
          <tr>
            <th scope="col" class="px-6 py-3">Content</th>
            <!-- <th scope="col" class="px-6 py-3">
              <table class="text-center align-center">
                <tr class="border-b whitespace-nowrap">
                  Levels
                </tr>
                <tr class="px-6 py-3">
                  <td
                    v-for="(level, idx) in criterion[0].levels"
                    :key="idx"
                    class="border p-2"
                  >
                    {{ level.levels }}
                  </td>
                </tr>
              </table>
            </th> -->
            <th
              scope="col"
              class="px-6 py-3"
              v-for="(level, idx) in criterion[0].levels"
              :key="idx"
            >
              {{ level.levels }}
            </th>

            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b border-gray-light hover:bg-gray-thin"
            v-for="(criteria, idx) in criterion"
            :key="idx"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ criteria.criteriaField }}
            </th>
            <td
              class="px-6 py-4"
              v-for="(level, idx) in criteria.levels"
              :key="idx"
            >
              <tr>
                {{
                  level.minScore + " - " + level.maxScore
                }}
              </tr>
              <tr>
                {{
                  level.description
                }}
              </tr>
            </td>
            <!-- <td class="px-6 py-4">{{ event.active }}</td>
            <td class="px-6 py-4">{{ event.eventDate }}</td> -->
            <!-- <td class="px-6 py-4 text-left">
              <table>
                <thead>
                  <tr v-for="(level, idx) in criteria.levels" :key="idx">
                    <th scope="col">{{ level.levels }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(level, idx) in criteria.levels" :key="idx">
                    <td>{{ level.description }}</td>
                  </tr>
                </tbody>
              </table>
            </td> -->
            <td class="px-6 py-4 text-right">
              <nuxt-link
                :to="`/criterion/${criteria._id}`"
                class="font-medium text-primary hover:underline"
                >Edit</nuxt-link
              >
              <a href="#" class="font-medium text-red-600 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config }) {
    const criterion = await $axios.$get(`/api/criteria/show`);
    return { criterion };
  },
};
</script>
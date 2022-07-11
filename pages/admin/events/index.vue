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
        <div class="font-bold text-xl">Events</div>
        <div class="hidden mt-2 text-sm text-gray md:block">
          A list of events
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
        Add Event
      </nuxt-link>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-md">
      <table class="w-full text-sm text-left text-gray">
        <thead class="text-xs text-white uppercase bg-primary">
          <tr>
            <th scope="col" class="px-6 py-3">Event Title</th>
            <th scope="col" class="px-6 py-3">Description</th>
            <th scope="col" class="px-6 py-3">Examiners</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Criterion</th>
            <th scope="col" class="px-6 py-3">DATE</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b border-gray-light hover:bg-gray-thin"
            v-for="(event, idx) in events"
            :key="idx"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ event.title }}
            </th>
            <td class="px-6 py-4">{{ event.eventStatus }}</td>
            <td class="px-6 py-4">
              <div
                class="flex flex-col"
                v-for="(examiner, idx) in event.examiners"
                :key="idx"
              >
                {{ examiner.username }}
              </div>
            </td>
            <td class="px-6 py-4" v-if="event.active">Active</td>
            <td v-else>Inactive</td>
            <td class="px-6 py-4">
              <div
                class="flex flex-col"
                v-for="(criteria, idx) in event.criterion"
                :key="idx"
              >
                {{ criteria.criteriaField }}
              </div>
            </td>
            <td class="px-6 py-4">{{ convertDate(event.eventDate) }}</td>
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
                :to="`/admin/events/${event._id}`"
                class="font-medium text-primary hover:underline"
                >Edit</nuxt-link
              >
              <button @click="deleteEvent(event._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <nav class="relative inline-flex rounded-md shadow-sm space-x-2 p-2">
        <ul class="inline-flex items-center">
          <li
            :class="{ disabled: paginator.currentPage === 0 }"
            class="
              bg-white
              border-gray
              text-gray-500
              hover:bg-gray-50
              relative
              inline-flex
              items-center
              px-2
              py-2
              border
              text-sm
              font-medium
              rounded-md
            "
          >
            <nuxt-link
              :to="{ query: { page: paginator.currentPage - 1 } }"
              class="mx-2"
              ><span class="sr-only">Previous</span>
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path></svg
            ></nuxt-link>
          </li>
          <li
            v-for="page in paginator.totalPages"
            :key="page"
            :class="paginator.currentPage === page"
            class="
              bg-white
              border-gray
              text-gray-500
              hover:bg-gray-50
              relative
              inline-flex
              items-center
              px-2
              py-2
              border
              text-sm
              font-medium
              mx-1
              rounded-md
            "
          >
            <nuxt-link :to="{ query: { page: page - 1 } }" class="mx-2">{{
              page
            }}</nuxt-link>
          </li>
          <li
            :class="{
              disabled: !paginator.hasNextPage,
            }"
            class="page-item next-item"
          >
            <nuxt-link
              :class="{ disabled: paginator.hasNextPage }"
              :to="{
                query: {
                  page: paginator.hasNextPage
                    ? paginator.currentPage
                    : paginator.currentPage + 0,
                },
              }"
              class="
                bg-white
                border-gray
                text-gray-500
                hover:bg-gray-50
                relative
                inline-flex
                items-center
                px-2
                mx-2
                py-2
                border
                text-sm
                rounded-md
                font-medium
              "
              >Next</nuxt-link
            >
          </li>
        </ul> -->
      <!-- <ul>
          <li>1</li>
        </ul> -->
      <!-- </nav> -->
      <!-- <Modal v-show="showModal" @close-modal="showModal = false" /> -->
      <div
        class="
          hidden
          sm:flex-1 sm:flex sm:items-center sm:justify-between
          px-3
          py-2
        "
      >
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ paginator.currentPage }}</span>
            to
            <span class="font-medium">{{ paginator.totalPages }}</span>
            of
            <span class="font-medium">{{ paginator.totalItems }}</span>
            results
          </p>
        </div>
        <div>
          <nav
            class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <nuxt-link
              :to="{ query: { page: paginator.currentPage - 1 } }"
              class="
                relative
                inline-flex
                items-center
                px-2
                py-2
                rounded-l-md
                border border-gray-300
                bg-white
                text-sm
                font-medium
                text-gray-500
                hover:bg-gray-50
              "
            >
              <span class="sr-only">Previous</span>

              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </nuxt-link>

            <nuxt-link
              v-for="page in paginator.totalPages"
              :key="page"
              :to="{ query: { page: page - 1 } }"
              :class="paginator.currentPage === page"
              aria-current="page"
              class="
                z-10
                bg-indigo-50
                border-indigo-500
                text-indigo-600
                relative
                inline-flex
                items-center
                px-4
                py-2
                border
                text-sm
                font-medium
              "
            >
              {{ page }}
            </nuxt-link>

            <nuxt-link
              :class="{ disabled: !paginator.hasNextPage }"
              :to="{
                query: {
                  page: paginator.currentPage,
                },
              }"
              class="
                relative
                inline-flex
                items-center
                px-2
                py-2
                rounded-r-md
                border border-gray-300
                bg-white
                text-sm
                font-medium
                text-gray-500
                hover:bg-gray-50
              "
            >
              <span class="sr-only">Next</span>
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  // middleware: "authenticated",
  data() {
    return {
      openModal: false,
      paginator: {},
      events: [],
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      console.log(this.openModal);
      this.showModal = true;
    },
    convertDate(date) {
      return moment(date).utc().format("YYYY-MM-DD HH:mm");
    },

    async deleteEvent(id) {
      await this.$axios
        .delete(`/api/event/delete?id=${id}`)
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
  watch: {
    "$route.query.page": {
      immediate: true,
      handler(page) {
        page = parseInt(page) || 0;
        if (page !== this.paginator.currentPage) {
          this.$axios
            .get(`/api/event/show?page=${page}&size=${5}`)
            .then((response) => response.data)
            .then(({ data, paginator }) => {
              this.events = data;
              this.paginator = paginator;
            });
        }
      },
    },
  },
};
</script>
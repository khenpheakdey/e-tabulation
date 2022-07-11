<template>
  <div class="h-screen p-4 bg-gray-light rounded-md xl:p-6 xl:rounded-md">
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
            Create Criteria/Rubric
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Please input Rubric Information
          </p>
        </div>
      </div>
      <CriteriaForm />
    </div>
  </div>
</template>

<script>
import * as _ from "lodash";

export default {
  data() {
    return {
      criteriaField: "",
      criterion: [
        {
          criteriaField: "",
          levels: "excellent",
          description: "",
          minScore: "",
          maxScore: "",
          events: [],
        },
      ],
    };
  },
  async asyncData({ $axios, $config }) {},
  methods: {
    removeCriteria(index) {
      this.criterion.splice(index, 1);
    },
    addCriteriaField() {
      this.criterion.push({
        criteriaField: "",
        levels: "",
        description: "",
        minScore: "",
        maxScore: "",
        events: [],
      });
    },
    async submitform(event) {
      let newRubric = this.criterion.map((criteria) => {
        return {
          criteriaField: this.criteriaField,
          levels: criteria.levels,
          description: criteria.description,
          minScore: parseInt(criteria.minScore),
          maxScore: parseInt(criteria.maxScore),
        };
      });

      console.log(newRubric);
      // let response = await this.$axios.$post(
      //   "api/criteria-level/create",
      //   newRubric
      // );
      if (this.criteriaField == "") {
        this.$toast.show({
          type: "error",
          timeout: 2,
          title: "Erro",
          message: "Error occured",
          classTimeout: "bg-primary",
        });
      } else {
        let criteria = await this.$axios.$post("/api/criteria/create", {
          criteriaField: this.criteriaField,
        });

        this.$toast.show({
          type: "success",
          timeout: 2,
          title: "Success",
          message: criteria.message,
          classTimeout: "bg-primary",
        });
      }

      //reset form
      this.criteriaField = "";
      // this.criterion = [
      //   {
      //     criteriaField: "",
      //     levels: "excellent",
      //     description: "",
      //     minScore: "",
      //     maxScore: "",
      //     events: [],
      //   },
      //   {
      //     criteriaField: "",
      //     levels: "very good",
      //     description: "",
      //     minScore: "",
      //     maxScore: "",
      //     events: [],
      //   },
      //   {
      //     criteriaField: "",
      //     levels: "satisfactory",
      //     description: "",
      //     minScore: "",
      //     maxScore: "",
      //     events: [],
      //   },
      //   {
      //     criteriaField: "",
      //     levels: "unsatisfactory",
      //     description: "",
      //     minScore: "",
      //     maxScore: "",
      //     events: [],
      //   },
      // ];
    },
  },
};
</script>
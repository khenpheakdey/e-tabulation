<template>
  <div v-if="this.$auth.$state.user.roles[0] == 'ROLE_EXAMINER'">
    <sidebar-section>
      <sidebar-item title="Event" to="/examiners">
        <font-awesome-icon icon="list" />
      </sidebar-item>
    </sidebar-section>
  </div>
  <div v-else>
    <sidebar-section name="Dashboard">
      <sidebar-item title="Home" to="/">
        <font-awesome-icon icon="house" />
      </sidebar-item>
    </sidebar-section>
    <sidebar-section name="User">
      <sidebar-item title="Examiners" to="/admin/examiners">
        <font-awesome-icon icon="users" />
      </sidebar-item>
      <sidebar-item title="Candidates" to="/admin/candidates">
        <font-awesome-icon icon="user-group" />
      </sidebar-item>
      <sidebar-item title="Groups" to="/admin/groups">
        <font-awesome-icon icon="users" />
      </sidebar-item>
    </sidebar-section>
    <sidebar-section name="Criterion">
      <sidebar-item title="Criterion" to="/criterion">
        <font-awesome-icon icon="list" />
      </sidebar-item>
      <!-- <sidebar-item title="Create Criteria" to="/criterion/create-criteria">
        <font-awesome-icon icon="note-sticky" />
      </sidebar-item> -->
    </sidebar-section>

    <sidebar-section name="Events">
      <sidebar-item title="Events" to="/admin/events">
        <font-awesome-icon icon="list" />
      </sidebar-item>
    </sidebar-section>
    <sidebar-section name="Reports">
      <!-- <sidebar-item title="Score" to="/reports/score-report">
        <font-awesome-icon icon="star" />
      </sidebar-item> -->
    </sidebar-section>
  </div>
</template>

<script>
import SidebarItem from "./Item.vue";
import SidebarSection from "./Section.vue";

export default {
  name: "SidebarItems",
  components: { SidebarItem, SidebarSection },
};
</script>
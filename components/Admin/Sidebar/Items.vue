<template>
  <div v-if="this.$auth.user.roles[0] == 'ROLE_EXAMINER'">
    <!-- <div v-if="'ROLE_ADMIN' == 'ROLE_EXAMINER'"> -->
    <sidebar-section>
      <sidebar-item title="Event" to="/examiners">
        <font-awesome-icon icon="list" />
      </sidebar-item>
    </sidebar-section>
    <sidebar-section>
      <sidebar-item>
        <font-awesome-icon icon="sign-out" class="text-red-500 pr-4" /><button
          @click="$auth.logout()"
        >
          Logout
        </button></sidebar-item
      >
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
      <sidebar-item title="Criterion" to="/admin/criterion">
        <font-awesome-icon icon="list" />
      </sidebar-item>
    </sidebar-section>

    <sidebar-section name="Events">
      <sidebar-item title="Events" to="/admin/events">
        <font-awesome-icon icon="list" />
      </sidebar-item>
    </sidebar-section>
    <sidebar-section name="Reports">
      <sidebar-item title="Score Reports" to="/admin/reports">
        <font-awesome-icon icon="list" />
      </sidebar-item>
    </sidebar-section>
    <sidebar-section>
      <sidebar-item>
        <font-awesome-icon icon="sign-out" class="text-red-500 pr-4" /><button
          @click="$auth.logout()"
        >
          Logout
        </button></sidebar-item
      >
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
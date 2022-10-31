<template>
  <div class="home">
    <PortalFrame>
      <ul class="home__db-list-item">
        <li
          class="home__db-list-item"
          v-for="db in this.$store.state.databases"
          :key="db"
        >
          {{ db }}
        </li>
      </ul>
      <div class="home__name" @click="clear">{{ name }}</div>
    </PortalFrame>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PortalFrame from "../components/PortalFrame.vue";
import store from "../store/index";

export default defineComponent({
  name: "HomeView",
  components: { PortalFrame },
  store,
  data() {
    return {
      name: "click here ",
    };
  },
  methods: {
    updateName() {
      this.name = this.name + "!";
    },
    clear() {
      this.updateName();
    },
  },
});
</script>

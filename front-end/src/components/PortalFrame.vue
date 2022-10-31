<template>
  <div class="portal-frame">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store/index";

export default defineComponent({
  name: "PortalFrame",
  data() {
    return {
      name: "asd",
    };
  },
  methods: {
    init() {
      store.dispatch("loadDatabases");
    },
  },
  beforeMount() {
    this.init();
  },
});
</script>

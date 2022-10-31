<template>
  <div class="home">
    <div @click="clear">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      name: "asd",
    };
  },
  methods: {
    updateName() {
      this.name = this.name + "123";
    },
    clear() {
      this.updateName();
    },
  },
});
</script>

<template>
  <div class="container">
    <TheHeader :title="huy"></TheHeader>
    <TheSidebar></TheSidebar>
    <TheContent></TheContent>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheSidebar from "./TheSidebar.vue";
import TheContent from "./TheContent.vue";

export default {
  name: "TheContainer",
  components: {
    TheHeader,
    TheSidebar,
    TheContent,
  },
  data() {
    return {
      huy: "12346",
    };
  },
};
</script>

<style scoped>
@import url(../css/main.css);
</style>

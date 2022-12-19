<template>
  <div class="container">
    <TheHeader :title="'Cán bộ, giáo viên'"></TheHeader>
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
    return {};
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>

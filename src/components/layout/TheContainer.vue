<template>
  <div class="container">
    <TheHeader :title="'Cán bộ, giáo viên'"></TheHeader>
    <TheSidebar></TheSidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheSidebar from "./TheSidebar.vue";

export default {
  name: "TheContainer",
  components: {
    TheHeader,
    TheSidebar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>

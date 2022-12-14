<template>
  <div class="container">
    <TheHeader></TheHeader>
    <TheSidebar></TheSidebar>
    <TheContent></TheContent>
  </div>
</template>

<script>
import TheHeader from "/TheHeader.vue";
import TheSidebar from "/TheSidebar.vue";
import TheContent from "/TheContent.vue";

export default {
  name: "TheContainer",
  comments: {
    TheHeader,
    TheSidebar,
    TheContent,
  },
};
</script>

<style scoped>
@import url(../pages/main.css);
</style>

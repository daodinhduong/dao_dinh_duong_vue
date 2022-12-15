<template>
  <div class="container">
    <TheHeader :title="'Cán bộ, giáo viên'"></TheHeader>
    <TheSidebar></TheSidebar>
    <TheContent></TheContent>
    <DialogAdd></DialogAdd>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheSidebar from "./TheSidebar.vue";
import TheContent from "./TheContent.vue";
import DialogAdd from "./DialogAdd.vue";

export default {
  name: "TheContainer",
  components: {
    TheHeader,
    TheSidebar,
    TheContent,
    DialogAdd,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url(../css/main.css);
</style>

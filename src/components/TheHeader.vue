<template>
  <div class="header">
    <div class="header-left">
      <div class="header-title">{{ title }}</div>
      <div class="header-info"></div>
    </div>
    <div class="header-right">
      <div class="header-message"></div>
      <div class="header-user-name">Admin</div>
      <div class="header-show"></div>
      <div class="header-user-avatar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
@import url(../css/layout/header.css);
</style>

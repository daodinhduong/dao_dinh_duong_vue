<template>
  <button class="button">{{ buttonName }}</button>
</template>

<script>
export default {
  props: {
    buttonName: String,
  },
  name: "TheButton",
};
</script>

<style scoped>
@import url(../../css/base/base.css);
</style>

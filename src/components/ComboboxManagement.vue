<template>
  <v-select
    :searchable="false"
    class="style-chooser"
    placeholder="QL kho, phòng"
    v-model="managementSelected"
    label="management"
    :options="managements"
    :reduce="(idManagement) => idManagement.management"
  ></v-select>
</template>
<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "ComboboxManagement",
  watch: {
    managementSelected() {
      this.$emit("selectManagement", this.managementSelected);
    },
  },
  data() {
    return {
      managementSelected: null,
      managements: [
        { id: 1, management: "Toán - Lý" },
        { id: 2, management: "Hóa - Sinh" },
        { id: 3, management: "phòng chung" },
      ],
    };
  },
};
</script>
<style scoped>
@import url(../css/layout/combobox.css);
</style>

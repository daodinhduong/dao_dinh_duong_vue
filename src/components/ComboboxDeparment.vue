<template>
  <v-select
    :clearable="false"
    class="style-chooser"
    placeholder="Tổ bộ môn"
    v-model="deparmentSelected"
    label="department"
    :options="departments"
    :reduce="(idDeparment) => idDeparment.department"
  ></v-select>
</template>
<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "ComboboxDeparment",
  watch: {
    deparmentSelected() {
      this.$emit("selectDeparment", this.deparmentSelected);
    },
  },
  data() {
    return {
      deparmentSelected: null,
      departments: [
        { id: 1, department: "Toán - Lý" },
        { id: 2, department: "Hóa - Sinh" },
        { id: 3, department: "phòng chung" },
      ],
    };
  },
  method: {},
};
</script>
<style scoped>
@import url(../css/layout/combobox.css);
</style>

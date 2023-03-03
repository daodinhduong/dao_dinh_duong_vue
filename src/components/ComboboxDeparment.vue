<template>
  <v-select
    :clearable="false"
    class="style-chooser"
    placeholder="Tổ bộ môn"
    v-model="idSelected"
    label="department"
    :options="departments"
    :reduce="(idDeparment) => idDeparment.id"
  ></v-select>
</template>
<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "ComboboxDeparment",
  data() {
    return {
      departments: [
        { id: 1, department: "Toán - Lý" },
        { id: 2, department: "Hóa - Sinh" },
        { id: 3, department: "phòng chung" },
      ],
    };
  },
};
</script>
<style scoped>
@import url(../css/layout/combobox.css);
</style>

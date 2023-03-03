<template>
  <v-select
    :searchable="false"
    class="style-chooser"
    placeholder="QL kho, phòng"
    v-model="idSelected"
    label="management"
    multiple
    :options="managements"
    :reduce="(idManagement) => idManagement.id"
  ></v-select>
</template>
<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "ComboboxManagement",
  data() {
    return {
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

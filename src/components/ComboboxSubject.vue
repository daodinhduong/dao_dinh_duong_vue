<template>
  <v-select
    class="style-chooser"
    placeholder="QL theo môn"
    v-model="subjectSelected"
    label="subject"
    :options="subjects"
    :reduce="(idNhanVien) => idNhanVien.subject"
    :searchable="false"
  ></v-select>
</template>
<script>
import "vue-select/dist/vue-select.css";
export default {
  name: "ComboboxSubject",
  watch: {
    subjectSelected() {
      this.$emit("selectSubject", this.subjectSelected);
    },
  },
  data() {
    return {
      subjects: [
        { id: 1, subject: "Tất cả" },
        { id: 2, subject: "Toán" },
        { id: 3, subject: "Lý" },
        { id: 4, subject: "Hóa" },
        { id: 5, subject: "Sinh" },
        { id: 6, subject: "Ngữ văn" },
        { id: 7, subject: "Lịch sử" },
      ],
      subjectSelected: null,
    };
  },
};
</script>
<style>
:root {
  --vs-selected-bg: rgba(3, 174, 102, 0.2);
  --vs-dropdown-option--active-bg: rgba(3, 174, 102, 0.2);
  --vs-dropdown-option--active-color: #000000;
  --vs-dropdown-max-height: 169px;
  --vs-dropdown-option-bg: #fff;
  --vs-font-size: 13px;
}
.style-chooser .vs__search {
  border: none;
}
</style>

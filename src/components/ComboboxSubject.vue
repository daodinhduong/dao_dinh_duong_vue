<template>
  <div class="dialog-el-11">
    <div @click="subjectOnClick" class="dialog-el-11-select dialog-input">
      <div value="abc" class="dialog-el-11-select-content">
        <span class="dialog-el-11-select-content-first">QL theo môn</span>
      </div>
      <img src="../assets/Icons/ic_Chevron.png" width="25" height="25" />
    </div>
    <div v-if="showSubject" class="dialog-el-11-list">
      <div class="dialog-el-11-list-item dialog-el-11-list-item-header">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Tất cả</span>
      </div>
      <div class="dialog-el-11-list-item">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Toán</span>
      </div>
      <div class="dialog-el-11-list-item">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Lý</span>
      </div>
      <div class="dialog-el-11-list-item">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Hóa</span>
      </div>
      <div class="dialog-el-11-list-item">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Sinh</span>
      </div>
      <div class="dialog-el-11-list-item">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Ngữ văn</span>
      </div>
      <div class="dialog-el-11-list-item">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Lịch sử</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ComboboxSubject",
  data() {
    return {
      showSubject: false,
    };
  },
  methods: {
    /**
     * Hàm đóng mở combobox Subject
     * Author: DDDuong (19/12/2022)
     */
    subjectOnClick() {
      try {
        this.showSubject = !this.showSubject;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
@import url(../css/layout/combobox.css);
</style>

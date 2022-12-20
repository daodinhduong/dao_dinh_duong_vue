<template>
  <div class="dialog-el-13">
    <div @click="managementOnClick" class="dialog-el-13-select dialog-input">
      <div class="dialog-el-13-select-content">
        <span class="dialog-el-13-select-content-first">QL theo môn</span>
      </div>
      <img src="../assets/Icons/ic_Chevron.png" width="25" height="25" />
    </div>
    <div v-if="showManagement" class="dialog-el-13-list">
      <div class="dialog-el-13-list-item dialog-el-13-list-item-header">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Tất cả</span>
      </div>
      <div class="dialog-el-13-list-item">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Phòng Toán-Lý</span>
      </div>
      <div class="dialog-el-13-list-item">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Phòng Hóa-Sinh</span>
      </div>
      <div class="dialog-el-13-list-item">
        <img
          src="../assets/Icons/ic_Checkbox_Inactive.png"
          width="25"
          height="25"
        />
        <span class="">Kho phòng chung</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ComboboxManagement",
  data() {
    return {
      showManagement: false,
    };
  },
  methods: {
    /**
     * Hàm đóng mở combobox management
     * Author: DDDuong (19/12/2022)
     */
    managementOnClick() {
      try {
        this.showManagement = !this.showManagement;
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

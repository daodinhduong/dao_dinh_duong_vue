<template>
  <div class="dialog-el-9">
    <div @click="deparmentOnClick" class="dialog-el-9-select dialog-input">
      <span class="">Tổ bộ môn</span>
      <img src="../assets/Icons/ic_Chevron.png" width="25" height="25" />
    </div>
    <div v-if="showDeparment" class="dialog-el-9-list">
      <div class="dialog-el-9-list-item">Tổ Toán - Tin</div>
      <div class="dialog-el-9-list-item">Tổ Lý - Hóa</div>
      <div class="dialog-el-9-list-item">Tổ Sinh-Sử-Địa</div>
      <div class="dialog-el-9-list-item">Tổ Anh văn</div>
      <div class="dialog-el-9-list-item">Tổ Ngữ văn</div>
      <div class="dialog-el-9-list-item">Tổ Văn phòng</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ComboboxDeparment",
  data() {
    return {
      showDeparment: false,
    };
  },
  methods: {
    /**
     * Hàm đóng mở combobox deparment
     * Author : DDDuong ( 19/12/2022)
     */
    deparmentOnClick() {
      try {
        this.showDeparment = !this.showDeparment;
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

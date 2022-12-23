<template>
  <div class="dialog-remove-container">
    <div class="dialog-remove">
      <div class="dialog-remove-header">
        <div @click="closeDialogRemove" class="dialog-remove-img"></div>
      </div>
      <div class="dialog-remove-bottom">
        <div class="dialog-remove-content-1">Thông báo</div>
        <div class="dialog-remove-content-2">
          Bạn có chắc chắn muốn xóa Cán bộ giáo viên đang chọn không ?
        </div>

        <div class="dialog-remove-footer">
          <TheButton :buttonName="'Đóng'" class="dialog-button"></TheButton>
          <TheButton
            :buttonName="'Đồng ý'"
            class="dialog-button dialog-button-save"
          ></TheButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheButton from "./base/TheButton.vue";

export default {
  name: "DialogRemove",
  components: {
    TheButton,
  },
  methods: {
    // Tham chiếu đến  hàm closeDialog bên ngoài component cha, thằng con không tự hủy được chính nó
    closeDialogRemove() {
      this.$emit("onClose");
    },
  },
};
</script>
<style scoped>
@import url(../css/layout/dialog_remove.css);
</style>

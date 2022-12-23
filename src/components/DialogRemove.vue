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
          <TheButton
            @click="closeDialogRemove"
            :buttonName="'Đóng'"
            class="dialog-button"
          ></TheButton>
          <TheButton
            @click="deleteOnClick"
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
import axios from "axios";

export default {
  name: "DialogRemove",
  props: {
    employeeId: {
      type: String,
    },
  },
  components: {
    TheButton,
  },
  methods: {
    /**
     * Hàm đóng dialog xóa(Tham chiếu đến  hàm closeDialog bên ngoài component cha, thằng con không tự hủy được chính nó)
     * Author : DDDuong(23/12/2022)
     */
    closeDialogRemove() {
      try {
        this.$emit("onClose");
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm bật thông báo thành công khi xóa thành công
     * Author: DDDuong (23/12/2022)
     */
    openToastSuccess() {
      try {
        this.$emit("openToast");
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm tắt thông báo thành công
     * Author: DDDuong (23/12/2022)
     */
    closeToastSuccess() {
      try {
        this.$emit("closeToast");
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm xóa nhân viên bằng ID
     * Author : DDDuong(23/12/2022)
     */
    deleteOnClick() {
      try {
        axios
          .delete(
            `https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`,
            this.newEmployees
          )
          .then((res) => {
            console.log(res);
            setTimeout(() => {
              document.location.reload();
            }, 2100);
            this.closeDialogRemove();
            this.openToastSuccess();
            setTimeout(this.closeToastSuccess, 2000);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>
<style scoped>
@import url(../css/layout/dialog_remove.css);
</style>

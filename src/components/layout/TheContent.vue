<template>
  <div class="content">
    <div class="content-container">
      <div class="content-header">
        <form class="content-header-search">
          <input
            class="content-header-input"
            type="text"
            placeholder="Nhập họ và tên cán bộ"
          />
          <i class="content-header-search-icon icon"></i>
        </form>
        <div class="content-header-right">
          <TheButton
            class="content-header-add button-green"
            :buttonName="'Thêm'"
            @click="showDialog"
          ></TheButton>

          <TheButton
            class="content-header-export"
            :buttonName="'Xuất khẩu'"
          ></TheButton>
          <TheButton class="content-header-more"></TheButton>
        </div>
      </div>
      <div class="content-body">
        <TheTable @onEdit="editOnClick" @onRemove="removeOnClick"></TheTable>
      </div>
      <div class="content-footer">
        <div class="content-footer-container">
          <div class="content-footer-first-page content-footer-icon"></div>
          <div class="content-footer-pre-page content-footer-icon"></div>
          <div class="content-footer-page">1</div>
          <div class="content-footer-next-page content-footer-icon"></div>
          <div class="content-footer-last-page content-footer-icon"></div>
          <div>1/2 trang</div>
          <div class="totol-teacher">(56 giáo viên)</div>
        </div>
      </div>
    </div>
  </div>
  <DialogAdd
    :employeeId="employeeIdSelected"
    :dialogTitle="dialogTitle"
    v-if="showDetail"
    @onClose="closeDialog"
    @openToast="openToastSuccess"
    @closeToast="closeToastSuccess"
  ></DialogAdd>
  <DialogRemove
    :employeeId="employeeIdSelected"
    v-show="showDialogRemove"
    @onClose="closeDialogRemove"
    @OpenToast="openToastSuccess"
    @closeToast="closeToastSuccess"
  ></DialogRemove>
  <TheSuccessToast
    v-show="showSuccessToast"
    :successMsgs="successToastTitle"
  ></TheSuccessToast>
</template>

<script>
import TheTable from "../TheTable.vue";
import TheButton from "../base/TheButton.vue";
import DialogAdd from "../DialogAdd.vue";
import DialogRemove from "../DialogRemove.vue";
import TheSuccessToast from "../base/ToastSuccessMessage.vue";

export default {
  name: "TheContent",
  components: {
    TheTable,
    TheButton,
    DialogAdd,
    DialogRemove,
    TheSuccessToast,
  },
  data() {
    return {
      showDetail: false,
      employeeIdSelected: null,
      showDialogRemove: false,
      dialogTitle: "",
      showSuccessToast: false,
      successToastTitle: "",
    };
  },
  methods: {
    /**
     *Hàm ấn vào nút xóa hiện ra dialog Remove
     * Author: DDDuong (22/12/2022)
     */
    removeOnClick(item) {
      try {
        //Sửa title toast messeage
        this.successToastTitle = "Xóa cán bộ giáo viên thành công";
        //Hiển thị dialog xóa
        this.showDialogRemove = true;
        this.employeeIdSelected = item._id;
      } catch (error) {
        console.log("error");
      }
    },
    /**
     *Hàm đóng Dialog Remove
     * Author: DDDuong (22/12/2022)
     */
    closeDialogRemove() {
      try {
        this.showDialogRemove = false;
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm truyền dữ liệu vào form sửa nhân vêin
     * Author DDDuong (18/12/2022)
     */
    editOnClick(item) {
      try {
        //Sửa title toast messeage
        this.successToastTitle = "Sửa cán bộ giáo viên thành công";
        // Hiển thị Dialog
        this.showDetail = true;
        this.employeeIdSelected = item._id;
        // Thay đổi title của dialog
        this.dialogTitle = "Sửa hồ sơ Cán bộ, giáo viên";
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm  ấn nút thêm hiện ra dialog
     * AUTHOR: DDDuong (09/12/2022)
     */
    showDialog() {
      try {
        this.successToastTitle = "Thêm hồ sơ Cán bộ, giáo viên thành công";
        this.employeeIdSelected = null;
        this.showDetail = true;
        // Thay đổi title của dialog
        this.dialogTitle = "Thêm hồ sơ Cán bộ, giáo viên";
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm  đóng dialog
     * AUTHOR: DDDuong (09/12/2022)
     */
    closeDialog() {
      try {
        this.showDetail = false;
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm mở thông báo thành công
     * Author: DDDuong (23/12/2022)
     */
    openToastSuccess() {
      try {
        this.showSuccessToast = true;
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm đóng thông báo thành công
     * Author: DDDuong (23/12/2022)
     */
    closeToastSuccess() {
      try {
        this.showSuccessToast = false;
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped>
@import url(../../css/layout/content_footer.css);
@import url(../../css/layout/content.css);
@import url(../../css/layout/table.css);
@import url(../../css/base/base.css);
</style>

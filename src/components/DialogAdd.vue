<template>
  <div class="dialog-container">
    <div class="dialog-add">
      <div class="dialog-add-container">
        <div class="dialog-left">
          <div class="dialog-employee-img">
            <div class="dialog-employee-img-add">Chọn ảnh</div>
          </div>
          <div class="dialog-employee-name">
            {{ newEmployees.EmployeeName }}
          </div>
          <div class="dialog-employee-code">
            {{ newEmployees.EmployeeCode }}
          </div>
        </div>
        <div class="dialog-line"></div>
        <div class="dialog-right">
          <div class="dialog-right-header">
            <div class="dialog-name">{{ dialogTitle }}</div>
            <div class="dialog-close-button" @click="closeDialog"></div>
          </div>
          <div class="dialog-right-body">
            <div class="dialog-el-1">
              <div>Số hiệu cán bộ</div>
              <p class="color-red">*</p>
            </div>
            <div class="dialog-el-2">
              <input
                ref="txtEmployeeCode"
                v-model="newEmployees.EmployeeCode"
                id="txtEmployeeCode"
                class="dialog-input"
                style="width: 100%"
                type="text"
              />
              <div class="dialog-el-2-error dialog-el-right--error">
                Số hiệu cán bộ không được bỏ trống
              </div>
            </div>
            <div class="dialog-el-3 dialog-el__marrgin">
              <div>Họ và tên</div>
              <p class="color-red">*</p>
            </div>
            <div class="dialog-el-0">
              <input
                v-model="newEmployees.EmployeeName"
                id="txtEmployeeName"
                class="dialog-input"
                style="width: 100%"
                type="text"
              />
              <div class="dialog-el-0-error dialog-el-left--error">
                Họ và tên không được bỏ trống
              </div>
            </div>
            <div class="dialog-el-4">Số điện thoại</div>
            <div class="dialog-el-5" style="position: relative">
              <input
                v-model="newEmployees.TelephoneNumber"
                class="dialog-input"
                style="width: 100%"
                type="text"
                id="txtEmployeeMobie"
              />
            </div>
            <div class="dialog-el-6 dialog-el__marrgin">Email</div>
            <input
              v-model="newEmployees.Email"
              class="dialog-el-7 dialog-input"
              type="text"
              id="txtEmployeeEmail"
            />
            <div class="dialog-el-8">Tổ bộ môn</div>
            <ComboboxDeparment></ComboboxDeparment>
            <div class="dialog-el-10 dialog-el__marrgin">QL theo môn</div>
            <ComboboxSubject></ComboboxSubject>
            <div>QL kho, phòng</div>
            <ComboboxManagement class="dialog-el-12"></ComboboxManagement>
          </div>
          <div class="dialog-right-body-checkbox">
            <input type="checkbox" />
            <div class="checkbox-1-content">Trình độ nghiệp vụ QLTB</div>
            <div class="dialog-right-body-checkbox-right">
              <input type="checkbox" />
              <div class="check-box-2-content">Đang làm việc</div>
            </div>
          </div>
          <div class="dialog-right-footer">
            <TheButton
              :buttonName="'Đóng'"
              class="dialog-button dialog-button-close"
              @click="closeDialog"
            ></TheButton>
            <button
              id="dialog-button-save"
              class="dialog-button"
              @click="btnSaveOnClick"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
    <ToastMessage
      v-if="showToastMessage"
      @onClose="closeToastMsg"
      :errorMsgs="errorMsgs"
    ></ToastMessage>
  </div>
</template>

<script>
import ToastMessage from "./base/ToastMessage.vue";
import TheButton from "./base/TheButton.vue";
import ComboboxDeparment from "./ComboboxDeparment.vue";
import ComboboxSubject from "./ComboboxSubject.vue";
import ComboboxManagement from "./ComboboxManagement.vue";

import axios from "axios";
export default {
  name: "DialogAdd",
  components: {
    ToastMessage,
    TheButton,
    ComboboxDeparment,
    ComboboxSubject,
    ComboboxManagement,
  },
  props: {
    employeeId: {
      type: String,
    },
    dialogTitle: {
      type: String,
    },
  },
  created() {
    // Lấy dữ liệu từ sever
    // Kiểm tra xem là thêm mới hay sửa Nếu thêm lấy id ngẫu nhiên từ serve, nếu sửa lấy data theo id nhân viên
    if (this.employeeId) {
      // Lấy data nhân viên theo id để sửa
      axios
        .get(`https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`)
        .then((res) => {
          this.newEmployees = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      // Lấy mã nhân viên mới để tạo nhân viên mới
      axios
        .get("https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then((res) => {
          this.newEmployees.EmployeeCode = res.data;
          // Focus vào ô nhập liệu đàu tiên
          //nextTick() Để khi render xong mới thực hiện lệnh focus tránh lỗi
          this.$nextTick(function () {
            this.$refs.txtEmployeeCode.focus();
          });
        })
        .catch((res) => {
          console.log(res);
        });
    }
  },
  data() {
    return {
      newEmployees: {},
      showToastMessage: false,
      errorMsgs: [],
    };
  },
  methods: {
    // Tham chiếu đến  hàm closeDialog bên ngoài component cha, thằng con không tự hủy được chính nó
    closeDialog() {
      this.$emit("onClose");
    },
    /**
     * Hàm  đóng thông báo lỗi
     * Author: DDDuong (19/12/2022)
     */
    closeToastMsg() {
      try {
        this.showToastMessage = false;
        //clear thông báo lỗi
        this.errorMsgs = [];
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm bật thông báo thành công khi thêm thành công
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
     * Hàm lưu dữ liệu lên database
     * Author: DDDuong (19/12/2022)
     */
    btnSaveOnClick() {
      try {
        //validate dữ liệu
        const isValid = this.validate();
        /**
         * Hàm gọi api lưu dữ liệu
         * Author: DDDuong (19/12/2022)
         */
        if (isValid) {
          // Nếu chưa có id thì thực hiện thêm mới nhân viên
          if (!this.employeeId) {
            this.newEmployees.DepartmentId =
              "142cb08f-7c31-21fa-8e90-67245e8b283e";
            axios
              .post(
                "https://amis.manhnv.net/api/v1/Employees",
                this.newEmployees
              )
              .then((res) => {
                console.log(res);
                setTimeout(() => {
                  document.location.reload();
                }, 2100);
                this.closeDialog();
                this.openToastSuccess();
                setTimeout(this.closeToastSuccess, 2000);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            // Nếu có id rồi thì thực hiện sửa nhân viên

            axios
              .put(
                `https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`,
                this.newEmployees
              )
              .then((res) => {
                console.log(res);
                setTimeout(() => {
                  document.location.reload();
                }, 2100);
                this.closeDialog();
                this.openToastSuccess();
                setTimeout(this.closeToastSuccess, 2000);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm validate dữ liệu
     * Author: DDDuong (19/12/2022)
     */
    validate() {
      try {
        // Mã nhân viên không được phép trống
        if (!this.newEmployees.EmployeeCode) {
          this.errorMsgs.push("Số hiệu cán bộ không được phép để trống");
        }
        // Tên nhân viên không được phép trống
        if (!this.newEmployees.EmployeeName) {
          this.errorMsgs.push("Họ và tên không được phép để trống");
        }
        // Kiểm tra errorMsgs xem có lỗi không thì show ra dialog thông báo lỗi
        if (this.errorMsgs.length > 0) {
          this.showToastMessage = true;
          setTimeout(this.closeToastMsg, 3000);

          return false;
        } else {
          return true;
        }
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped>
@import url(../css/layout/dialog_add.css);
@import url(../css/layout/toast_message.css);
</style>

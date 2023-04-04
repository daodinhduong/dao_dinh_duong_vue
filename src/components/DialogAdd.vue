<template>
  <div class="dialog-container">
    <div class="dialog-add">
      <div class="dialog-add-container">
        <div class="dialog-left">
          <div class="dialog-employee-img">
            <div class="dialog-employee-img-add">Chọn ảnh</div>
          </div>
          <div class="dialog-employee-name">
            {{ newEmployees.name }}
          </div>
          <div class="dialog-employee-code">
            {{ newEmployees.teacherID }}
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
                v-model="newEmployees.teacherID"
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
                v-model="newEmployees.name"
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
                v-model="newEmployees.phone"
                class="dialog-input"
                style="width: 100%"
                type="text"
                id="txtEmployeeMobie"
              />
            </div>
            <div class="dialog-el-6 dialog-el__marrgin">Email</div>
            <input
              v-model="newEmployees.email"
              class="dialog-el-7 dialog-input"
              type="text"
              id="txtEmployeeEmail"
            />
            <div class="dialog-el-8">Tổ bộ môn</div>
            <ComboboxDeparment
              @selectDeparment="getDataFromDeparment"
            ></ComboboxDeparment>
            <div class="dialog-el-10 dialog-el__marrgin">QL theo môn</div>
            <ComboboxSubject
              @selectSubject="getDataFromSubject"
            ></ComboboxSubject>
            <div>QL kho, phòng</div>
            <ComboboxManagement
              @selectManagement="getDataFromManage"
              class="dialog-el-12"
            ></ComboboxManagement>
          </div>
          <div class="dialog-right-body-checkbox">
            <input type="checkbox" ref="QLTB" />
            <div class="checkbox-1-content">Trình độ nghiệp vụ QLTB</div>
            <div class="dialog-right-body-checkbox-right">
              <input type="checkbox" ref="working" />
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
        .get(`http://127.0.0.1:3000/api/v1/teachers/${this.employeeId}`)
        .then((res) => {
          console.log(res);
          this.newEmployees = res.data.data.teacher;
        })
        .catch((err) => {
          console.log(err);
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
    //Hàm lấy dữ liệu từ các combobox
    getDataFromDeparment(deparmentName) {
      this.newEmployees.deparment = deparmentName;
      console.log(this.newEmployees);
    },
    getDataFromSubject(subjectName) {
      this.newEmployees.subjects = subjectName;
    },
    getDataFromManage(manageName) {
      this.newEmployees.roomManage = manageName;
    },
    //Hàm lấy dữ liệu từ checkbox
    getDataFromCheckBox() {
      if (this.$refs.QLTB.checked) {
        this.newEmployees.isTraining = true;
      }
      if (this.$refs.working.checked) {
        this.newEmployees.isWorking = true;
      }
    },
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
        this.getDataFromCheckBox();
        const isValid = this.validate();
        /**
         * Hàm gọi api lưu dữ liệu
         * Author: DDDuong (19/12/2022)
         */
        if (isValid) {
          // Nếu chưa có id thì thực hiện thêm mới nhân viên
          if (!this.employeeId) {
            axios
              .post("http://127.0.0.1:3000/api/v1/teachers", this.newEmployees)
              .then((res) => {
                console.log(res);
                setTimeout(() => {
                  document.location.reload();
                }, 500);
                this.closeDialog();
                this.openToastSuccess();
                setTimeout(this.closeToastSuccess, 500);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            // Nếu có id rồi thì thực hiện sửa nhân viên

            axios
              .patch(
                `http://127.0.0.1:3000/api/v1/teachers/${this.employeeId}`,
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
        if (!this.newEmployees.teacherID) {
          this.errorMsgs.push("Số hiệu cán bộ không được phép để trống");
        }
        // Tên nhân viên không được phép trống
        if (!this.newEmployees.name) {
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

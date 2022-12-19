<template>
  <div class="dialog-container">
    <div class="dialog-add">
      <div class="dialog-add-container">
        <div class="dialog-left">
          <div class="dialog-employee-img">
            <div class="dialog-employee-img-add">Chọn ảnh</div>
          </div>
          <div class="dialog-employee-name">Họ và tên</div>
          <div class="dialog-employee-code">Số hiệu cán bộ</div>
        </div>
        <div class="dialog-line"></div>
        <div class="dialog-right">
          <div class="dialog-right-header">
            <div class="dialog-name">Thêm hồ sơ Cán bộ, giáo viên</div>
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
            <div class="dialog-el-9">
              <div class="dialog-el-9-select dialog-input">
                <span class="">Tổ bộ môn</span>
                <img
                  src="../assets/Icons/ic_Chevron.png"
                  width="25"
                  height="25"
                />
              </div>
              <div class="dialog-el-9-list">
                <div class="dialog-el-9-list-item">Tổ Toán - Tin</div>
                <div class="dialog-el-9-list-item">Tổ Lý - Hóa</div>
                <div class="dialog-el-9-list-item">Tổ Sinh-Sử-Địa</div>
                <div class="dialog-el-9-list-item">Tổ Anh văn</div>
                <div class="dialog-el-9-list-item">Tổ Ngữ văn</div>
                <div class="dialog-el-9-list-item">Tổ Văn phòng</div>
              </div>
            </div>
            <div class="dialog-el-10 dialog-el__marrgin">QL theo môn</div>
            <div class="dialog-el-11">
              <div class="dialog-el-11-select dialog-input">
                <div value="abc" class="dialog-el-11-select-content">
                  <span class="dialog-el-11-select-content-first"
                    >QL theo môn</span
                  >
                </div>
                <img
                  src="../assets/Icons/ic_Chevron.png"
                  width="25"
                  height="25"
                />
              </div>
              <div class="dialog-el-11-list">
                <div
                  class="dialog-el-11-list-item dialog-el-11-list-item-header"
                >
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
            <div class="dialog-el-12">QL kho, phòng</div>
            <div class="dialog-el-13">
              <div class="dialog-el-13-select dialog-input">
                <div class="dialog-el-13-select-content">
                  <span class="dialog-el-13-select-content-first"
                    >QL theo môn</span
                  >
                </div>
                <img
                  src="../assets/Icons/ic_Chevron.png"
                  width="25"
                  height="25"
                />
              </div>
              <div class="dialog-el-13-list">
                <div
                  class="dialog-el-13-list-item dialog-el-13-list-item-header"
                >
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
              @click="closeDialog()"
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
    <ToastMessage></ToastMessage>
  </div>
</template>

<script>
import ToastMessage from "./base/ToastMessage.vue";
import TheButton from "./base/TheButton.vue";
import axios from "axios";
export default {
  name: "DialogAdd",
  components: {
    ToastMessage,
    TheButton,
  },
  props: {
    employeeId: {
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
        .get("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode")
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
    };
  },
  methods: {
    // Tham chiếu đến  hàm closeDialog bên ngoài component cha
    closeDialog() {
      this.$emit("onClose");
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
          if (!this.employeeId) {
            axios
              .post(
                "https://amis.manhnv.net/api/v1/Employees",
                this.newEmployees
              )
              .then((res) => {
                console.log(res);
                alert("them thanh cong");
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            axios
              .put(
                `https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`,
                this.newEmployees
              )
              .then((res) => {
                console.log(res);
                alert("sua thanh cong");
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
        let errorMsgs = [];

        // Mã nhân viên không được phép trống
        if (!this.newEmployees.EmployeeCode) {
          errorMsgs.push("Số hiệu cán bộ không được phép để trống");
        }
        // Tên nhân viên không được phép trống
        if (!this.newEmployees.EmployeeName) {
          errorMsgs.push("Họ và tên không được phép để trống");
        }
        // Kiểm tra errorMsgs xem có lỗi không
        if (errorMsgs.length > 0) {
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

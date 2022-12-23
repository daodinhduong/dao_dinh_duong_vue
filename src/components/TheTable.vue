<template>
  <div class="table-container">
    <table border="1px solid #d5d8e6" class="tbl-border" id="tb-employee-list">
      <thead>
        <tr class="table-header">
          <td class="text-align-center"><input type="checkbox" /></td>
          <td class="text-align-center">Số hiệu cán bộ</td>
          <td class="text-align-center">Họ và tên</td>
          <td class="text-align-center">Số điện thoại</td>
          <td class="text-align-center">Tổ chuyên môn</td>
          <td class="text-align-center">QL theo môn</td>
          <td class="text-align-center">QL kho, phòng</td>
          <td class="text-align-center">Đào tạo QLTB</td>
          <td class="text-align-center">Đang làm việc</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in employees" :key="index">
          <td class="text-align-center"><input type="checkbox" /></td>
          <td class="text-align-center">{{ item.EmployeeCode }}</td>
          <td class="text-align-left">
            <p class="detail-employee">{{ item.EmployeeName }}</p>
          </td>
          <td class="text-align-center">{{ item.TelephoneNumber }}</td>
          <td>{{ item.DepartmentName }}</td>
          <td>{{ item.DepartmentName }}</td>
          <td>{{ item.DepartmentName }}</td>
          <td class="text-align-center">
            <img src="../assets/Icons/ic_Check.png" width="25" height="25" />
          </td>
          <td class="text-align-center">
            <img src="../assets/Icons/ic_Check.png" width="25" height="25" />
          </td>
          <td class="text-align-center">
            <div class="edit">
              <img
                @click="editOnClick(item)"
                src="../assets/Icons/ic_Edit.png"
                width="25"
                height="25"
              />
              <img
                @click="removeOnClick(item)"
                src="../assets/Icons/ic_Remove.png"
                width="25"
                height="25"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TheTable",
  created() {
    // Thực hiện load dữ liệu
    this.loadData();
  },
  methods: {
    // Tham chiếu đến  hàm editOnClick bên ngoài component cha
    editOnClick(item) {
      this.$emit("onEdit", item);
    },
    // Tham chiếu đến  hàm removeOnClick bên ngoài component cha
    removeOnClick(item) {
      this.$emit("onRemove", item);
    },
    /**
     * Hàm gọi API lấy dữ liệu
     * Author DDDuong (18/12/2022)
     */
    loadData() {
      try {
        // Gọi API:
        fetch("https://amis.manhnv.net/api/v1/Employees")
          .then((res) => res.json())
          .then((res) => {
            this.employees = res;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log("error");
      }
    },
  },
  data() {
    return {
      employees: [],
    };
  },
};
</script>

<style scoped>
@import url(../css/layout/table.css);
/* .tbl-border {
  border: 1px solid red;
} */
</style>

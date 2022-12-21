<template>
  <div class="dialog-el-9">
    <div @click="deparmentOnClick" class="dialog-el-9-select dialog-input">
      <span class="">Tổ bộ môn</span>
      <img src="../assets/Icons/ic_Chevron.png" width="25" height="25" />
    </div>
    <div v-if="showDeparment" class="dialog-el-9-list">
      <div
        @click="this.departmentId = department.DepartmentId"
        v-for="(department, index) in departments"
        :key="index"
        class="dialog-el-9-list-item"
      >
        {{ department.DepartmentName }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.loadDepartment();
  },
  name: "ComboboxDeparment",
  data() {
    return {
      showDeparment: false,
      departments: [],
      departmentId: [],
    };
  },
  methods: {
    /**
     *Hàm lấy deparment ID
     Author : DDDuong (22/12/2022)
     */
    getDepartmentId() {
      try {
        console.log(this.departmentId);
      } catch (error) {
        console.log("error");
      }
    },
    /**
     * Hàm gọi API lấy dữ liệu phòng ban
     * Author DDDuong (21/12/2022)
     */
    loadDepartment() {
      try {
        // Gọi API:
        fetch("https://amis.manhnv.net/api/v1/Departments")
          .then((res) => res.json())
          .then((res) => {
            this.departments = res;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log("error");
      }
    },
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

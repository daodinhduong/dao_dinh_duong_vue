<template>
  <div class="table-container">
    <table border="1px solid #d5d8e6" id="tb-employee-list">
      <thead>
        <tr class="table-header">
          <td class="text-align-center"><input type="checkbox" /></td>
          <td class="text-align-center">Số hiệu cán bộ</td>
          <td class="text-align-left">Họ và tên</td>
          <td class="text-align-center">Số điện thoại</td>
          <td>Tổ chuyên môn</td>
          <td>QL theo môn</td>
          <td>QL kho, phòng</td>
          <td class="text-align-center">Đào tạo QLTB</td>
          <td class="text-align-center">Đang làm việc</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-align-center"><input type="checkbox" /></td>
          <td class="text-align-center">|| ""}</td>
          <td class="text-align-left">fg</td>
          <td class="text-align-center">${em""}</td>
          <td>tment || ""}</td>
          <td>tment || ""}</td>
          <td>ment || ""}</td>
          <td class="text-align-center">
            <img src="../assets/Icons/ic_Check.png" width="25" height="25" />
          </td>
          <td class="text-align-center">
            <img src="../assets/Icons/ic_Check.png" width="25" height="25" />
          </td>
          <td class="text-align-center">
            <img
              class="cursor-pointer"
              src="../assets/Icons/ic_Edit.png"
              width="25"
              height="25"
            />
            <img
              class="cursor-pointer"
              src="../assets/Icons/ic_Remove.png"
              width="25"
              height="25"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TheTable",
};
</script>

<style scoped>
@import url(../css/layout/table.css);
</style>

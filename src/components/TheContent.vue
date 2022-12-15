<template>
  <div class="content">
    <div class="content-container">
      <div class="content-header">
        <form class="content-header-search">
          <input class="content-header-input" type="text" />
          <i class="content-header-search-icon icon"></i>
        </form>
        <div class="content-header-right">
          <button
            class="content-header-add button button-default cursor-pointer"
          >
            Thêm
          </button>
          <button class="content-header-export button cursor-pointer">
            Xuất khẩu
          </button>
          <button class="content-header-more button"></button>
        </div>
      </div>
      <div class="content-body">
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
            <tbody></tbody>
          </table>
        </div>
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
</template>

<script>
export default {
  name: "TheContent",
};
</script>

<style scoped>
@import url(../css/layout/content_footer.css);
@import url(../css/layout/content.css);
@import url(../css/layout/table.css);
</style>

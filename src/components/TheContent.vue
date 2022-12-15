<template>
  <div class="content">
    <div class="content-container">
      <div class="content-header">
        <form class="content-header-search">
          <input class="content-header-input" type="text" />
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
        <TheTable></TheTable>
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
import TheTable from "./TheTable.vue";
import TheButton from "./base/TheButton.vue";

export default {
  name: "TheContent",
  components: {
    TheTable,
    TheButton,
  },
  methods: {
    /**
     * Hàm  mở dialog
     * AUTHOR: DDDuong (09/12/2022)
     */
    showDialog() {
      try {
        document.querySelector(".dialog-container").style.display = "flex";
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped>
@import url(../css/layout/content_footer.css);
@import url(../css/layout/content.css);
@import url(../css/layout/table.css);
@import url(../css/base/base.css);
</style>

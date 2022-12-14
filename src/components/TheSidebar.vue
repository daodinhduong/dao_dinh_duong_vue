<template>
  <div class="sidebar">
    <div class="menu">
      <div class="sidebar-item">
        <div
          class="sidebar-img"
          style="background-image: url(../../assets/Icons/ic_IconThietBi.svg)"
        ></div>
        <div class="sidebar-title">Thiết bị</div>
      </div>
      <div class="menu-more"></div>
    </div>
    <div class="sidebar-container">
      <div class="sidebar-item">
        <div
          class="sidebar-img"
          style="background-image: url(../../assets/Icons/ic_TongQuan.svg)"
        ></div>
        <div class="sidebar-title">Tổng quan</div>
      </div>
      <div class="sidebar-item">
        <div
          class="sidebar-img"
          style="background-image: url(../../assets/Icons/ic_ThietBi.svg)"
        ></div>
        <div class="sidebar-title">Thiết bị</div>
      </div>
      <div class="sidebar-item">
        <div
          class="sidebar-img"
          style="background-image: url(../../assets/Icons/ic_MuonTra.svg)"
        ></div>
        <div class="sidebar-title">Mượn trả</div>
      </div>
      <div class="sidebar-item">
        <div
          class="sidebar-img"
          style="background-image: url(../../assets/Icons/ic_BaoCao.svg)"
        ></div>
        <div class="sidebar-title">Báo cáo</div>
      </div>
      <div class="sidebar-item">
        <div
          class="sidebar-img"
          style="background-image: url(../../assets/Icons/ic_HeThong.svg)"
        ></div>
        <div class="sidebar-title">Hệ thống</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
};
</script>

<style scoped>
@import url(../css/layout/sidebar.css);
</style>

<template>
  <div class="sidebar">
    <div class="menu">
      <div class="sidebar-item">
        <div class="sidebar-img img1"></div>
        <div class="sidebar-title">Thiết bị</div>
      </div>
      <div class="menu-more"></div>
    </div>
    <div class="sidebar-container">
      <router-link to="/tongquan" class="sidebar-item">
        <div class="sidebar-img img2"></div>
        <div class="sidebar-title">Tổng quan</div></router-link
      >
      <router-link to="/thietbi" class="sidebar-item">
        <div class="sidebar-img img3"></div>
        <div class="sidebar-title">Thiết bị</div>
      </router-link>
      <router-link to="/muontra" class="sidebar-item">
        <div class="sidebar-img img4"></div>
        <div class="sidebar-title">Mượn trả</div>
      </router-link>
      <div class="sidebar-item">
        <div class="sidebar-img img5"></div>
        <div class="sidebar-title">Báo cáo</div>
      </div>
      <div class="sidebar-item">
        <div class="sidebar-img img6"></div>
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
@import url(../../css/layout/sidebar.css);
a {
  color: #fff;
  text-decoration: none;
}
a.router-link-active {
  color: #0dd469;
  border-left: 3px solid #0dd469;
  background-color: rgba(229, 243, 255, 0.5);
}
</style>

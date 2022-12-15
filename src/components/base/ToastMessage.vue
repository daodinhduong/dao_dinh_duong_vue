<template>
  <div class="toast-message-container">
    <div class="toast-message">
      <div class="toast-message-left">
        <div class="toast-message-img"></div>
        <div class="toast-message-text">
          <div class="toast-message-title">Lỗi</div>
          <div class="toast-message-content"></div>
        </div>
      </div>
      <div class="toast-message-close"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToastMessage",
};
</script>

<style scoped>
@import url(../../css/layout/toast_message.css);
</style>

<template>
  <div class="toast-message-container">
    <div class="toast-message">
      <div class="toast-message-left">
        <div class="toast-message-img"></div>
        <div class="toast-message-text">
          <div class="toast-message-title">Thành Công</div>
          <div class="toast-message-content">
            <div>
              {{ successMsgs }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    successMsgs: {
      type: String,
    },
  },
  name: "ToastSuccessMessage",
  methods: {
    // Tham chiếu đến  hàm closeToastMsg bên ngoài component cha, thằng con không tự hủy được chính nó
    closeToastMsg() {
      this.$emit("onClose");
    },
  },
};
</script>
<style scoped>
@import url(../../css/layout/toast-success-message.css);
</style>

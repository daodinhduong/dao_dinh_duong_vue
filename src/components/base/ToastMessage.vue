<template>
  <div class="toast-message-container">
    <div class="toast-message">
      <div class="toast-message-left">
        <div class="toast-message-img"></div>
        <div class="toast-message-text">
          <div class="toast-message-title">Lỗi</div>
          <div class="toast-message-content">
            <div v-for="(errorMsg, index) in errorMsgs" :key="index">
              {{ errorMsg }}
            </div>
          </div>
        </div>
      </div>
      <div @click="closeToastMsg" class="toast-message-close"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorMsgs: {
      type: Array,
    },
  },
  name: "ToastMessage",
  methods: {
    // Tham chiếu đến  hàm closeToastMsg bên ngoài component cha, thằng con không tự hủy được chính nó
    closeToastMsg() {
      this.$emit("onClose");
    },
  },
};
</script>
<style scoped>
@import url(../../css/layout/toast_message.css);
</style>

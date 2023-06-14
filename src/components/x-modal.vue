<template>
  <transition name="fade">
    <div v-if="visible" class="modal-mask" @click.self="$emit('close')">
      <div class="modal-container">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: Boolean,
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: max-content;
  height: max-content;
  max-height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-close-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.modal-body {
  margin-top: 20px;
  margin-bottom: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

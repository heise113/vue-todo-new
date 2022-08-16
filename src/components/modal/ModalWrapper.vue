<template>

    <div class="wrapper-modal" @mousedown.self="$emit('viewModal')">
      <component
          @viewModal="$emit('viewModal')"
          :contact="contact"
          v-if="dynamic_modals"
          :is='dynamic_modals'
      />
    </div>

</template>

<style scoped lang="scss">

.wrapper-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .7);
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease;
}

.modal-leave-to {
  opacity: 0;
}

</style>

<script>
import { defineAsyncComponent } from "vue";
export default {
  props: {
    modal_name: String,
    contact: Object
  },
  computed: {
    dynamic_modals() {
      return defineAsyncComponent(() => import(`../modal/${this.modal_name}.vue`))
    }
  },
}

</script>


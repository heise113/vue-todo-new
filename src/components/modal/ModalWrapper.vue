<template>

    <div class="wrapper-modal" @mousedown.self="viewModalContent">
      <transition name="m-content-transition">
        <component
            @viewModal="viewModalContent"
            :contact="contact"
            v-if="active_modal_content"
            :is='dynamic_modals'
        />
      </transition>
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
  z-index: 100;
}

.m-content-transition {
  &-enter-from {
    transform: translateY(-200%);
  }
  &-leave-to {
    transform: translateY(200%);
  }
  &-enter-active, &-leave-active {
    transition: all 0.5s ease;
  }
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
  data() {
    return {
      active_modal_content: true
    }
  },
  methods: {
    viewModalContent() {
      this.$emit('viewModal')
      this.active_modal_content = false
    }
  }
}

</script>


<template>
  <transition name="modal">
    <WrapperModal
        v-if="active_modal"
        @viewModal="viewModal"
        :modal_name="modal_name"
    />
  </transition>
  <h1>Todo</h1>
  <button @click="viewModal('MoreTodoModal')">Modal</button>
</template>

<style lang="scss" scoped>

</style>

<script>
import WrapperModal from "@/components/modal/ModalWrapper"


export default {
  components: {
    WrapperModal
  },
  data() {
    return {
      active_modal: false,
      modal_name: '',
    }
  },
  methods: {
    viewModal(modal_name = 'no name') {
      switch (modal_name) {
        case 'MoreTodoModal':
          this.modal_name = modal_name
          break
      }
      this.active_modal === true
          ? this.active_modal = false
          : this.active_modal = true
    }
  }
}

</script>
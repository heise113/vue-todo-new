<template>
  <div class="wrapper-home">
    <transition name="modal">
      <ModalWrapper
          v-if="active_modal"
          @viewModal="viewModal"
          :modal_name="modal_name"
          :contact="selected_contact"
      />
    </transition>
    <transition name="toast-transition">
      <Toast
          class="wrapper-home__toast"
          v-if="toast_success !== null"
          :success="toast_success"
      >
        {{ toast_message }}
      </Toast>
    </transition>
    <div class="wrapper-home__input">
      <transition name="fade-transition" mode="out-in">
        <InputPhone
            @addPhone="goNext"
            v-if="active_input_phone"
            :temp_phone="temp_contact.phone"
        />
        <InputName
            @goBack="goBack"
            @finish="addContact"
            @viewToast="viewToast"
            v-else-if="active_input_name"
            :temp_name="temp_contact.name"
        />
      </transition>
    </div>
    <ContactsList @viewModal="viewModal"/>
  </div>
</template>

<style lang="scss">

.wrapper-home {
  &__toast {
    position: fixed;
    left: 50%;
    margin-top: 50px;
    top: 0;
    transform: translateX(-50%);
  }

  &__input {
    margin: 70px auto;
    width: 395px;
    height: 55px;
  }
}

.fade-transition {
  &-enter-from, &-leave-to {
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: all 0.3s ease;
  }
}

.toast-transition {
  &-enter-from, &-leave-to {
    margin-top: 0px;
    transform: translate(-50%, -100%);
  }

  &-enter-active, &-leave-active {
    transition: all 0.5s ease;
  }
}

</style>

<script>
import InputPhone from "@/components/InputPhone"
import InputName from "@/components/InputName"
import Toast from "@/components/toasts/Toast"
import ContactsList from "@/components/ContactsList"
import ModalWrapper from "@/components/modal/ModalWrapper"

export default {
  components: {
    InputPhone,
    InputName,
    Toast,
    ContactsList,
    ModalWrapper
  },
  data() {
    return {
      active_input_phone: true,
      active_input_name: false,
      toast_success: null,
      toast_message: null,
      active_modal: false,
      selected_contact: null,
      modal_name: '',
      temp_contact: {
        id: 2,
        phone: '',
        name: ''
      },
    }
  },
  methods: {
    goBack(name) {
      this.temp_contact.name = name
      this.active_input_name = false
      this.active_input_phone = true
    },
    goNext(phone) {
      this.temp_contact.phone = phone
      this.active_input_phone = false
      this.active_input_name = true
    },
    addContact(name) {
      this.viewToast(true, 'Контакт добавлен!')
      this.temp_contact.name = name
      this.active_input_name = false
      setTimeout(() => {
        this.active_input_phone = true
      }, 300)
      this.$store.commit('addContact', this.temp_contact)
      this.temp_contact.id++
      this.temp_contact.phone = ''
      this.temp_contact.name = ''
    },
    viewToast(val, message) {
      this.toast_success = val
      this.toast_message = message
      setTimeout(() => {
        this.toast_success = null
        this.toast_message = null
      }, 2000)
    },
    viewModal(modal_name = 'no name', contact = 'no contact') {
      switch (modal_name) {
        case 'MoreContactModal':
          this.selected_contact = contact
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
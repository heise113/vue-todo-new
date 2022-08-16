<template>

  <transition name="modal-content">
    <div class="content" @click.stop>
      <svg @click="$emit('viewModal')" class="content__close" height="30" width="30">
        <use xlink:href="@/assets/images/icons.svg#close"></use>
      </svg>
      <h1 class="content__title-name">{{ contact.name }}</h1>
      <div class="content__data">
        <div class="content__data__name">
          <label for="name">
            <svg height="50" width="50">
              <use xlink:href="@/assets/images/icons.svg#contact"></use>
            </svg>
          </label>
          <input
              id="name"
              v-model="temp_contact.name"
              type="text"
              maxlength="30"
          >
        </div>
        <div class="content__data__phone">
          <label for="phone">
            <svg height="50" width="50">
              <use xlink:href="@/assets/images/icons.svg#phone"></use>
            </svg>
          </label>
          <input
              id="phone"
              v-model="temp_contact.phone"
              type="text"
              v-maska="'+# (###) ###-##-##'"
          >
        </div>
        <p class="content__data__additionally">Дополнительно:</p>
        <div class="content__data__mail">
          <label for="mail">
            <svg height="50" width="50">
              <use xlink:href="@/assets/images/icons.svg#mail"></use>
            </svg>
          </label>
          <input
              id="mail"
              v-model="temp_contact.mail"
              type="email"
          >
        </div>
        <div class="content__data__inst">
          <label for="inst">
            <svg height="50" width="50">
              <use xlink:href="@/assets/images/icons.svg#inst"></use>
            </svg>
          </label>
          <input
              id="inst"
              v-model="temp_contact.inst"
              type="text"
          >
        </div>
        <button @click="updateContact" class="content__data__save-button">
          Сохранить
        </button>
      </div>
    </div>
  </transition>

</template>

<style scoped lang="scss">

.content {
  box-sizing: border-box;
  position: absolute;
  width: 500px;
  height: 600px;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -250px;
  background-color: $lightgray;
  border-radius: 10px;
  padding: 30px;

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    &:active {
      opacity: 0.7;
    }
  }

  &__title-name {
    width: 90%;
    word-break: break-all;
    margin-bottom: 30px;
  }

  &__data {
    display: flex;
    flex-direction: column;

    &__name, &__phone, &__mail, &__inst {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      & svg {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        cursor: pointer;
      }

      & input {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 18px;
        //width: 65%;
        flex-grow: 1;
        padding: 20px 15px;
        border-radius: 10px;
        background-color: $white;
        border: none;
      }
    }

    &__additionally {
      margin-bottom: 10px;
    }

    &__save-button {
      font-family: 'Montserrat';
      font-weight: 500;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      margin: 0 auto;
      background-color: $limegreen;
      border: none;
      color: $white;
      cursor: pointer;
      padding: 15px;
      border-radius: 10px;
      margin-top: 30px;

      &:active {
        opacity: 0.7;
      }
    }
  }
}

</style>

<script>

export default {
  props: {
    contact: Object
  },
  data() {
    return {
      temp_contact: {
        id: this.contact.id,
        name: this.contact.name,
        phone: this.contact.phone,
        mail: this.contact.mail,
        inst: this.contact.inst,
      }
    }
  },
  methods: {
    updateContact() {
      this.$store.commit('updateContact', this.temp_contact)
      this.$emit('viewModal')
    }
  }
}

</script>


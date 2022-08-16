<template>
  <div class="wrapper-input">
    <input
        ref="phone"
        @keydown.enter="validatePhone"
        class="wrapper-input__input"
        v-maska="'+# (###) ###-##-##'"
        v-model="phone"
        type="text"
        placeholder="Введите номер телефона"
    >
    <button class="wrapper-input__button" @click="addPhone" :disabled="active_button">
      <svg height="30" width="30">
        <use xlink:href="@/assets/images/icons.svg#arrow"></use>
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>

.wrapper-input {
  display: flex;
  height: 35px;
  width: 350px;
  font-family: 'Montserrat';
  padding: 10px 15px 10px 30px;
  background-color: $white;
  border-radius: 10px;

  &__input {
    font-family: 'Montserrat';
    font-size: 18px;
    flex-grow: 1;
    border: none;
    outline: none;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-left: 10px;
    background-color: $white;
    transition-duration: 0.3s;

    &:enabled {
      cursor: pointer;

      & svg use {
        fill: $black;
      }

      &:hover {
        transition-duration: 0.3s;

        svg use {
          fill: $limegreen;
        }
      }

      &:active {
        & svg use {
          opacity: 0.7;
        }
      }
    }

    & svg use {
      fill: gray;
    }

  }
}

</style>

<script>
export default {
  mounted() {
    this.$refs.phone.focus()
  },
  watch: {
    phone() {
      this.phone.length === 18 ? this.active_button = false : this.active_button = true
    }
  },
  props: {
    temp_phone: String
  },
  data() {
    return {
      phone: '',
      active_button: true
    }
  },
  methods: {
    validatePhone() {
      this.phone.length === 18 ? this.addPhone() : null
    },
    addPhone() {
      this.$emit('addPhone', this.phone)
    }
  }
}
</script>
<template>
  <div class="wrapper-input">
    <button class="wrapper-input__back-button" @click="goBack">
      <svg height="30" width="30">
        <use xlink:href="@/assets/images/icons.svg#arrow"></use>
      </svg>
    </button>
    <input
        ref="name"
        @keydown.enter="finish"
        class="wrapper-input__input"
        maxlength="30"
        v-model="name"
        type="text"
        placeholder="Введите имя контакта"
    >
    <button class="wrapper-input__save-phone-button" @click="finish">
      <svg height="30" width="30">
        <use xlink:href="@/assets/images/icons.svg#button-save-phone"></use>
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
  padding: 10px 15px 10px 15px;
  background-color: $white;
  border-radius: 10px;

  &__input {
    font-family: 'Montserrat';
    font-size: 18px;
    flex-grow: 1;
    border: none;
    outline: none;
  }

  &__back-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-right: 10px;
    background-color: $white;
    cursor: pointer;
    transition-duration: 0.3s;

    & svg {
      transform: rotate(180deg);
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

  &__save-phone-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: $white;
    margin-left: 10px;

    &:hover {
      svg use {
        fill: $limegreen;
        stroke: $limegreen;
      }
    }

    &:active {
      opacity: 0.7;
    }
  }
}

</style>

<script>
export default {
  created() {
    this.name = this.temp_name
  },
  mounted() {
    this.$refs.name.focus()
  },
  props: {
    temp_name: String
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    goBack() {
      this.$emit('goBack', this.name)
    },
    finish() {
      if (this.name) {
        this.$emit('finish', this.name)
      }
      else {
        this.$emit('errorName')
      }
    }
  }
}
</script>
<template>
  <div class="wrapper-list">
    <transition-group
        name="list"
        appear
    >
      <div
          v-for="item in $store.getters.getContacts"
          class="wrapper-list__item"
          :key="item.id"
          @click="moreContact(item)"
      >
        <div class="wrapper-list__item__contact">
          <p class="wrapper-list__item__contact__name"> Имя: {{ item.name }} </p>
          <p class="wrapper-list__item__contact__phone"> Номер: {{ item.phone }} </p>
          <p v-if="item.mail" class="wrapper-list__item__contact__mail"> Почта: {{ item.mail }} </p>
          <p v-if="item.inst" class="wrapper-list__item__contact__inst"> Инст: {{ item.inst }} </p>
        </div>
        <svg @click.stop="deleteContact(item.id)" class="wrapper-list__item__delete-contact" height="30" width="30">
          <use xlink:href="@/assets/images/icons.svg#delete-contact"></use>
        </svg>
      </div>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">

.wrapper-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    margin: 10px 0;
    padding: 10px;
    background-color: $white;
    border-radius: 10px;
    box-shadow: 3px 3px 3px $gray;
    cursor: pointer;
    user-select: none;

    &:hover {
      box-shadow: 3px 3px 3px $black;
    }

    &__contact {

      &__name {
        font-weight: 500;
        margin-bottom: 3px;
        width: 250px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &__phone {

      }

      &__mail, &__inst {
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &__delete-contact {
      cursor: pointer;
      margin-left: 5px;

      &:hover {
        use {
          fill: red;
        }
      }

      &:active {
        opacity: 0.5;
      }
    }
  }
}

.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.list-enter-to {
  opacity: 1;
  transform: scale(1);
}

.list-enter-active {
  transition: all 0.5s ease;
}

.list-leave-from {
  opacity: 1;
}

.list-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.list-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.list-move {
  transition: all 0.3s ease;
}

</style>

<script>

export default {
  methods: {
    deleteContact(id) {
      this.$store.commit('deleteContact', id)
    },
    moreContact(contact) {
      this.$emit('viewModal', 'MoreContactModal', contact)
    }
  }
}

</script>

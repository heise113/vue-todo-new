<template>
  <nav class="wrapper">
    <router-link to="/" class="wrapper__link">Notebook</router-link>
    <router-link to="/notes" class="wrapper__link">Notes</router-link>
    <router-link to="/todo" class="wrapper__link">Todo</router-link>
  </nav>
</template>

<style lang="scss" scoped>

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-image: url(../assets/images/gray-texture.jpg);
  //background-color: $darkgray;
  &__link{
    font-size: 22px;
    font-weight: 500;
    color: $lightgray;
    text-decoration: none;
    padding: 15px;
    transition-duration: 0.3s;

    &:hover {
      color: $white;
      transition-duration: 0.2s;
      transform: scale(1.1, 1.1);
    }

    &:active {
      opacity: 0.7;
    }
  }
}

</style>

<script>

</script>
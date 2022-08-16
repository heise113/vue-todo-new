<template>

  <transition name="modal-content">
    <div class="content" @click.stop>
      <h1>Модальное окно Notes</h1>
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
  }

</style>

<script>

</script>
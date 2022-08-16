<template>

  <div class="wrapper-toast" :class="success ? 'wrapper-toast_green' : 'wrapper-toast_red'" >
    <slot></slot>
  </div>

</template>

<script>

export default {
  props: {
    success: {
      required: true,
      type: Boolean
    }
  }
}

</script>

<style scoped lang="scss">

  .wrapper-toast {
    padding: 15px 20px;
    color: $white;
    border-radius: 10px;


    &_green {
      background-color: $limegreen;
    }

    &_red {
      background-color: $lightred;
    }
  }

</style>
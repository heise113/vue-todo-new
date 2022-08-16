<template>
  <Navbar/>
  <router-view></router-view>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: $lightgray;
    font-family: 'Montserrat';
  }
</style>

<script>
import Navbar from "@/components/Navbar"

export default {
  components: {
    Navbar
  }
}
</script>


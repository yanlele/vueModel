<template>
  <div id="app">
    <transition enter-active-class="bounceIn" leave-active-class="bounceInDown">
      <router-view class="animated"></router-view>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style>

</style>

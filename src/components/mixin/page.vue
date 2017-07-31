<template>
  <div>
    <p>我是mixin</p>
    <p>我要继承所有mixin的script方法</p>
    <yd-button type="primary" @click.native="mixinClick">点击试一试看看哈</yd-button>
    <br>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <p>{{message}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import {pageMixin} from './mixin'

  export default{
    mixins: [pageMixin],
  }

</script>

<style scoped>

</style>

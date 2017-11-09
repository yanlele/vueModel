<template>
  <div class="content">
    <input type="button" value="+1" @click="increment">
    <input type="button" value="-1" @click="decrement">
    <input type="button" value="奇数+1" @click="addOdd">
    <input type="button" value="偶数+1" @click="addEven">
    <input type="button" value="异步请求" @click="setTimeOut">
    <br>
    现在的数字为：{{count}}
  </div>
</template>
<style scoped="scoped">
  .content{
    text-align: center;
    margin-top: 100px;
    font-size: 18px;
  }

  input{
    padding:10px 20px;
  }
</style>
<script>
  import {mapActions, mapGetters} from 'vuex'
  export default{
    name:'test1',
    methods: mapActions([
      'increment',
      'decrement',
      'addOdd',
      'addEven',
      'setTimeOut'
    ]),
    computed: mapGetters([
      'count'
    ])
  }
</script>

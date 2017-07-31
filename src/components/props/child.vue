<template>
  <div>
    <p>我是子组件</p>
    <p>我收到的父组件的信息：{{send}}</p>
    <button @click="sendForFather">我也有信息要给父组件，点击我</button>
  </div>
</template>

<script type="text/ecmascript-6">


  export default{
    props:{
      send:{
        type:String,
        default:'我没有收到信息呀'
      }
    },

    methods:{
      sendForFather(){
        this.$emit('sendForFather','我事情告诉父组件,让我上报');
      }
    }

  }
</script>

<style scoped>

</style>

<template>
  <div style="text-align: center">
    <div v-for="(item,index) in list" @click="check($event,index)" :id="index">
      <p>{{item}}------</p>
      <input type="checkbox" :value="item" v-model="yanle">
    </div>

<!--    <input type="checkbox" value="1" v-model="yanle">
    <input type="checkbox" value="2" v-model="yanle">
    <input type="checkbox" value="3" v-model="yanle">
    <input type="checkbox" value="4" v-model="yanle">
    <input type="checkbox" value="5" v-model="yanle">
    <input type="checkbox" value="6" v-model="yanle">-->

    <p>获取的信息为：{{yanle}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'

  export default{
    data(){
      return {
        yanle: [],
        list: [
          'yanle',
          'lele',
          'name'
        ],
      }
    },
    methods:{
      check(e,index){
        console.log(e.currentTarget.find('input'));
        console.log(index)
      }
    },

    mounted(){
      console.log(this.$refs)
    }
  }
</script>


<style scoped>

</style>

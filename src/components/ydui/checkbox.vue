<template>
  <yd-checkbox-group v-model="checkbox3">
    <yd-checkbox val="1" style="width: 100%; float: right;" >
      <div style="float: left">
        <p>我是眼Lee</p>
        <p>ni shi hei </p>
        <p>and then</p>
      </div>
    </yd-checkbox>
    <yd-checkbox val="2">啊啊啊</yd-checkbox>
    <yd-checkbox val="3">喔喔喔</yd-checkbox>
  </yd-checkbox-group>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'

  export default {
    data() {
      return {
        checkbox3: ['2']
      }
    },

    mounted(){
/*        console.log($('.checkbox-icon').css(
            'float','right'
        ))*/
    }
  }
</script>

<style scoped>
.checkbox-icon{
  float:right
}
</style>

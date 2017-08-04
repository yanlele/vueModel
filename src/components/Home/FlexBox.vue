<template>
  <div v-title data-title="FlexBox">
    <div ref="body" class="body" >

      <yd-flexbox>
        <yd-flexbox-item class="one">yd-flexbox-item</yd-flexbox-item>
        <yd-flexbox-item ></yd-flexbox-item>
        <yd-flexbox-item class="two">yd-flexbox-item</yd-flexbox-item>
        <yd-flexbox-item ></yd-flexbox-item>
      </yd-flexbox>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">


  export default{


    mounted(){
        if(this.$refs.body.clientHeight<window.innerHeight){
          this.$refs.body.style.height = window.innerHeight+"px";
        }
    }
  }
</script>

<style scoped long="less">

  .one{
    background-color: #daaa5e;
    width:40%;
  }

  .two{
    background-color: #979bda;
  }

  .body {
    /*height:1800px;*/
  }

  .header {
    width: 100%;
    background-color: antiquewhite;
  }

  .body {
    background-color: #ffd7c8;
  }

  .footer {
    width: 100%;
    background-color: #bdc7ff;
  }
</style>

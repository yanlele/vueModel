<template>
  <div v-title data-title="FlexBox">
    <div ref="body" class="body" >
      <yd-flexbox direction="vertical">
        <div class="header">div</div>
        <yd-flexbox-item class="body">yd-flexbox-item</yd-flexbox-item>
        <div class="footer">div</div>
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

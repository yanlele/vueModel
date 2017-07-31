<template>
  <div>
    <!--<p>{{data.message}}</p>-->
    <!--<p>{{data.success}}</p>-->
    <p>{{data.message}}</p>
    <p>{{data.success}}</p>

    <p>我是vuex的信息{{data}}</p>

    <yd-button type="primary" @click.native="backFather">返回father</yd-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations, mapGetters} from 'vuex'

  export default{

    methods: {
      backFather(){
        this.setData({
          address: '我的家庭地址是重庆'
        });

        this.$router.push({
          path: '/father',
          query: {name: 'lele'}
        })
      },

      ...mapMutations({
        setData: 'SET_DATA'
      })
    },

    computed: {
      ...mapGetters([
        'data'
      ])
    },

    created(){
//      console.log(this.data);
    },


  }
</script>

<style scoped>

</style>

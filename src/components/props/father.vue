<template>
  <div>
    <p>我是父组件</p>
    <P>我收到了我的子组件给我的信息了：{{receives}}</P>
    <child :send="message" @sendForFather="receive"></child>

    <p>我是vuex的信息：{{data}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import child from '@/components/props/child'
  import {mapGetters} from 'vuex'

  export default{
    data(){
      return {
        message: '我是父组件要传递给子组件的信息',
        receives: '没有收到哇'
      }
    },

    computed:{


      ...mapGetters([
        'data'
      ])
    },

    methods: {
      receive(res){
        this.receives = res;
      }
    },

    components: {
      child,
    },
  }
</script>

<style scoped>

</style>

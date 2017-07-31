import {mapGetters} from 'vuex'

export const pageMixin={
  data(){
    return {
      name:'yanle',
      age:15,
      message:'我是信息'
    }
  },

  methods:{
    mixinClick(){
      this.$dialog.confirm({
        title: '选填标题',
        mes: '我有一个小毛驴我从来也不骑！',
        opts: () => {
          this.$dialog.toast({mes: '你点了确定', timeout: 1000});
        }
      });
    }
  },

  computed:{
    ...mapGetters([
      'data'
    ])
  }
};

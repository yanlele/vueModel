<template>
  <div v-title data-title="首页">
    <div>
      <h1>欢迎来到我的首页</h1>
      <router-link to="/login" class="login">登陆</router-link>
      <router-link to="/regist" class="login">注册</router-link>

      <router-link to="/father" class="login">父子组件通信问题研究</router-link>
      <router-link to="/other" class="login">关于vuex的问题解决办法</router-link>
      <h1>{{message}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: {},
      }
    },

    created(){
      const name = this.$route.query.name;

      this.axios.post('/think2/public/index/index/userMessage', {
        name: name
      }).then((res) => {
        if (res.data.success) {
          this.message = res.data
        }
      });
    }
  }
</script>


<style lang="less" scoped>
  h1 {
    font-size: 24px;
  }

  .login {
    color: #6c65c2;
    font-size: 24px;
    &:hover {
      text-decoration: underline;
    }
  }
</style>

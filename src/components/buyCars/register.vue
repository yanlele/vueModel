<template>
  <div>
    <header><a class="back" href="javascript:;">返回</a>全民抢车</header>
    <div class="reg-warp">
      <div class="reg-box">
        <i class="reg-ico"></i>
        <h2>注册<p>低价抢车，免费养车！</p></h2>
        <div class="m-form mt30">
          <div class="item">
            <label class="lab">真实姓名</label>
            <input class="text" type="text" placeholder="请填写真实姓名"/>
          </div>
          <div class="item">
            <label class="lab">手机号</label>
            <input class="text" type="text" placeholder="请填入您的手机号码"/>
          </div>
          <div class="item code-item">
            <label class="lab">验证码</label>
            <input class="text" type="text" maxlength="6" @keyup="onlyNumber" v-model="input3" placeholder="输入手机验证码"/>
            <button class="get-code" v-if="phoneCode" @click="getCode">获取验证码</button>
            <span class="sent-code" v-else="phoneCode">已发送<em>{{timeOut}}</em>s</span>
          </div>
          <div class="item code-item fn-hide">
            <label class="lab">验证码</label>
            <input class="text" type="text" placeholder="输入手机验证码"/>
            <span class="sent-code">已发送<em>{{timeOut}}</em>s</span>
          </div>
          <div class="mt10">
            <button class="btn">注册</button>
          </div>
          <div class="agree fn-hide"><b class="cbx"></b>我已阅读<a href="javascript:;">《<i>个债宝用户使用协议</i>》</a></div>
          <div class="agree"><b class="cbx cbx-cur"></b>我已阅读<a href="javascript:;">《<i>个债宝用户使用协议</i>》</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        input3: '',
        timeOut: 10,
        phoneCode:true
      }
    },


    methods: {
      onlyNumber(){
        this.input3 = this.input3.replace(/[^\d]/g, '')
      },

      getCode(){
        this.phoneCode=false;
        this.timeController=setInterval(()=>{
          this.timeOut-=1;
        },1000);
      }
    },

    watch:{
        timeOut(newValue,oldValue){
          if(newValue===0){
            clearInterval(this.timeController);
            this.phoneCode=true;
            this.timeOut=10;
          }
        }
    }
  }
</script>

<style scoped>

  .get-code-disabled {
    height: 4rem;
    color: #ed801a;
    font-size: 1.4rem;
    border: 0;
    background: none;
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    padding: 0;
  }


</style>

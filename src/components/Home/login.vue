<template>
  <div v-title data-title="用户登录">
    <div class="form-box" ref="form">
        <yd-cell-group>
          <yd-cell-item>
            <p slot="left">用户登录</p>
          </yd-cell-item>
          <yd-cell-item>
            <yd-icon slot="icon" name="ucenter-outline" size="24px" :color="nameColor"></yd-icon>
            <span slot="left">用户名：</span>
            <yd-input slot="right" required v-model="input1" max="15" min="5" placeholder="请输入用户名"
                      ref="input1"></yd-input>
          </yd-cell-item>

          <yd-cell-item>
            <yd-icon slot="icon" name="shield" size="24px" :color="psdColor"></yd-icon>
            <span slot="left">密码：</span>
            <yd-input slot="right" required type="password" v-model="input2" max="20" min="6" placeholder="请输入密码"
                      ref="input2"></yd-input>
          </yd-cell-item>
          <div class="sure-message">
            <yd-button type="primary" @click.native="sub">确认</yd-button>
            <yd-button type="danger" @click.native="reset">清空</yd-button>
            <yd-button type="warning" @click.native="regist">注册</yd-button>
          </div>

        </yd-cell-group>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        input1: '',
        input2: '',
        nameColor: '',
        psdColor: ''
      }
    },

    methods: {
      sub(){
        if (!this.$refs.input1.valid) {
          this.$dialog.toast({
            mes: '用户名至少为5位',
            timeout: 1500,
            icon: 'error'
          });
          return;
        }

        if (!this.$refs.input2.valid) {
          this.$dialog.toast({
            mes: '密码为6到12位',
            timeout: 1500,
            icon: 'error'
          });
          return;
        }

        this.axios.post('/think2/public/index/index/login', {
          name: this.input1,
          password: this.input2
        }).then((res) => {
          if (res.data.success) {
            this.$dialog.toast({
              mes: res.data.message,
              timeout: 1500,
              icon: 'success',
              callback: () => {
                this.$router.push({path: '/home',query:{'name':this.input1}})
              }
            })
          } else {
            this.$dialog.toast({
              mes: res.data.message,
              timeout: 1500,
              icon: 'error'
            })
          }
        }).catch((res) => {
          console.log(res)
        })
      },
      reset(){
        this.input1 = '';
        this.input2 = '';
      },
      regist(){
        this.$router.push({
          path: '/regist'
        })
      }
    },

    mounted(){
      const winHeight = window.innerHeight;
      this.input1=this.store.get('user');
      this.$refs.form.style.paddingTop=`${window.innerHeight/2-this.$refs.form.clientHeight/2}px`;
    },

    watch: {
      input1(newVal){
        if (newVal.length >= 5) {
          this.nameColor = "#3399FF"
        } else {
          this.nameColor = "#FF0033"
        }
      },
      input2(newVal){
        if (newVal.length >= 6) {
          this.psdColor = "#3399FF"
        } else {
          this.psdColor = "#FF0033"
        }
      }
    },
  }
</script>

<style lang="less" scoped>

  form {
    width: 45%;
    display: block;
    margin: 0 auto;
  }

  .sure-message {
    height: 60px;
    text-align: center;
    line-height: 60px;
    button {
      padding: 4px 20px;
      &:nth-child(1) {
        margin-right: 15px;
      }
      &:nth-child(3) {
        margin-left: 15px;
      }
    }
  }

</style>

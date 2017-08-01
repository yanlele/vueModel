<template>
  <div>
    <yd-cell-group>
      <yd-cell-item>
        <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
        <input type="text" slot="right" placeholder="请输入手机号码">

        <!-- ↓↓关键代码是这里↓↓ -->
        <yd-sendcode slot="right"
                     v-model="start1"
                     @click.native="sendCode1"
                     type="primary">
        </yd-sendcode>
        <!-- ↑↑关键代码是这里↑↑ -->

      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        start1: false
      }
    },
    methods: {
      sendCode1() {
        this.$dialog.loading.open('发送中...');
        setTimeout(() => {

          this.start1 = true;
          this.$dialog.loading.close();

          this.$dialog.toast({
            mes: '已发送',
            icon: 'success',
            timeout: 1500
          });

        }, 1000);
      }
    }
  }
</script>

<style scoped lang="less">
.bgColor{
  background-color: #7f7eff;
}
</style>

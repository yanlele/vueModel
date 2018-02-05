<template>
  <div>
    <p>用户评论测试</p>
    <hr>

    <div v-for="(item,index) in list">
      <button
        @click="getGood(index)"
        :class="item.car">点赞 {{item.count}}
      </button>
      <br><br>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          count: 11
        }, {
          count: 12
        }, {
          count: 13
        }, {
          count: 14
        }, {
          count: 15
        }, {
          count: 16
        }, {
          count: 17
        }, {
          count: 18
        }, {
          count: 19
        }]
      }
    },

    created() {
      /*对后端返回的数组扩展*/
      this.list.forEach((item, index) => {
        item.check = true;
        item.car='';
      })
    },

    methods: {
      getGood(index) {
        /*这样就实现了点击+1，再次点击-1的功能*/
        console.log(index);
        console.log(this.list[index].count);
        if (this.list[index].check) {
          this.list[index].count++;
          this.list[index].check = false;

          this.list[index].car='car'
        } else {
          this.list[index].count--;
          this.list[index].check = true;

          this.list[index].car='';
        }
      },
    }
  }
</script>


<style scoped="scoped">
  .car {
    background-color: #d9bcc3;
  }
</style>

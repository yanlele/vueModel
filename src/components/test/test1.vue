<template>
  <div>
    <group>
      <cell title="cell" value="hello" is-link></cell>
      <cell-box is-link>
        cell-box long long long long long long long
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell title="cell" value="hello" is-link></cell>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, CellBox } from 'vux'

  export default{
    data(){
      return {
        show: true
      }
    },

    components: {
      Group,
      Cell,
      CellBox
    }

  }
</script>


<style scoped>
  .bg {
    background-color: #1cd9d3;
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
</style>

<template>
  <div>
    <mt-search :value.sync="value"></mt-search>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Search } from 'mint-ui';
  Vue.component(Search.name, Search);
  export default{
      name : 'find',
      data (){
          return{
              value:''
          }
      }
  }
</script>

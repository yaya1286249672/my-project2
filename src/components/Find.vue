<template>
  <div>
    <mt-search
      autofocus
      v-model="value"
      :result="filterResult">
    </mt-search>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Search} from 'mint-ui';
  Vue.component(Search.name, Search);
  export default{
    name: 'find',
    data (){
      return {
        value: '',
        // 默认数据
        defaultResult: [
          'Apple',
          'Banana',
          'Orange',
          'Durian',
          'Lemon',
          'Peach',
          'Cherry',
          'Berry',
          'Core',
          'Fig',
          'Haw',
          'Melon',
          'Plum',
          'Pear',
          'Peanut',
          'Other'
        ]
      };
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    }
  }
</script>

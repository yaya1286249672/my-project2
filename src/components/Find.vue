<template>
  <div>
    <mt-search style = "height:50px"
      autofocus
      v-model="value"
      :result="filterResult">
    </mt-search>
    <div v-model="skuList" v-for="(val, key) in skuList ">
      <router-link :to= "{path:'/detail',query:{id:skuList}}">
        <span><img :src="val.src" alt="" width = "35px"></span>
        <span>{{val.name}}</span>
        <span>{{val.price}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Search} from 'mint-ui';
  import Detail from './detail.vue'

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
        ],
        skuList:[
          {"name":'橘子',"price":"111","src":'../static/img/1.jpg'},
          {"name":'苹果',"price":"222","src":'../static/img/2.jpg'},
          {"name":'梨子',"price":"333","src":'../static/img/3.jpg'}
         ]
      };
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    },
    methods:{
        getVal(){
            console.log(this.skuList);
        }
    }
  }
</script>
<style>

</style>

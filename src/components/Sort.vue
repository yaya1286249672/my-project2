<template>
  <div>
    <ul class = "navSort">
      <li v-for="(tab, index) in tabs"
          :class="{'active':index===selected}"
          @click="choose(index)">
          {{tab.tabName}}
      </li>
    </ul>
    <div>
      <component :is="currentView"></component>
    </div>
    <div>
      <fiChild v-on:childToParentMsg = "change"></fiChild>
      <p>Do you like me? {{msg}}</p>
      <seChild msgChild="aaa" msgChild1="bbb" msgChild2="ccc"></seChild>
    </div>
  </div>
</template>
<script>
  import fruite from './selectSort/fruite.vue'
  import flower from './selectSort/flower.vue'
  import cake from './selectSort/cake.vue'
  import fiChild from './child/firstChild.vue'
  import seChild from './child/secondChild.vue'

  export default{
      name : 'sort',
      data (){
          return{
            tabs:[
              {tabName:'水果'},
              {tabName:'鲜花'},
              {tabName:'蛋糕'},
            ],
            selected:0,
            currentView:'tab_0',
            msg:'hahhaa'
          }
      },
    components:{
      'tab_0':fruite,
      'tab_1':flower,
      'tab_2':cake,
      'fiChild':fiChild,
      'seChild':seChild
    },
    methods:{
      choose(index) {
        this.selected=index;
        this.currentView='tab_'+index;
      },
      change(msg) {
        this.msg = msg;
      }
    }
  }
</script>
<style>
.navSort{width:100%;height:30px;line-height:30px;display: flex}
.navSort li{float:left;flex-grow: 1;list-style: none;
  background: #ccff99;}
</style>

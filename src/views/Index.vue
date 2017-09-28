<template>
  <div class="m-index">
    <mt-header fixed title="标题">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="" slot="right" @click="logout">退出</mt-button>
    </mt-header>
    <!--<h3>热烈欢迎王娅同学来到神殿！</h3>-->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="outsale">
        <div>
          哈哈
          <button @click="logout">退出</button>
          <!--<v-postdemo></v-postdemo>-->
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="order">
        <!--<mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>-->
        <div>
          <!--<v-selectdemo></v-selectdemo>-->
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="find">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
        <mt-cell v-for="n in 7" title="tab-container 5"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="outsale">
        <img slot="icon" src="../assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="../assets/logo.png">
        监控
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" src="../assets/logo.png">
        分析
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        selected: 'outsale',
        active: 'outsale'
      }
    },
    methods: {
      logout () {
        localStorage.removeItem('auth')
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
  .m-index{
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
</style>


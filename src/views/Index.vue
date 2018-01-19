<template>
  <div class="m-index">
    <!--  <mt-header fixed title="标题">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="" slot="right" @click="logout">退出</mt-button>
      </mt-header>
      &lt;!&ndash;<h3>热烈欢迎王娅同学来到神殿！</h3>&ndash;&gt;
      <mt-tab-container v-model="selected" id = "wmaincontainer">
        <mt-tab-container-item id="outsale">
          <div>
            哈哈
            <button @click="logout">退出</button>
            <router-link to="/index/postdemo">echarts案例</router-link>
            <router-view></router-view>
            &lt;!&ndash;<v-postdemo></v-postdemo>&ndash;&gt;
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="order">
          &lt;!&ndash;<mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>&ndash;&gt;
          <div>
            &lt;!&ndash;<v-selectdemo></v-selectdemo>&ndash;&gt;
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="find">
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="mine">
          <mt-cell v-for="n in 7" title="tab-container 5"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar v-model="selected" fixed>
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
      </mt-tabbar>-->
    <div class = "tabtop">
      <span>{{title}}</span><span class="logOut" @click="logout">退出登录</span>
    </div>
    <div class = "tabbottom">
      <div class = "botItem" @click = "acBtag($event)" >
        <router-link to="/index/home">
          <i class="icon iconfont icon-home"></i>
          <div class="name">首页</div>
          <!--<div class="fontclass">.icon-home</div>-->
        </router-link>
      </div>
      <div class = "botItem" @click = "acBtag($event)" >
        <router-link class = "botItem" @click = "acBtag($event)" to="/index/sort">
          <i class="icon iconfont icon-sort"></i>
          <div class="name">分类</div>
          <!--<div class="fontclass">.icon-sort</div>-->
        </router-link>
      </div>
      <div class = "botItem" @click = "acBtag($event)" >
        <router-link class = "botItem" @click = "acBtag($event)" to="/index/find">
          <i class="icon iconfont icon-icon19"></i>
          <div class="name">发现</div>
          <!--<div class="fontclass">.icon-icon19</div>-->
        </router-link>
      </div>
      <div class = "botItem" @click = "acBtag($event)" >
        <router-link class = "botItem" @click = "acBtag($event)" to="/index/mine">
          <i class="icon iconfont icon-mine"></i>
          <div class="name">我的</div>
          <!--<div class="fontclass">.icon-mine</div>-->
        </router-link>
      </div>
    </div>
    <router-view class="mainCon"></router-view>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        title: '',
        selected: 'outsale',
        active: 'outsale'
      }
    },
    watch:{
      $route(){
        var pathTitle = this.$route.path;
        if(pathTitle == '/index/find'){
          this.title = '发现';
        }else if(pathTitle == '/index/sort'){
          this.title = '分类';
        }else if(pathTitle == '/index/home'){
          this.title = '首页';
        }else if(pathTitle == '/index/mine'){
          this.title = '我的';
        }
      }

    },
    methods: {
        //退出
      logout () {
        localStorage.removeItem('auth');
        this.$router.push('/login')
      },
      //点击切换样式
      acBtag (event) {
        var e = event || window.event;
        console.log(e.currentTarget);
        $(e.currentTarget).addClass("botActive").siblings().removeClass("botActive");
        /*var divTxt = e.currentTarget.childNodes[0].childNodes[2].innerHTML;
        this.title = divTxt;*/
      }
    }
  }
</script>

<style>
  .m-index {
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
  .tabtop{position: fixed;top: 0;left:0;width:100%;height:48px;background:#f9c;line-height:48px;}
  .logOut{float:right;font-size:12px}
  .tabbottom{
    position: fixed;bottom: 0;left:0;width:100%;height:48px;display: flex;flex-direction: row;background:#f9c;
  }
  .tabbottom .botItem{flex-grow:1;}
  .botItem a{display: block;width:100%;height:100%;color:#fff}
  .botActive{background:#000;}
  .mainCon{width:100%;height:auto;position: fixed;top:48px;left:0;}
</style>


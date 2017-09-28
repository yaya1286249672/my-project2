<template>
  <div>
    <div>
      <div class="login-wrap" v-show = "showLogin">
        <img src="../assets/logo.png">
        <h3>登录</h3>
        <p v-show="showremin">{{remin}}</p>
        <input type="text"  placeholder="请输入用户名" v-model="username">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button @click = "login()">登录</button>
        <span @click = "ToRegister()">没有账号？马上注册</span>
      </div>
      <div class="register-wrap" v-show="showRegister">
        <img src="../assets/logo.png">
        <h3>注册</h3>
        <p v-show="showremin">{{remin}}</p>
        <input type="text" placeholder="请输入用户名" v-model="newUsername">
        <input type="password" placeholder="请输入密码" v-model="newPassword">
        <button @click="register()">注册</button>
        <span @click="ToLogin()">已有账号？马上登录</span>
      </div>
    </div>
  </div>
</template>

<style>
  .login-wrap{text-align:center;}
  input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  p{color:red;}
  button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;}
  span:hover{color:#41b883;}
</style>

<script>
  export default{
    data () {
      return {
        showLogin: true,
        showRegister: false,
        showremin: false,
        remin: '',
        username: '',
        password: '',
        newUsername: '',
        newPassword: ''
      }
    },
    methods: {
      ToRegister () {
        console.log('111')
        this.showRegister = true
        this.showLogin = false
      },
      ToLogin () {
        console.log('222')
        this.showRegister = false
        this.showLogin = true
      },
      login () {
        if (this.username.trim() === 'wangya' && this.password.trim() === '123456') {
          localStorage.setItem('auth', 'yes')
          this.$router.push('/index')
        } else {
          alert('用户名或密码错误')
        }
      }
    }
  }
</script>
<!--
<template>
  <div class="m-login">
    <form @submit="login">
      <input type="text" v-model="username"> <br>
      <input type="password" v-model="password"> <br>
      <button type="submit">登录</button>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        if (this.username.trim() === 'wangya' && this.password.trim() === '123456') {
          localStorage.setItem('auth', 'yes')
          this.$router.push('/')
        } else {
          alert('用户名或密码错误')
        }
      }
    }
  }
</script>
<style>
  .m-login{
    margin: 0 auto;
    width: 300px;
    text-align: center;
  }
</style>
-->

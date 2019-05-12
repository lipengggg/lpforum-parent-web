<template>
  <el-row class="top">
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-image :src="logoImg" class="logo-img"></el-image>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light mytitle">
        LP个人博客
      </div>
    </el-col>
    <el-col :span="8" class="login1">
      <div class="grid-content bg-purple login">
        <ul>
            <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">退出</a></li>
        </ul>
      </div>
      <div>
        <el-image :src="userImg" class="user-img"></el-image>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      logoImg: require('../../image/logo.png'),
      userImg: require('../../image/userimg.jpg')
    }
  }
}
</script>

<style scoped>
  .top{
    height: 200px;
    background-image: url("../../image/logobackground.jpg");
    border-radius: 10px;
  }
  .logo-img{
    width:150px;
    margin: 50px 0 0 0;
  }
  .user-img{
    width: 50px;
  }
  .mytitle{
    text-align: center;
    font-size: 50px;
    margin: 10px 0 0 0 ;
    font-family: 微软雅黑;
    font-weight: bold;
  }
  .login1{
    text-align:right;
  }
  .login ul{
    list-style-type: none;
    text-align: center;
  }
  .login ul li{
    float: left;
    margin-left: 5px;
  }
  .login ul li a{
    font-size: 18px;
    text-decoration: none;
    color: black;
  }
</style>

<template>
  <el-row class = "myheader">
    <el-col :span="8">
      <div class="logo"></div>
      <div class="mytitle">logo李鹏个人博客</div>
    </el-col>
    <el-col :span="8">
      <div>登陆注册</div>
    </el-col>
    <el-col :span="8">
      <div>微信QQ</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .myheader {
    background-color:cornflowerblue;
    padding: 20px;
  }
  .logo{
    background-image: url("../../assets/logo.png");
    background-repeat: no-repeat;
    background-size:contain;
    float: left;
    display: inline;
  }
  .mytitle{
    float: left;
    display: inline;
  }
  .logo .mytitle{
  }
</style>

<template>
  <div>
    <div id="templatemo_header_panel">
      <div id="templatemo_title_section">
        <h1>亚里士多德博客</h1>
        <span id="mylife">--生活就像海洋，只有意志坚强的人才能到达彼岸！</span></div>
    </div> <!-- end of templatemo header panel -->

    <div id="templatemo_menu_panel">
      <div id="templatemo_menu_section">
        <ul>
          <li><a href="index.html"  class="current">首页</a></li>
          <li><a href="#">我的生活</a></li>
          <li><a href="#">知识库</a></li>
          <li><a href="#">艺术墙</a></li>
          <li><a href="#">艺术墙</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">联系我们</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  #mylife{
    color: cornflowerblue;
  }

  #templatemo_header_panel{
    width:100%;
    margin: 0 auto;
    color: #ffffff;
    height: 205px;
  }

  #templatemo_header_panel #templatemo_title_section{
    width: 100%;
    height: 132px;	/* +73 ( padding ) */
    margin:0 auto;
    padding-top: 73px;
    text-align: center;
  }

  #templatemo_menu_panel{
    width:100%;
    height: 45px;
    margin: 0 auto;
    color: #ffffff;
  }

  #templatemo_menu_panel #templatemo_menu_section{
    width: 930px;
    height: 45px;
    margin:0 auto;
    padding: 0 0 0 30px;
    color: #03a0a6;
  }

  #templatemo_menu_section ul {
    float: left;
    width: 930px;
    margin: 0;
    padding: 7px 0 0 0;
    list-style: none;
  }

  #templatemo_menu_section ul li{
    display: inline;
  }

  #templatemo_menu_section ul li a{
    float: left;
    width: 110px;
    padding: 5px 0;
    margin-right: 5px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    border-bottom: 3px solid #472400;
  }

  #templatemo_menu_section li a:hover, #templatemo_menu_section li .current{
    color: #ffffff;
    border-bottom: 8px solid #703901;
  }
</style>

<template>
  <div class="new_article_list">
    <el-card class="new_article_card">
      <div slot="header">
        最新博文
      </div>
      <ul>
        <li class="newblog_list_item" v-for="(art ,index) in article" :key="index">
          <p class="new_blog_title">
            {{art.title}}
          </p>
          <div class="new_blog_body">
            <div class="imgdiv">
              <img width="100%" :src="art.corver" alt="">
            </div>
            <div class="blog_content_sulv">
              {{art.contentext}}
            </div>
          </div>
          <div class="new_bog_footer">
            <div class="article_messae">
             <span>
               <img src="../../../image/titme.png" alt="">
                {{art.creatime}}
             </span>
              <span>
                 <img src="../../../image/yuedu.png" alt="">
                浏览({{art.looknum}})
              </span>
              <span>
                                     <img src="../../../image/huifu.png" alt="">
                                     回复({{art.readnum}})
                                 </span>
            </div>
            <div class="go_read" @click="jumptodetail(art.id)">
              <span>》》》阅读原文</span>
            </div>
          </div>
          <el-divider></el-divider>
        </li>
      </ul>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "",
      data () {
        return {
          article: [
            {title: '测试',corver: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',contentext: '用到的主要技术栈有 vue vuex vue-router cheerio +request node.js+mongoose + express 做后端 [element-ui](http://element.eleme.io/#/) 主要路由 首页 博文 书屋 --&gt;书籍都可以看 交流 留言--&gt;没写别点哈 写博文 阅读博文 登陆/注册 个人中心 --&gt;关注---&gt;粉丝 刚写 还只能抽空写功能 还在完善中 别给我玩坏了还得删库 页面效果 index/home ![图片描述]',creatime: new Date().toDateString(),looknum: 100,readnum: 100,id: '1'},
            {title: '测试',corver: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',contentext: 'bbbbbbbbbbb',creatime: new Date().toDateString(),looknum: 100,readnum: 100,id: '2'},
            {title: '测试',corver: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',contentext: 'ccccccccccccc',creatime: new Date().toDateString(),looknum: 100,readnum: 100,id: '3'},
            {title: '测试',corver: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',contentext: 'ddddddddddd',creatime: new Date().toDateString(),looknum: 100,readnum: 100,id: '4'},
            {title: '测试',corver: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',contentext: 'eeeeeeeeeeee',creatime: new Date().toDateString(),looknum: 100,readnum: 100,id: '5'},
          ]
        }
      },
      methods: {
        jumptodetail (id) {}
      }

    }
</script>

<style scoped>

  .item{
  }

  .new_article_list{
    width: 100%;
    margin-top: 20px;
  }

  .new_article_card{
    background-color: rgb(77, 61, 61);
    border: none;
    color: #ddd;
  }

  .newblog_list_item{
    margin-top: 20px;
    list-style-type: none;
  }

  .new_blog_title{
    font: 15px "宋体";
    color: rgb(180, 179, 179);
  }

  .new_blog_body{
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }

  .imgdiv{
    width: 200px;
    flex: 0 0 180px;
    height: 120px;
    display: inline-block;
    margin-right: 20px;
    border-radius: 10px;
    overflow: hidden;
  }

  .blog_content_sulv{
    text-indent: 2em;
    line-height:2.0;
    font-size: 15px;
    color: #999;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .new_bog_footer{
  //   margin-left: 200px;
    display: flex;
    justify-content: space-between;
  }

  span img{
    vertical-align: middle;
    font: 12px '宋体';
    color: #ddd;
  }

  .go_read{
    cursor: pointer;
    min-width: 100px;
    max-height: 20px;
    padding: 5px;
    background-color: rgb(85, 38, 38);
    border-radius: 5px;
  }

  .go_read:hover{
    box-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 1.0);
  }

  span{
    color: #fff;
  }

</style>

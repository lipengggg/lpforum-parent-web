<template>
  <el-row>
      <div>
        <top></top>
      </div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" class="first">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">博文</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">书屋</el-menu-item>
        <el-menu-item index="4">交流</el-menu-item>
        <el-menu-item index="5">留言</el-menu-item>
        <el-menu-item index="6">写博文</el-menu-item>
        <div class="search">
          <search></search>
        </div>
      </el-menu>
  </el-row>
</template>

<script>
  import search from './search'
  import top from './top'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    search,
    top
  }
}
</script>

<style scoped>
  .el-menu-demo{
    border-radius: 10px;
  }
  .el-menu-demo el-menu-item{
  }
  .first{
    border-radius: 10px 0px 0px 10px;
  }
  .search{
    margin: 0px 0px 0px 400px;
    float: left;
  }
</style>

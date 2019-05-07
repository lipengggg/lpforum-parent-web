<template>
  <el-container id = "index">
    <el-aside width="100%">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
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
  #index{
    width: 100%;
    height: 100%;
  }
</style>

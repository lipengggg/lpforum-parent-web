<template>
  <div>
    <slipper></slipper>
    <el-row class="content">
      <el-col :span="18" class="content-left">
        <contentleft1></contentleft1>
        <contentleft2></contentleft2>
      </el-col>
      <el-col :span="6" class="content-right">
        <contentright></contentright>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import slipper from '../common/slipper'
  import contentleft1 from './content-left1/index'
  import contentleft2 from './content-left2/index'
  import contentright from './content-right/contentright'
  export default {
  data () {
    return {
    }
  },
  components: {
    slipper,
    contentleft1,
    contentleft2,
    contentright
  }
}
</script>

<style scoped>
  .content{
    width: 100%;
    height: 1000px;
    border-radius: 10px;
  }
  .content .content-left{

  }
  .content .content-right{
    color: chartreuse;
    border-radius: 10px;
    background-color: blue;
  }
</style>

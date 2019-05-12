<template>
  <el-carousel :interval="3000" arrow="always" class="slipper">
    <el-carousel-item v-for="item in slipperimg" :key="item.id">
      <el-image :src="item.url"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
      data () {
        return {
          slipperimg: [
            {id: '1',url: require('../../image/topbackground.jpg')},
            {id: '2',url: require('../../image/topbackground.jpg')},
            {id: '3',url: require('../../image/topbackground.jpg')},
            {id: '4',url: require('../../image/topbackground.jpg')},
            {id: '5',url: require('../../image/topbackground.jpg')},
            {id: '6',url: require('../../image/topbackground.jpg')},
            {id: '7',url: require('../../image/topbackground.jpg')}
          ]
        }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .slipper{
    border-radius: 10px;
  }
</style>

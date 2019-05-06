<template>
<!--    <div>
      计算：
      <h1>{{count}}</h1>
      <p>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
      </p>
    </div>-->
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import store from '../vuex/store'
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
  name: 'Count',
  data () {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapMutations(['add', 'reduce'])
  },
  methods: {
    ...mapGetters(['getCount']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  store
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

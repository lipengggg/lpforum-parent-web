<template>
    <div>
      计算：
      <h1>{{count}}</h1>
      <p>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
      </p>
    </div>
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
</style>

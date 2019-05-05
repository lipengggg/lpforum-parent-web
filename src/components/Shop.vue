<template>
    <div>
      <ul>
        <li v-for="(value) in categories" :key="value.name">
          <router-link :to='value.url'>{{value.name}}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      categories: [
        {id: 1, url: '/shop/phone', name: '手机'},
        {id: 2, url: '/shop/eat', name: '零食'},
        {id: 3, url: '/shop/boyClose', name: '男装'},
        {id: 4, url: '/shop/girlClose', name: '女装'},
        {id: 5, url: '/shop/shut', name: '鞋子'}
      ]
    }
  }
}
</script>

<style scoped>
</style>

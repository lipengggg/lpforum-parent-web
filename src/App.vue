<template>
  <div id="app">
    <router-link to = '/'>首页</router-link>
    <router-link to = '/Shop'>商城</router-link>
    <router-link to = '/Params/12345/上山打老虎'>动态路由</router-link>
    <router-link to = '/toHome'>回到首页</router-link>
    <router-link to = '/all'>所有</router-link>
    <router-link to = '/count'>计算</router-link>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    $route  (to, form, next) {
      console.log(to)
      console.log(form)
      console.log(next)
    }
  },
  name: 'App'
}
</script>

<style>
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,

  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
</style>

<template>
  <div id="app">
    <topmenu></topmenu>
    <!--<layout></layout>-->
    <!--<index></index>-->
  </div>
</template>

<script>
import topmenu from './components/common/topmenu'
import layout from './components/common/layout'
import leftmenu from './components/common/leftmenu'
import index from './components/index'

export default {
  data () {
    return {}
  },
  components: {
    topmenu,
    layout,
    leftmenu,
    index
  },
  name: 'App'
}
</script>

<style>
</style>

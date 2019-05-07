<template>
  <div id="app">
    <!--<topmenu></topmenu>-->
    <!--<layout></layout>-->
    <!--<index></index>-->
    <myheader></myheader>
  </div>
</template>

<script>
import topmenu from './components/common/topmenu'
import layout from './components/common/layout'
import leftmenu from './components/common/leftmenu'
import top from './components/common/top'
import index from './components/index'
import myheader from './components/common/myheader'

export default {
  data () {
    return {
    }
  },
  components: {
    topmenu,
    layout,
    leftmenu,
    index,
    top,
    myheader
  },
  name: 'App'
}
</script>

<style>
</style>

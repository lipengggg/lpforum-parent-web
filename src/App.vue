<template>
  <div id="app">
    <index></index>
    <div class="divcontent">
      <myheader></myheader>
      <mycontent></mycontent>
    </div>
    <div class="myroot">
      <myroot></myroot>
    </div>
  </div>
</template>

<script>
import leftmenu from './components/common/leftmenu'
import index from './components/index'
import myheader from './components/common/myheader'
import mycontent from './components/content/mycontent'
import myroot from './components/root/myroot'

export default {
  data () {
    return {
    }
  },
  components: {
    index,
    myheader,
    mycontent,
    myroot
  },
  name: 'App'
}
</script>

<style>
  .divcontent{
    width: 80%;
    margin: 0 auto;
    height: 1000px;
  }
</style>

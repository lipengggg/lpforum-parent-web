<template>
  <div id="particles">
  </div>
</template>

<script>

  export default {
    data () {
      return {
      }
    },
    components: {

    },
    mounted(){
      particlesJS.load('particles','static/particles.json');
    }
  }
</script>

<style scoped>
  #particles{
    position: absolute;
    overflow: scroll;
    width: 100%;
    height: 3000px;
    background-color: #000000;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>

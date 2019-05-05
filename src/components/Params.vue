<template>
    <div>
      <h1>年龄：{{ age }},姓名{{ name }}</h1>
    </div>
</template>

<script>
export default {
  name: 'Params',
  data () {
    return {
      age: this.$route.params.age,
      name: this.$route.params.name
    }
  }
}
</script>

<style scoped>
</style>

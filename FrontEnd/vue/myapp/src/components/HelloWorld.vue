<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>made by {{author}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      author: 'ryder'
    }
  },
  beforeCreate () {
    console.log('component before created.')
  },
  created () {
    console.log('component created.')
  },
  beforeMount () {
    console.log('before component mounted.')
  },
  mounted () {
    console.log('component mounted.')
    this.author = 'mary'
  },
  boforeUpdate () {
    console.log('before component updated')
  },
  updated () {
    console.log('component updated')
  },
  activited () {
    console.log('component activited')
  },
  deactivited () {
    console.log('component deactivited')
  },
  beforeDestroy () {
    console.log('component before destroy')
  },
  destroyed () {
    console.log('component destroyed')
  },
  errorCaptured () {
    console.log('component errorcaptured')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>

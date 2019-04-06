<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'welcome to afkcode'
    }
  },
  mounted () {
    // this.$nextTick(function() {
    this.msg = 'welcome to beijing'
    // })
  }
}
</script>

<template>
  <div>
    <navbar></navbar>
    <sort></sort>
    <tag></tag>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sort from '../components/Sort'
import Tag from '../components/Tag'

export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
    Navbar,
    Sort,
    Tag,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
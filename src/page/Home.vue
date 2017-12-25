<template>
  <div>
    <header class="main-header" style="background-image: url(http://ockct9nyz.bkt.clouddn.com/image/jpg/banner1.jpg);background-position: center">
    </header>
    <sticky>
          <navbar></navbar>
    </sticky>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sticky from "../components/Sticky"

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Navbar,
    Sticky
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-header {
  height: 220px;
}
</style>
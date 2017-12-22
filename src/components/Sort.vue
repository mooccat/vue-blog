<template>
  <div>
    <div class="widget">
      <div class="title">
        <h4>分类</h4>
      </div>
      <div class="content">
        <div v-for="(sort,index) in sortList" :key="sort._id">
          <a :href="'#article/'+ sort._id" v-if="index%7==1" class="float-left mb-3 mr-3 badge badge-primary">{{sort.name}}</a>
          <a v-if="index%7==2" class="float-left mb-3 mr-3 badge badge-secondary">{{sort.name}}</a>
          <a v-if="index%7==3" class="float-left mb-3 mr-3 badge badge-success">{{sort.name}}</a>
          <a v-if="index%7==4" class="float-left mb-3 mr-3 badge badge-danger">{{sort.name}}</a>
          <a v-if="index%7==5" class="float-left mb-3 mr-3 badge badge-warning">{{sort.name}}</a>
          <a v-if="index%7==6" class="float-left mb-3 mr-3 badge badge-info">{{sort.name}}</a>
          <a v-if="index%7==0" class="float-left mb-3 mr-3 badge badge-light">{{sort.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SortList",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sortList"])
  },
  methods: {
    ...mapActions(["getSortList"])
  },
  created() {
    this.getSortList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

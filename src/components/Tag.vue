<template>
  <div>
    <div class="widget">
      <div class="title">
        <h4>标签</h4>
      </div>
      <div class="content">
        <div v-for="(tag,index) in tagList" :key="tag._id">
          <a v-if="index%7==1" class="float-left mb-3 mr-3 badge badge-primary">{{tag.name}}</a>
          <a v-if="index%7==2" class="float-left mb-3 mr-3 badge badge-secondary">{{tag.name}}</a>
          <a v-if="index%7==3" class="float-left mb-3 mr-3 badge badge-success">{{tag.name}}</a>
          <a v-if="index%7==4" class="float-left mb-3 mr-3 badge badge-danger">{{tag.name}}</a>
          <a v-if="index%7==5" class="float-left mb-3 mr-3 badge badge-warning">{{tag.name}}</a>
          <a v-if="index%7==6" class="float-left mb-3 mr-3 badge badge-info">{{tag.name}}</a>
          <a v-if="index%7==0" class="float-left mb-3 mr-3 badge badge-light">{{tag.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TagList",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["tagList"])
  },
  methods: {
    ...mapActions(["getTagList"])
  },
  created() {
    this.getTagList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

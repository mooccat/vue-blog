<template>
    <el-row :gutter="20" style="margin-top:20px;">
        <el-col :xs="24" :md="16">
            <article-list></article-list>
        </el-col>
        <el-col :xs="24" :md="8">
            <sort></sort>
            <tag style="margin-top:20px;"></tag>
        </el-col>
    </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Sort from "../components/Sort";
import Tag from "../components/Tag";
import ArticleList from "../components/ArticleList";

export default {
  name: "Blog",
  data() {
    return {};
  },
  components: {
    ArticleList,
    Sort,
    Tag
  },
  methods: {
    ...mapActions(["getArticleList"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getArticleList(to.params);
    });
  },
  beforeRouteUpdate(to, from, next) {
      this.getArticleList(to.params);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<template>
    <el-row :gutter="20" style="margin-top:20px;">
        <el-col :xs="24" :md="24">
            <article-page></article-page>
        </el-col>
    </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ArticlePage from "../components/ArticlePage";

export default {
  name: "Article",
  data() {
    return {};
  },
  components: {
    ArticlePage,
  },
  methods: {
    ...mapActions(["getArticle"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getArticle(to.query);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
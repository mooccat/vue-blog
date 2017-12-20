<template>
    <div>
        {{articleList}}
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ArticleList",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["articleList"])
  },
  methods: {
    ...mapActions(["getArticleList"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getArticleList();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

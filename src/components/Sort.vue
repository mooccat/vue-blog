<template>
  <div>
    <el-card class="sort_panel">
      <div slot="header" class="clearfix">
        <span>分类</span>
      </div>
      <div class="content">
        <span class="sort">
          <router-link :to="{name:'blog'}">
            <el-tag :type="type[4]">全部</el-tag>
          </router-link>
        </span>
        <span v-for="(sort,index) in sortList" :key="sort._id" class="sort">
          <a :href="'#/blog/sort/'+sort._id">
            <el-tag :type="type[index%5]">{{sort.name}}</el-tag>
          </a>
        </span>
      </div>
    </el-card>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SortList",
  data() {
    return {
      type: ["", "success", "info", "waring", "danger"]
    };
  },
  computed: {
    ...mapGetters(["sortList"])
  },
  methods: {
    ...mapActions(["getSortList", "getArticleList"]),
  },
  created() {
    this.getSortList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.sort_panel {
  text-align: left;
  .sort {
    margin-right: 5px;
  }
}
</style>

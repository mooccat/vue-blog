<template>
  <div>
    <el-card class="tag_panel">
      <div slot="header" class="clearfix">
        <span>标签</span>
      </div>
      <div class="content">
        <span class="tag">
          <router-link :to="{name:'blog'}">
            <el-tag :type="type[4]">全部</el-tag>
          </router-link>
        </span>
        <span v-for="(tag,index) in tagList" :key="tag._id" class="tag">
          <a :href="'#/blog/tag/'+tag._id">
            <el-tag :type="type[index%5]">{{tag.name}}</el-tag>
          </a>
        </span>
      </div>
    </el-card>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TagList",
  data() {
    return {
      type: ["", "success", "info", "waring", "danger"]
    };
  },
  computed: {
    ...mapGetters(["tagList"])
  },
  methods: {
    ...mapActions(["getTagList", "getArticleList"]),
    getTag(tag) {
      if (tag) {
        this.getArticleList({ tag: tag._id });
        window.location.hash = "#blog?tag=" + tag._id;
      } else {
        this.getArticleList();
        window.location.hash = "#blog";
      }
    }
  },
  created() {
    this.getTagList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.tag_panel {
  text-align: left;
  .tag {
    margin-right: 5px;
  }
}
</style>

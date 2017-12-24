<template>
    <el-row :gutter="20">
        <el-col :span="24">
            <el-card :body-style="{ padding: '10px' }" class="article" v-if="article._id">
                <img :src="article.img" class="image">
                <div style="padding: 14px;">
                    <h1 class="title">{{article.title}}</h1>
                    <div class="info clearfix">
                        <span>{{article.author.name}}发布于</span>
                        <time class="time">{{ article.creat_at | timeToNow}}</time>
                        <span class="category">分类：
                            <a :href="'#/blog/sort/'+article.sort._id">{{article.sort.name}}</a>
                        </span>
                        <span>标签：</span>
                        <span v-for="tag in article.tags" :key="tag._id">
                            <a class="tag" :href="'#/blog/tag/'+tag._id">
                                <el-tag size="mini" round>{{tag.name}}</el-tag>
                            </a>
                        </span>
                    </div>
                    <div class="content" v-html="article.html"></div>
                </div>
            </el-card>
        </el-col>
        <link rel="stylesheet" href="http://ockct9nyz.bkt.clouddn.com/default.css">
    </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ArticlePage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["article"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.article {
  text-align: left;
  margin-bottom: 10px;
  h1 {
    margin: 5px 0px;
  }
  img {
    width: 100%;
  }
  .info {
    color: #71746e;
    .tag {
      margin-right: 5px;
    }
    .category {
      float: right;
    }
  }
}
</style>

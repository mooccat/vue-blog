<template>
  <el-row :gutter="20">
    <el-col :span="24" v-if="articleList.length===0">还没有文章，敬请期待</el-col>
    <el-col :span="24" v-for="(article, index) in articleList" :key="article._id">
      <el-card :body-style="{ padding: '10px' }" class="article">
        <img :src="article.img" class="image">
        <div style="padding: 14px;">
          <h1 class="title">{{article.title}}</h1>
          <div class="info clearfix">
            <span>{{article.author.name}}发布于</span>
            <time class="time">{{ article.creat_at | timeToNow}}</time>
            <span class="category">分类：
              <a :href="'#/blog/sort/'+article.sort._id">{{article.sort.name}}</a>
            </span>
          </div>
          <div class="content" v-html="article.summary"></div>
          <router-link :to="{name:'article',query:{_id:article._id}}"><el-button type="text" class="button">阅读全文</el-button></router-link>
          <footer>
            <span v-for="tag in article.tags" :key="tag._id">
              <a class="tag" :href="'#/blog/tag/'+tag._id">
                <el-tag size="mini" round>{{tag.name}}</el-tag>
              </a>
            </span>
          </footer>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ArticleList",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["articleList"])
  },
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
    .category {
      float: right;
    }
  }
  footer {
    color: #71746e;
    padding-top: 14px;
    border-top: 1px solid #ebebeb;
    a {
      text-decoration: none;
    }
    .tag {
      margin-left: 5px;
    }
  }
}
</style>

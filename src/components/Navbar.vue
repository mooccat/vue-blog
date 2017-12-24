<template>
  <header>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
      <a href=""><el-menu-item index="1" style="margin-left:40%">{{text[(new Date().getSeconds()%5)]}}</el-menu-item></a>
    </el-menu>
    <div class="line"></div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      text:[
        '山回路转不见君，雪上空留马行处。',
        '情不敢至深，恐大梦一场。卦不可算尽，畏天道无常',
        '我有一壶酒，足以慰风尘。',
        '醉后不知天在水，满船清梦压星河 。',
        '似此星辰非昨夜，为谁风露立中宵。',
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
  height: 50px;
  ul {
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 50px;
    background: #f6f6f6;
    li {
      display: inline-block;
      a {
        text-decoration: none;
        color: #000;
        padding-left: 10px;
        padding-right: 10px;
        :hover {
          background: #409eff;
        }
      }
    }
  }
}
</style>

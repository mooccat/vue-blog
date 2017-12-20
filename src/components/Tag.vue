<template>
    <div>
        {{tagList}}
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
  created(){
    this.getTagList()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

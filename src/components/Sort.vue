<template>
    <div>
        {{sortList}}
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SortList",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sortList"])
  },
  methods: {
    ...mapActions(["getSortList"])
  },
  created(){
    this.getSortList()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

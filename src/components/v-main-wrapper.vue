<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: "v-main-wrapper",

  props: {},
  data() {
    return {
      title: "main wrapper"
    };
  },
  computed: {},
  methods: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>

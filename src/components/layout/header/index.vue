<template>
  <v-app-bar app color="warning" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Title Page</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},

  async created() {},

  methods: {
  },
};
</script>

<style scoped>
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
    box-shadow: 0 0px 0px -0px rgba(0,0,0,.2), 0 0px 0px 0 rgba(0,0,0,.14), 0 0px 0px 0 rgba(0,0,0,.12) !important;
}
</style>

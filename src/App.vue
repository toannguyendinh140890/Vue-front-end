<template>
  <v-card class="overflow-hidden">
    <v-app>
      <Header />
      <Navigation />
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </v-card>
</template>

<script>
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Navigation from "./components/layout/navigation";

export default {
  components: {
    Header,
    Navigation,
    Footer,
  },
};
</script>

<style scoped></style>

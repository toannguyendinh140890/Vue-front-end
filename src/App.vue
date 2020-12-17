<template>
  <v-app>
    <Header />
    <Navigation />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Navigation from "./components/layout/navigation";
//import Login from "./components/modules/authentication";

export default {
  components: {
    Header,
    Navigation,
    Footer,
    //Login
  },
};
</script>

<style scoped></style>

<template>
  <v-card class="overflow-hidden">
    <v-app>
      <template v-if="show">
        <Header />
        <Navigation />
        <v-content>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-content>
        <Footer />
      </template>
      <template v-else>
        <transition>
          <keep-alive> <router-view /> </keep-alive>
        </transition>
      </template>
    </v-app>
  </v-card>
</template>

<script>
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Navigation from "./components/layout/navigation";
import { mapState } from "vuex";

export default {
  components: {
    Header,
    Navigation,
    Footer,
  },

  computed: {
    ...mapState("authen", ["is_login"]),
    show(){
      if(this.is_login){
        return true
      }
      return false
    }

  },

  async created() {
    this.$router.push({ path: '/login' });
  },

  methods: {},
};
</script>

<style scoped></style>

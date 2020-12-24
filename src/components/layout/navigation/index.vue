<template>
  <v-navigation-drawer app permanent :mini-variant.sync="mini" expand-on-hover>
    <v-list color="primary" dark>
      <v-list-item />
    </v-list>
    <v-divider></v-divider>
    
    <v-list >
      <v-list-item class="px-6">
        <img src="@/assets/images/logo.png" />
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>
        <v-list-item-title class="title">
          143093
        </v-list-item-title>
      </v-list-item>

      <v-list-item link >
        <v-list-item-content>
          <v-list-item-title class="title">
            Toan Nguyen
          </v-list-item-title>
          <v-list-item-subtitle>
            toan.nguyen@cyberlogitec.com
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense rounded>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {

  data() {
    return {
      mini: true,
      items: [
        { text: "Home", icon: "home", link: "/dashboard" },
        { text: "Real-Time", icon: "mdi-clock", link: "/real-time" },
        { text: "Audience", icon: "mdi-account", link: "/audience" },
        { text: "Conversions", icon: "mdi-flag", link: "/conversions" },
      ],
    };
  },

  computed: {},

  created() {},

  methods: {},
};
</script>

<style></style>

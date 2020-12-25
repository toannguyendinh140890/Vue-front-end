<template>
  <v-navigation-drawer app permanent :mini-variant.sync="mini" expand-on-hover>
    <v-list color="warning" dark style="height:64px">
      <v-list-item>
        <img style="height:55px" src="@/assets/images/logo.png" />
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>
        <v-list-item-title class="title">
          143093
        </v-list-item-title>
      </v-list-item>

      <v-list-item link>
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
      <template v-for="item in items">
        <v-list-group
          v-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <template v-slot:activator>
            <v-list-item :to="item.link">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :to="child.link"
          >
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ child.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else :key="item.text" :to="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
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
        { text: "Contacts", icon: "contacts" },
        { text: "Frequently contacted", icon: "history" },
        { text: "Duplicates", icon: "content_copy", link: "/real-time" },
        {
          text: "Labels",
          icon: "keyboard_arrow_up",
          "icon-alt": "keyboard_arrow_down",
          model: true,
          children: [
            { text: "Create Label", icon: "create", link: "/conversions" },
          ],
        },
        {
          text: "More",
          icon: "keyboard_arrow_up",
          "icon-alt": "keyboard_arrow_down",
          model: false,
          children: [
            { text: "Import", icon: "import_export", link: "/audience" },
            { text: "Export", icon: "upgrade" },
            { text: "Print", icon: "print" },
            { text: "Undo Changes", icon: "undo" },
            { text: "Other Contacts", icon: "alt_route" },
          ],
        },
        { text: "Settings", icon: "settings" },
        { text: "Send Feedback", icon: "chat_bubble" },
        { text: "Help", icon: "help" },
        { text: "App Downloads", icon: "phonelink" },
        { text: "Go To The Old Version", icon: "keyboard" },
      ],
    };
  },

  computed: {},

  created() {},

  methods: {},
};
</script>

<style scoped></style>

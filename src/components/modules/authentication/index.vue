<template>
  <v-app class="dark">
    <v-content>
      <v-container fluid fill-height justify-center grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs6 sm6 md6 lg4>
            <v-card class="elevation-12">
              <v-toolbar dark color="#00695c">
                <v-toolbar-title class="display-1">
                  Sign In To Vuetify Js
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" lazy-validation>
                  <v-text-field
                    label="User Name Or Email"
                    class="input-group--focused"
                    outlined
                    filled
                    required
                    prepend-inner-icon="account_circle"
                  />
                  <v-text-field
                    label="Password"
                    outlined
                    filled
                    prepend-inner-icon="vpn_key"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show2 ? 'text' : 'password'"
                    @click:append="show2 = !show2"
                    class="input-group--focused"
                    required
                  />
                  <v-checkbox class="no_margin_check_box" label="Remember Me" />
                  <v-btn rounded dark large block color="primary">
                    Sign In
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    show2: true,
  }),

  computed: {},

  methods: {},
};
</script>

<style scoped>
.bg_color {
  background-color: #e5e5e5;
}

.bg_width_color {
  background-color: #fff;
}

.wrapper_content {
  position: relative;
  padding: 50px 0 30px;
}

.welcome {
  padding: 0 0 20px !important;
}

.last_row {
  border-top: 1px solid #ccc;
  padding: 15px 0 20px !important;
}

.waiting {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: white;
  transform: scale(0.5, 0.5);

  transition: all 0.2s ease-out;
}

.waiting.show {
  opacity: 1;
  transform: scale(1, 1);
  z-index: 1000;
}

.login_response {
  line-height: 50px !important;
  color: var(--v-error-base);
}

.title-style {
  font-weight: bolder !important;
}

.no_margin_hori {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.no_margin_check_box {
  padding-top: 0px !important;
  margin-top: 0px !important;
}
</style>

<template>
  <v-footer color="warning" app dark>
    <v-col class="text-center" cols="12">
      {{ new Date().getHours() }}:{{ new Date().getMinutes() }}:{{
        new Date().getSeconds()
      }}
      {{ new Date().getDate() }}/{{ new Date().getMonth() }}/{{
        new Date().getFullYear()
      }}
      —
      <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped></style>

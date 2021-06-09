<template>
  <v-app dark>
    <navbar></navbar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import navbar from '~/components/navbar.vue'
export default {
  components: { navbar },
  //#region
  data() {
    return {}
  },
  methods: {},
  //#endregion
}
</script>

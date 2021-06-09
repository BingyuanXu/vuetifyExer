<template>
  <v-app dark>
    <navbar></navbar>
    <ads></ads>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Ads from '~/components/ads.vue'
import navbar from '~/components/navbar.vue'
export default {
  components: { navbar, Ads },
  //#region
  data() {
    return {}
  },
  methods: {},
  //#endregion
}
</script>

<template >
  <v-btn icon @click="changeTheme">
  <v-icon v-if="!dark">mdi-brightness-7</v-icon>
  <v-icon v-else>mdi-brightness-4</v-icon>
</v-btn>
</template>
<script>
export default {
  data: () => ({
    dark: false
  }),
  methods: {
    changeTheme () {
      this.dark = !this.dark
      this.$vuetify.theme.dark = this.dark
    }
  }
}
</script>

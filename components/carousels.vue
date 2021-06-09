<template>
  <div>
    <v-carousel hide-delimiters cycle v-model="model" height="250">
      <v-carousel-item v-for="(slice, i) in slices" :key="i">
        <v-sheet :color="slice.color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slice.name }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="upup">
      <v-row justify="center">
        <v-btn
          tile
          v-for="(slice, index) in slices"
          @click="model = index"
          @mouseenter="model = index"
          :key="index"
          elevation=""
          color=""
          >{{ slice.name }}</v-btn
        >
      </v-row>
    </div>
  </div>
</template>
<style>
.upup {
  position: relative;
  top: -35px;
}
</style>

<script>
export default {
  data() {
    return {
      slices: [
        { name: "热门产品", color: "primary" },
        { name: "特殊服务", color: "yellow darken-2" },
        { name: "福利美图", color: "red" },
        { name: "联系我们", color: "orange" }
      ],

      model: 0
    };
  }
};
</script>

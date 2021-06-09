<template>
  <div class="text-center align-center justify-space-around mt-5">
    <h1 class="float-left mt-n1 grey--text">Daily Meal</h1>

    <v-container>
      <addFood class="float-right"></addFood>
    </v-container>
    <v-card class="grey darken-4 mt-5 borderleft">
      <v-container
        class=""
        v-for="(food, index) in foods"
        :key="index"
        borderleft
      >
        <v-row :class="`borderleft ${food.mood}`">
          <v-col>
            <div class="grey--text text-caption">Breakfast</div>
            <div class="grey--text text--lighten-1">{{ food.breakfast }}</div>
          </v-col>
          <v-col>
            <div class="grey--text text-caption">Lunch</div>
            <div class="grey--text text--lighten-1">{{ food.lunch }}</div>
          </v-col>
          <v-col>
            <div class="grey--text text-caption">Dinner</div>
            <div class="grey--text text--lighten-1">{{ food.dinner }}</div>
          </v-col>
          <v-col>
            <div class="grey--text text-caption">Mood</div>
            <div class="text--lighten-1">
              <v-chip small :class="food.mood">{{ food.mood }}</v-chip>
            </div>
          </v-col>
          <v-col>
            <div class="grey--text text-caption">Data</div>
            <div class="grey--text text--lighten-1">{{ food.date }}</div>
          </v-col>
        </v-row>
        <v-divider class="mt-3 mb-n2"></v-divider>
      </v-container>
    </v-card>
  </div>
</template>

<style>
.v-chip.normal {
  background-color: rgba(0, 251, 255, 0.982) !important;
  color: black;
}
.v-chip.happy {
  background: rgb(64, 255, 0) !important;
  color: black;
}
.v-chip.bad {
  background: rgb(255, 255, 0) !important;
  color: black;
}
.v-chip.excellent {
  background: red !important;
  color: black;
}

.borderleft.normal {
  border-left: 4px solid rgba(0, 251, 255, 0.982);
}
.borderleft.happy {
  border-left: 4px solid rgb(64, 255, 0);
}
.borderleft.bad {
  border-left: 4px solid rgb(255, 255, 0);
}
.borderleft.excellent {
  border-left: 4px solid red;
}
</style>

<script>
import addFood from './addFood.vue'
export default {
  components: { addFood },
  props: {},
  created() {
    this.$fire.firestore.collection('project').onSnapshot((res) => {
      const changes = res.docChanges()
      console.log(changes)
      changes.forEach((change) => {
        if (change.type === 'added') {
          this.foods.push({ ...change.doc.data(), id: change.doc.id })
        }
      })
    })
  },
  data() {
    return {
      foods: [],
    }
  },
}
</script>

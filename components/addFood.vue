<template>
  <div>
    <v-snackbar
      app
      :timeout="2000"
      :value="snackbar"
      centered
      top
      color="primary"
      outlined
      v-model="snackbar"
    >
      loading successful!

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="grey--text text--lighten-1" v-bind="attrs" v-on="on">
            <v-icon class="mr-1">mdi-playlist-plus</v-icon>
            add food
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">吃饭饭</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="myForm">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="breakfast"
                      label="Breakfast*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="lunch"
                      label="Lunch*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="dinner"
                      label="Dinner*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['bad', 'normal', 'happy', 'excellent']"
                      label="Mood*"
                      v-model="mood"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-menu
                      nudge-top="250"
                      top
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Select Data"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn
              :loading="loading"
              color="blue darken-1"
              text
              @click="submita"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    date: null,
    breakfast: null,
    lunch: null,
    dinner: null,
    mood: null,
    menu: null,
    loading: false,
    snackbar: false,
  }),
  methods: {
    submita: async function () {
      this.loading = true
      const ele = {
        breakfast: this.breakfast,
        lunch: this.lunch,
        dinner: this.dinner,
        mood: this.mood,
        date: this.date,
      }
      if (this.$refs.myForm.validate()) {
        this.$fire.firestore
          .collection('project')
          .add(ele)
          .then(() => {
            this.loading = false
            this.snackbar = true
          })
      }
      this.dialog = false
    },
  },
}
</script>

<template>
  <nav>
    <v-toolbar height="55px">
      <v-app-bar-nav-icon
        depressed
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text">
            <v-btn to="/" depressed plain>
              <v-icon large right>mdi-face-woman-shimmer-outline</v-icon>
            </v-btn>


        <span class="font-weight-light">Gu</span>
        <span>KeXin</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <changeTheme></changeTheme>
      <v-btn text color="grey darken-3" small>
        <span>sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://pbs.twimg.com/profile_images/1387279201330294786/ViYiqphH.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>顾可欣</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-menu open-on-hover right offset-x>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item link v-bind="attrs" v-on="on">
              <v-list-item-content>
                <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon dark>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in menu" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" nuxt :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-group :value="false" prepend-icon="mdi-concourse-ci">
          <template class="ml-4" v-slot:activator>
            <v-list-item-title>变身</v-list-item-title>
          </template>

          <v-list-item
            class="ml-4"
            v-for="([title, icon], i) in change"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import changeTheme from "./changeTheme.vue";
export default {
  components: { changeTheme },
  //#region
  data() {
    return {
      selectedItem: null,
      menu: [
        { title: "个人信息" },
        { title: "设置" },
        { title: "选择账户" },
        { title: "退出" }
      ],
      change: [
        ["暴躁小河豚", "mdi-google-downasaur"],
        ["温柔小妹妹", "mdi-face-woman-shimmer"]
      ],

      drawer: false,
      items: [
        {
          icon: "mdi-home",
          title: "主页",
          to: "/"
        },

        {
          icon: "mdi-food",
          title: "吃饭",
          to: "/eat"
        },
        {
          icon: "mdi-sleep",
          title: "睡觉",
          to: "/sleep"
        },
        {
          icon: "mdi-school",
          title: "学习",
          to: "/study"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  methods: {},
  //#endregion
  abc() {
    console.log("a");
  }
};
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
      <v-list-item class="mt-5"
          prepend-avatar="https://w0.peakpx.com/wallpaper/907/575/HD-wallpaper-leviackermann2-anime-aot-attack-on-titan-black-dark-eren-levi-levi-ackermann-manga-mikasa.jpg  "
          title="Levi Ackerman"

      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
      <RouterLink class="active" to ='/'><v-list-item prepend-icon="mdi-account" title="User" value="home"></v-list-item></RouterLink>
      <RouterLink class="active" to="/"><v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item></RouterLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
     <RouterView/>

    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import ShowData from "./components/ShowData.vue";
import {RouterView,RouterLink} from "vue-router";
import DataTabel from "./components/DataTabel.vue";
import AddUser from "./components/AddUser.vue";

const drawer = ref(null)
</script>
 <style scoped>
 .active{
   text-decoration: none;
   color: #1a1a1a;
 }

 </style>
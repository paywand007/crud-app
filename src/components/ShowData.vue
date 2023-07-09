<script setup>
import {onMounted, ref} from "vue";
import {useFetchStore} from "../store/index.js";
import {useRouter,useRoute} from "vue-router";



const router =useRouter();
const route=useRoute()

// access the `store` variable anywhere in the component ✨
const store = useFetchStore()

console.log('show data')


onMounted( ()=> {
  store.fetchData()
})


</script>

<template>
  <v-container>
    <v-row justify="end" align="center"  >
      <v-col cols="auto">
       <RouterLink to="/addUser"> <v-btn  class=" w-20  bg-cyan text-white ">Add User</v-btn></RouterLink>
      </v-col></v-row>
  </v-container>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Email
      </th>
      <th class="text-left">
        Age
      </th>
      <th class="text-left">
        Actions
      </th>
    </tr>
    </thead>
    <div >

    </div>
    <tbody>
    <tr
        v-for="post in store.data" :key="post.id"
    >
      <td>{{ post.name }}</td>
      <td>{{ post.email }}</td>
      <td>{{ post.age }}</td>

            <td class="d-flex" style="gap:5px">
              <a @click="router.push(`/editItems/${post.id}`)">  <v-icon class="action">mdi-pencil</v-icon></a>
              <a   class="text-red"  @click="store.deleteData(post.id)"><v-icon class="action">mdi-delete</v-icon></a>
            </td>
    </tr>
    </tbody>

  </v-table>

</template>

<style scoped>
.v{
  width: 100px;
  height:20px;
  background: darkmagenta;
}
.action{
  cursor: pointer;
}


</style>
<script setup>
import {ref, onBeforeMount, onMounted, computed} from 'vue'
import {useForm,useField} from "vee-validate";
import {useFetchStore} from "../store/index.js";
import {useRoute,useRouter} from "vue-router";
import AddUser from "./AddUser.vue";

const { handleSubmit } = useForm()
const store =useFetchStore()
const item=ref(null)
const route=useRoute()
const router=useRouter()
const {id} =route.params
console.log(id)
// onBeforeMount(()=>{
//\  data.value=data.find(data=>data.id === parseInt(id))
// })
onMounted(   ()=> {
  store.fetchOnItem(id).then(res=> store.data=res)

})
 console.log(store.data)
const {value:phoneEmail,errorMessage:errMsg}=useField(
    'phoneoremail',
    'required|emailOrPhone')
const {value:name,errorMessage:ereMsgName}=useField('name','required')

const {value:age,errorMessage:errAge}=useField('age','required|age')

const cancel=()=>{
  router.back()
}
const submit = handleSubmit((value)=>{
if(id){
  store.editData(value,id)
router.push('/')}
else {
  store.addData(value)
  router.push('/')
}
})



</script>
<template>

<div  >

  <v-sheet class=" bg pa-12" rounded>

    <v-card class="mx-auto px-6 py-8" min-width="700">
      <v-form
          @click="submit">

        <v-text-field
            v-model="name"
            :error-messages="ereMsgName"

            class="mb-2"
            placeholder= "name"
        ></v-text-field>

        <v-text-field
            v-model="phoneEmail"
            :error-messages="errMsg"
            placeholder="email"
        >

        </v-text-field>
        <v-text-field
            v-model="age"
            :error-messages="errAge"

            placeholder="age"
        ></v-text-field>
        <br>
        <v-col cols="auto" >
          <v-btn
              v-if="id"
              block
              color="success"
              size="large"
              type="submit"
              @click=" submit"
          >
            Update
          </v-btn>
          <v-btn
              v-else
              block
              color="success"
              size="large"
              type="submit"
              @click=" submit"
          >
            Add User
          </v-btn>
          <v-btn
            block
            color="pink"
            size="large"
            type="submit"
            class="mt-3"
            @click="cancel"
        >
          Cancel
        </v-btn>
        </v-col >

      </v-form>
    </v-card>
  </v-sheet>
</div>



</template>


<style scoped>
.bg{
  background: slategray;
}
</style>
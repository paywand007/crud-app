import {createRouter,createWebHashHistory} from "vue-router";
import AddUser from "../components/AddUser.vue";
import ShowData from "../components/ShowData.vue";
import EditItems from "../components/EditItems.vue";
const routes=createRouter({
    history:createWebHashHistory(),
    routes: [
        { path: '/', component:ShowData },
        {path:'/addUser',component:EditItems},
        {path:'/editItems/:id', component:EditItems}

    ]

})
export default routes
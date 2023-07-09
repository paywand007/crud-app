import {defineStore} from "pinia";
import dataApi from "../api/dataApi.js";
import {useRouter} from "vue-router";
const router=useRouter()
export const useFetchStore=defineStore('fetch',{
    state: () => {
        return {

            data:{}
        }
    }
    ,
    actions:
        {
            async fetchData (){
                try {

                    await dataApi.get('/posts')
                        .then(data=> this.data=data.data);
                    console.log(this.data)
                }
                catch (err){
                    console.log(err)
                }
            },
            async addData(item){
                const resp=   await dataApi.post('/posts',{

                    id:Math.floor(Math.random() * 100),
                    name:item.name,
                    email:item.phoneoremail,
                    age:item.age,

                }).then(data => {
                    console.log('========',data)
                    this.data =  data.data
                })


            },
            async deleteData(id){

                await dataApi.delete(`/posts/${id}`)
                    .then(response => {
                        console.log(`Deleted post with ID ${id}`);
                        this.fetchData()
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
            async fetchOnItem(id){
                try {
                    console.log('===>',id)
                    await dataApi.get(`/posts/${id}`)
                    // .then(data=> this.data=data.data);
                    // console.log(this.data)
                }
                catch (err){
                    console.log(err)
                }
            }


            ,
            async editData(item,id){
                console.log(item)
                dataApi.patch(`/posts/${parseInt(id)}`, {
                    name:item.name,
                    email:item.phoneoremail,
                    age:item.age,
                })
                    .then(response => {
                        this.data = response.data

                            router.back()

                    })
                    .catch(error => console.error(error));
            }
        }

})

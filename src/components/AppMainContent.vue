<template>
    <section class="bg-black">
        <div class="container">
            <div class="row">
                <!-- <Cardcomponent :image="arr.img" :title="arr.item1" v-for="(arr,index) in newJson"/> -->
            </div>
            <div class="pt-4 pb-4">
               <h3 class="">--Content goes here--</h3>
               <Cardcomponent/>
            </div>
        </div>
    </section>
</template>


<script>

// import json from '../assets/data/dc-comics.json'
import Cardcomponent from './Cardcomponent.vue';
export default{
   name: 'AppMainContent',
   components:{
    Cardcomponent,
   },
   data(){
       return{
        // newJson: [...json]

        
       }
   }
}
</script>
<style lang="css" scoped></style>